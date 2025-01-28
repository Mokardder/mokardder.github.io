const wrapper = document.querySelector(".wrapper"),
  searchInput = document.querySelector(".searchBar"),
  searchbtn = document.querySelector("#Searchbtn"),
  catList = document.querySelectorAll(".cat"),
  overlay = document.querySelector(".overlayback"),
  sadaBox = document.querySelector(".newsbox");

overlay.onclick = () => {
  overlay.classList.remove("openOverlay");
};

async function fetchNews(data, date) {
  let query = data;

  const d = new Date();
  d.toLocaleDateString("en-GB").split("/").reverse().join("");

  let time = d.toLocaleDateString("en-CA").replaceAll("/", "-");

  let m = d.setDate(d.getDate() - 1);

  let min = d.toLocaleDateString("en-CA").replaceAll("/", "-");

  let teme = date || min;

  const response = await fetch(
    `https://newsapi.org/v2/everything?q=${query}&from=${min}&sortBy=publishedAt&apiKey=b3d305442bd643ebb049b139809f6463`
  );
  const news = await response.json();
  append(news);
}
fetchNews("india", null);

let append = (data) => {
  wrapper.innerHTML = "";
  if (data.status === "ok") {
    data.articles.forEach((e) => {
      let NC = document.createElement("div");

      checkIfImageExists(e.urlToImage, (exists) => {
        if (exists) {
          NC.classList.add("newsContainer");
          NC.setAttribute("post-link", e.url);
          NC.innerHTML = `
            <div class="moretext"></div>
            <div class="news">
              <img
                src="${e.urlToImage}"
                alt="${e.title}"
                srcset=""
              />
              <h4>${e.title}</h4>
              <h5 class="date">
                ${e.publishedAt.split("T")[0].replaceAll("-", "/")}
                <span class="tag"><i>${e.source.name}</i></span>
              </h5>
              <div class="para">
                ${e.description}
              </div>
            </div>
            
            
            `;

          wrapper.appendChild(NC);

          let cards = wrapper.querySelectorAll(".newsContainer");
          cards.forEach((b) => {
            b.onclick = (c) => {
              let img = b.childNodes[3].childNodes[1].currentSrc,
                title = b.childNodes[3].childNodes[3].textContent,
                content = b.childNodes[3].childNodes[7].textContent;
              overlay.classList.add("openOverlay");
              overlay.innerHTML = `
        <div class="newsbox">
        
          <h2 class="title">${title}<a href="${b.getAttribute(
                "post-link"
              )}" target="_blank"><i class="fa fa-external-link"></i></a></h2>
          <img src="${img}" alt="" />
          <div class="content">${content}</div>
        </div>
          `;
            };
          });
        } else {
          return;
        }
      });
    });
  }
};

const date = new Date();
date.toLocaleDateString("en-GB").split("/").reverse().join("");

let time = date.toLocaleDateString("en-CA").replaceAll("/", "-");

let m = date.setMonth(date.getMonth() - 1);

let min = date.toLocaleDateString("en-CA").replaceAll("/", "-");

searchbtn.onclick = (e) => {
  wrapper.innerHTML = `

  <div class="SearchDiv">

  <label for="start">Search Query</label>
<input type="date" id="date" value="${time}" min="${min}" max="${time}">

<input id="query" placeholder="Search Your Term" class="inputs" type="text" id="input">

<button class="buttons" id="sbd">Search</button>
</div>
  `;

  let sbd = wrapper.querySelector("#sbd"),
    date = wrapper.querySelector("#date"),
    searchQuery = wrapper.querySelector("#query");
  sbd.onclick = () => {
    if (searchQuery.value == "") {
      alert("Enter Something Query");
      return;
    }
    fetchNews(searchQuery.value);

    // fetchNews("india", date.value);
  };
};
// searchbtn.onclick = () => {
//   let query = searchInput.value;
//   fetchNews(query);
//   console.log("hehe");
// };

catList.forEach((e) => {
  e.onclick = () => {
    fetchNews(e.textContent);
  };
});

function checkIfImageExists(url, callback) {
  const img = new Image();
  img.src = url;

  if (img.complete) {
    callback(true);
  } else {
    img.onload = () => {
      callback(true);
    };

    img.onerror = () => {
      callback(false);
    };
  }
}
