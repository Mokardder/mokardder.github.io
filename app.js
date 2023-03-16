function postData() {
  let name_input = document.getElementById('name').value;
  let email_input = document.getElementById('email').value;
  let msg_input = document.getElementById('msg').value;
  let timestam = new Date().toLocaleString();


const url = 'https://script.google.com/macros/s/AKfycbwyLYzWi4BFjxW46sfsaj54TZsvfsdclWBoRCwxSCQ_UYYZcj7CsnaBip40DWBUiqO0/exec';
const data = { name: name_input, email: email_input, message: msg_input, type:"Feedback", date: timestam, site: "mokardder.github.io"};

fetch(url, {
method: 'POST',
body: new URLSearchParams(data)
})
.then(response => response.text())
.then(data => console.log(data))
.then(data => window.alert("Submitted"))
.catch(error => console.error(error));
}
/* Get Location */

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition,showError);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  let location ="https://www.google.com/maps/?q="+position.coords.latitude+","+position.coords.longitude;
  let browserIdentity = getBrowsername();
  sendToGoogleSheet(location, browserIdentity);
}

function showError(error) {
  let errorValue = "";
  let browserIdentity = getBrowsername();
  
  switch(error.code) {
      
    case error.PERMISSION_DENIED:
       errorValue = "User denied the request for Geolocation.";
      break;
    case error.POSITION_UNAVAILABLE:
      errorValue = "Location information is unavailable.";
      break;
    case error.TIMEOUT:
      errorValue = "The request to get user location timed out.";
      break;
    case error.UNKNOWN_ERROR:
      errorValue = "An unknown error occurred.";
      break;
  }
  sendToGoogleSheet(errorValue, browserIdentity);
}


function sendToGoogleSheet( location, browserIdentity){

  let timestam = new Date().toLocaleString(); 
  
  const url = 'https://script.google.com/macros/s/AKfycbwyLYzWi4BFjxW46sfsaj54TZsvfsdclWBoRCwxSCQ_UYYZcj7CsnaBip40DWBUiqO0/exec';
  // const data = { name: browserIdentity, email: location, message: timestam+"\n\n--Visitor--\n\nmokardder.000webhostapp.com" };
  
  const data = { name: browserIdentity, email: location, message: "", type:"Visitor", date: timestam, site: "mokardder.github.io"};



  fetch(url, {
  method: 'POST',
  body: new URLSearchParams(data)
  })
  .then(response => response.text())
  .then(data => console.log(data))
  .catch(error => console.error(error));    
}



function visitCount(){
getLocation();
}




function getBrowsername(){
const userAgentString = navigator.userAgent;
const regex = /\([^)]+\)/;
const match = userAgentString.match(regex);

if (match) {

  console.log(match[0]);
} else {
  console.log("No match found.");
}
let userAgent = match[0];
return userAgent;
}



window.onload = function() {
   visitCount();
};
