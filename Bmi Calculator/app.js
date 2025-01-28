let skinny =
    "https://clipartix.com/wp-content/uploads/2018/03/pants-clipart-2018-37.jpg",
  normal =
    "https://cdn.pixabay.com/photo/2020/01/17/07/27/teacher-4772431_1280.png",
  obesity =
    "https://www.pngkey.com/png/full/79-799682_transparent-person-obese-fat-person-cartoon-transparent.png",
  overeight =
    "https://w7.pngwing.com/pngs/55/157/png-transparent-man-fat-overweight-fatness-person-standing.png",
  midWeight =
    "https://w7.pngwing.com/pngs/55/157/png-transparent-man-fat-overweight-fatness-person-standing.png";

const gender = document.querySelectorAll(".genderCheck"),
  genCon = document.querySelector(".gender"),
  input = document.querySelector(".input"),
  he = document.querySelectorAll(".inp")[1],
  we = document.querySelectorAll(".inp")[0],
  age = document.querySelectorAll(".inp")[2],
  submit = document.querySelector(".submit"),
  result = document.querySelector(".result"),
  con = document.querySelectorAll(".con")[0],
  imgMan = document.querySelector(".imgMan");

gender.forEach((e) => {
  e.oninput = () => {
    sessionStorage.setItem("gender", e.value);
    genCon.style.transform = "translateX(-400%)";
    input.style.transform = "translateX(00%)";
  };
});

let value;
submit.onclick = () => {
  let ages = age.value,
    height = he.value,
    weight = we.value;
  console.log(ages, height, weight);

  value = (weight / Math.pow(height, 2) / ages) * 100000;
  input.style.transform = "translateX(-400%)";
  result.style.transform = "translate(00%, -200px)";

  let img, status;
  if (value < 12.5) {
    img = skinny;
    status = "Under Weight";
  } else if (value >= 12.5 && value < 18.9) {
    img = normal;
    status = "Normal";
  } else if (value >= 18.9 && value < 23.9) {
    img = midWeight;
    status = "Over Weight";
  } else if (value > 23.9) {
    img = obesity;
    status = "Obesity";
  }
  con.innerHTML = `
  <h2>BMI Result</h2>
  <h3>BMI Score ${Math.round(value * 100) / 100}</h3>
  <h3>BMI Status = ${status}</h3>
  <h3>You May Look Like this =></h3>
  `;
  imgMan.src = img;
};
