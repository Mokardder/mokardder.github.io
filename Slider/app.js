const btn = document.querySelectorAll(".pos"),
  image = document.querySelector(".imges");
async function api(type) {
  let index = localStorage.getItem("ind") || 0;
  let page = localStorage.setItem(
    "page",
    +localStorage.getItem("page") || 0 + 1
  );
  const response = await fetch(
    `https://pixabay.com/api/?key=38025233-ccf84f0ef75e3581a2c7730ed&q=${type}&page=${page}`
  );
  const jsonData = await response.json();
  image.src = jsonData.hits[Math.round(Math.random() * 20)].largeImageURL;
}

let index = localStorage.getItem("ind") || 0;
btn[1].onclick = (e) => {
  index++;
  localStorage.setItem("ind++", +index);

  console.log(index % 3);
  if (index % 3 == 1) {
    api("flower");
  } else if (index % 3 == 2) {
    api("horror");
  } else if (index % 3 == 0) {
    api("sky");
  }
};

btn[0].onclick = (e) => {
  if (index == 0) {
    alert("noMore Back");
    return;
  }
  index--;
  localStorage.setItem("ind++", +index);
  console.log(localStorage.getItem("ind++"));

  if (index % 2 == 0) {
    console.log("eta 2nd");
  }
};

api("mountain", 2);
