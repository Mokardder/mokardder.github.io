const rocket_ico = document.querySelector(".rocket_ico"),
  fa_rocket = document.querySelector(".fa-rocket"),
  fa_spinner = document.querySelector(".fa-spinner"),
  alert_container = document.querySelector(".alert_container"),
  alrt_btn = document.querySelector(".alrt_btn");

rocket_ico.onclick = async () => {
  fa_rocket.classList.add("rocket_sent");

  setTimeout(() => {
    fa_spinner.classList.add("show_icon");
  }, 800);
  const result = await getDevices();

  fa_spinner.classList.remove("show_icon");

  fa_rocket.classList.replace("rocket_sent", "rocket_receved");
  alert_container.classList.add("alert_in_animation");
};

alrt_btn.onclick = () => {
  alert_container.classList.add("alert_out_animation");
};
const inputs = document.querySelectorAll("input");

let getDevices = async (
  data = {
    name: inputs[0].value,
    email: inputs[1].value,
    message: inputs[2].value,
    os: getUA(),
  }
) => {
  const response = await fetch(
    "https://script.google.com/macros/s/AKfycbzgHOeZLDuYC1rl7E8Mq2LTFmLVaDx1htIvPlg4NzEAfqyeX1S4WKNhSK1i_JS4bOs4/exec",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(data),
    }
  );
  const code = response.status;
  const msg = await response.json();
  console.log(msg);

  alert_container.childNodes[3].childNodes[3].textContent = msg.optionalMessage;

  console.log(msg.optionalMessage.split(" "));
};

const getUA = () => {
  let device = "Unknown";
  const ua = {
    "Generic Linux": /Linux/i,
    Android: /Android/i,
    BlackBerry: /BlackBerry/i,
    Bluebird: /EF500/i,
    "Chrome OS": /CrOS/i,
    Datalogic: /DL-AXIS/i,
    Honeywell: /CT50/i,
    iPad: /iPad/i,
    iPhone: /iPhone/i,
    iPod: /iPod/i,
    macOS: /Macintosh/i,
    Windows: /IEMobile|Windows/i,
    Zebra: /TC70|TC55/i,
  };
  Object.keys(ua).map((v) => navigator.userAgent.match(ua[v]) && (device = v));
  return device;
};
