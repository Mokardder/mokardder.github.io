const btn = document.querySelector("#login"),
  input = document.querySelector("#key"),
  label = document.querySelector(".label");

// console.log(input)
// if(input.value == 0){
//    label.style.top = "6px"
//    label.style.left = "7px"
// }else{
//     label.style.top = "-20px"
//     label.style.left = "5px"
// }

input.oninput = (a) => {
  if (a.target.value != 0) {
    label.style.top = "-20px";
    label.style.left = "5px";
  } else {
    label.style.top = "6px";
    label.style.left = "7px";
  }
};

btn.onclick = () => {
  if (input.value != 0) {
    logMovies(input.value);
  }
};

async function logMovies(key) {
  const response = await fetch(
    "https://mokardder.000webhostapp.com/api/browser/loginApi.php?key=" + key
  );

  const code = await response.status;
  const msg = await response.json();
  if (code == 200 && msg.status === "success") {
    // location.href = ""
    sessionStorage.setItem("user", JSON.stringify(msg));
    localStorage.setItem("user", JSON.stringify(msg));
    console.log("Logged IN Successfully", msg);
    location.href = `../LoadDevices/index.html`
  } else {
    throw new Error("Invalid USER");
  }
}
//   logMovies()
