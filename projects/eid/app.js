let dayEl = document.querySelector("#day");
let hrsEl = document.querySelector("#hours");
let minsEl = document.querySelector("#mins");
let secEl = document.querySelector("#sec");

// Eid Count Down
const eid = new Date("22 Apr 2023").getTime();

let eid_count = () => {
  const eid_date = new Date(eid);
  const today_date = new Date();
  const ttl_seconds = (eid_date - today_date) / 1000;

  const days = Math.floor(ttl_seconds / 3600 / 24);
  const hours = Math.floor((ttl_seconds / 3600) % 24);
  const minutes = Math.floor((ttl_seconds / 60) % 60);
  const seconds = Math.floor(ttl_seconds) % 60;
  dayEl.innerHTML = days;
  hrsEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(minutes);
  secEl.innerHTML = formatTime(seconds);
};

let formatTime = (time) => {
  return time < 10 ? `0${time}` : time;
};

setInterval(eid_count, 1000);


let wpBtn = document.querySelector("#wpshare");
let user = document.querySelector("#name");
let userName = user.innerHTML;
wpBtn.addEventListener("click", () => {
  wpBtn.setAttribute(
    "href",
    `whatsapp://send?text=*${userName}*%0A%0A*Has Sent You a Surprise*%0A%0A*Click to check now 👇👇👇*%0A%0A${window.location.href}`
  );
});
