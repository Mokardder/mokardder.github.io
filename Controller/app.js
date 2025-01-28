const btn = document.querySelectorAll(".actionBtn"),
  flash = document.querySelector("#flash"),
  flashBtn = document.querySelectorAll(".flashBtn"),
  uiUpdate = document.querySelectorAll(".updateUi"),
  device = document.querySelector(".device"),
  ttsinput = document.querySelector("#ttsInput"),
  ttsBtn = document.querySelector(".ttsBtn");

let payload = {};

const fcm = localStorage.getItem("fcm");
const user = localStorage.getItem("userid");

ttsBtn.onclick = async (e) => {
  const data = e.target.getAttribute("data");
  // const type = e.target.getAttribute("type");

  ttsval = ttsinput.value;
  if (ttsval == "") {
    alert("Enter Some Text !");
    return;
  }

  payload = {
    data: {
      action: data,
      type: {
        text: ttsval,
      },
    },
    to: fcm,
  };

  const res = await SendAction(payload);

  console.log(res.success);
  if (res.success == 1) {
    console.log(data);
  } else if (res.failure == 1) {
    console.log(res.results[0].error);
  }
};

flashBtn.forEach((e) => {
  e.onclick = async (a) => {
    const data = a.target.getAttribute("data");
    const type = a.target.getAttribute("type");

    payload = {
      data: {
        action: data,
        type: {
          flash: String(type),
        },
      },
      to: fcm,
    };

    const res = await SendAction(payload);

    console.log(res.success);
    if (res.success == 1) {
      console.log(data);
    } else if (res.failure == 1) {
      console.log(res.results[0].error);
    }
  };
});

btn.forEach((a) => {
  a.onclick = async (e) => {
    const data = e.target.getAttribute("data");
    const type = e.target.getAttribute("type");

    if (flash.checked) {
      payload = {
        data: {
          action: data,
          type: {
            face: +type,
            flash: 1,
          },
        },
        to: fcm,
      };
    } else {
      payload = {
        data: {
          action: data,
          type: {
            face: +type,
            flash: 0,
          },
        },
        to: fcm,
      };
    }

    // console.log(payload);

    const res = await SendAction(payload);

    console.log(res.success);
    if (res.success == 1) {
      console.log(data);
    } else if (res.failure == 1) {
      console.log(res.results[0].error);
    }
  };
});

let SendAction = async (payload) => {
  const BASE_URL = "https://fcm.googleapis.com/fcm/send";
  const AUTH_KEY =
    "key=AAAAsmIcLSk:APA91bHmIcvDVGzhwD-W7TX--WOMizEvuz8YFovifpO6jIIdBEMcFd6KGKynJ2X8pTCAeFyY4Dm86hn1bUNj0YS7aquX-2hgC9Uyd8aTJCgCmplJ4s8dGocZ-UxMBMDWokVm9Plpq0Vf";

  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: AUTH_KEY,
    },
    body: JSON.stringify(payload),
  });

  return response.json(); // parses JSON response into native JavaScript objects
};

async function getSingle(key) {
  const response = await fetch("../php/getSingleDevice.php?key=" + key);

  const code = await response.status;
  const msg = await response.json();
  if (code == 200 && msg.status === "success") {
    // location.href = ""

    // console.log(msg);
    return msg;
  } else {
    console.log(msg);
  }
}

let updateUi = async (key) => {
  let res = await getSingle(key);
  uiUpdate.forEach((e) => {
    e.innerHTML = "";
  });
  let status = uiUpdate[0];
  let lastActive = uiUpdate[1];
  let appVersion = uiUpdate[2];
  let VersionName = uiUpdate[3];
  let ScreenUnlocked = uiUpdate[4];

  let lastActive_data = res.data[0].LastActive;
  let ver = res.data[0].Version.split("-");
  //   console.log(ver);

  let checkActive = getDateTimeStatus(lastActive_data);

  status.innerHTML = `Status: <span style="color:${
    checkActive == "Active" ? "green" : "red"
  };">${checkActive}</span>`;

  lastActive.textContent = lastActive_data;

  appVersion.innerHTML =
    res.data[0].Version == "" ? "Vname: NF" : `VName: ${ver[0]}`;
  VersionName.innerHTML =
    res.data[0].Version == "" ? "Vcode: NF" : `VCode: ${ver[1]}`;
  ScreenUnlocked.innerHTML = `Screen Unlocked:   ${
    res.data[0].isScreenOn == 0 ? "True" : "Else"
  }`;
  device.innerHTML = res.data[0].MobileName;
};

updateUi(user);

const getDateTimeStatus = (targetDateTimeStr) => {
  const [targetDateStr, targetTimeStr] = targetDateTimeStr.split(" ");
  const [targetDay, targetMonth, targetYear] = targetDateStr
    .split("-")
    .map(Number);
  const [targetHours, targetMinutes, targetSeconds] = targetTimeStr
    .split(":")
    .map(Number);

  const currentDate = new Date();
  const targetDate = new Date(
    targetYear,
    targetMonth - 1,
    targetDay,
    targetHours,
    targetMinutes,
    targetSeconds
  );

  const timeDifferenceMs = Math.abs(targetDate - currentDate);

  if (targetDate > currentDate || timeDifferenceMs > 2 * 60 * 1000) {
    return "Inactive";
  }

  const totalSeconds = Math.floor(timeDifferenceMs / 1000);
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  // return `${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds`;
  return "Active";
};
