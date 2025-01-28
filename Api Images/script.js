const container = document.querySelector(".image-container"),
  image = document.querySelectorAll(".image");

async function showData(val, page) {
  const response = await fetch("receiveData.php");

  const jsonData = await response.json();

  console.log(jsonData);
}

showData();

// async function logJSONData(val, page) {
//   const response = await fetch(
//     "https://pixabay.com/api/?key=38025233-ccf84f0ef75e3581a2c7730ed&q=" +
//       val +
//       "&image_type=photo&page=" +
//       page +
//       "&pretty=true"
//   );
//   const jsonData = await response.json();
//   // console.log(jsonData);
//   let totalImage = jsonData.hits;
//   // console.log(totalImage.length);

//   for (let i = 0; i < totalImage.length; i++) {
//     let image = document.createElement("div");
//     image.classList.add("image");

//     image.innerHTML = `
//       <img src="${jsonData.hits[i].largeImageURL}" alt=""/>

//       `;
//     container.appendChild(image);
//     console.log("hehe");
//     if (i == totalImage.length - 1) {
//       console.log("hehe");
//       let btn = document.createElement("button");
//       btn.innerHTML = "LoadMore";
//       btn.classList.add("btn");
//       container.appendChild(btn);

//       btn.onclick = (e) => {
//         localStorage.setItem("load", +localStorage.getItem("load") + 1);
//         logJSONData(localStorage.getItem("name"), localStorage.getItem("load"));
//         console.log(localStorage.getItem("load"));
//         // val++;
//         e.target.remove();
//       };
//     }
//   }
// }

// // logJSONData();

// image.forEach((e) => {
//   e.onclick = (a) => {
//     let text = a.target.childNodes[1].textContent;
//     container.innerHTML = "";
//     logJSONData(text);
//     localStorage.setItem("name", text);
//     localStorage.setItem("load", 1);
//   };
// });
