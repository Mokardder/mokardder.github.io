let inputName = document.querySelector(".input-name");
let submit_btn = document.querySelector("#submit-btn");
submit_btn.addEventListener("click", () => {
  localStorage.clear();
  let username = inputName.value;
  if (username == "") {
    window.alert("Enter Your Name");
  } else {
    let fchar = username.slice(0, 1);
    localStorage.setItem("fname", username);
    localStorage.setItem("fchar", fchar.toUpperCase());
    // console.log(localStorage.getItem("fchar"));
  }
});
