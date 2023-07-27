const reload = document.querySelector(".reload"),
  device_list = document.querySelector(".device_list");

const auth = JSON.parse(localStorage.getItem("user"));
if (auth == null || undefined || "") {
  // location.href = "www.google.com";
 
}


reload.onclick =  () =>{
  updateUi();
}


async function getDevices(key) {
  const response = await fetch(
    "https://mokardder.000webhostapp.com/api/browser/getDevices.php?key=" + key
  );

  const code = await response.status;
  const msg = await response.json();
  if (code == 200 && msg.status === "success") {
    // location.href = ""

    // console.log("Logged IN Successfully", msg);
    return msg;
  } else {
    console.log(msg);
  }
}

// console.log(auth.key);
// logMovies(auth.key);

let updateUi = async () => {
  device_list.innerHTML = "";
  const uKey = JSON.parse(localStorage.getItem("user"));
  const devices = await getDevices(uKey.key);

  // console.log(devices.status)

  

    // console.log(devices.status)

    devices.data.forEach(e => {
       console.log(e)
      let mobile = e.MobileName;
      let lActive = e.LastActive
      let fcm = e.FCMToken
      let userID = e.UserID
      let isScreenOn = e.isScreenOn
      let device = document.createElement("div")
      device.classList.add("device")
      device.setAttribute('FCM', fcm);
      device.setAttribute("userID", userID);
      device.innerHTML = 
      `
      <i class="fa-solid fa-mobile ico"></i>
      <p class="d-name">${isScreenOn} ${mobile}  </p>
      <p class="l-active">${lActive}</p>
      
      ` 
      device_list.appendChild(device)


      let deivceClick = device_list.querySelectorAll(".device")

      deivceClick.forEach(a =>{
        a.onclick = () =>{
          localStorage.setItem("fcm", a.getAttribute("FCM"))
          localStorage.setItem("userid", a.getAttribute("userID"))

          location.href = "../Controller/index.html"
          console.log(a.getAttribute("FCM"))
        }
      })

    });


  // console.log(devices.status)
};

updateUi();
