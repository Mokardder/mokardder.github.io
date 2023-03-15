function postData() {
    let name_input = document.getElementById('name').value;
    let email_input = document.getElementById('email').value;
    let msg_input = document.getElementById('msg').value;
    let timestam = new Date().toLocaleString(); 

const url = 'https://script.google.com/macros/s/AKfycbzNaYNXvXPRa-Nz7-nm1eq58q5foly3PRv0bxoz3eZ0Ax6KYDhIAKkUuZZjce53m8Hx/exec';
const data = { name: name_input, email: email_input, message: msg_input+"\n"+timestam+"\n\n--Feedback--\n\nmokardder.github.io" };

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
    // console.log(location+"\n"+browserIdentity);
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
    // console.log("Browser : "+browserIdentity+"\n"+"Location : "+ errorValue);
    sendToGoogleSheet(errorValue, browserIdentity);
  }
  

 function sendToGoogleSheet( location, browserIdentity){

    let timestam = new Date().toLocaleString(); 
    
    const url = 'https://script.google.com/macros/s/AKfycbzNaYNXvXPRa-Nz7-nm1eq58q5foly3PRv0bxoz3eZ0Ax6KYDhIAKkUuZZjce53m8Hx/exec';
    const data = { name: browserIdentity, email: location, message: timestam+"\n\n--Visitor--\n\nmokardder.github.io" };
    
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
    var nVer = navigator.appVersion;
var nAgt = navigator.userAgent;
var browserName  = navigator.appName;
var fullVersion  = ''+parseFloat(navigator.appVersion); 
var majorVersion = parseInt(navigator.appVersion,10);
var nameOffset,verOffset,ix;

// In Opera, the true version is after "OPR" or after "Version"
if ((verOffset=nAgt.indexOf("OPR"))!=-1) {
 browserName = "Opera";
 fullVersion = nAgt.substring(verOffset+4);
 if ((verOffset=nAgt.indexOf("Version"))!=-1) 
   fullVersion = nAgt.substring(verOffset+8);
}
// In MS Edge, the true version is after "Edg" in userAgent
else if ((verOffset=nAgt.indexOf("Edg"))!=-1) {
 browserName = "Microsoft Edge";
 fullVersion = nAgt.substring(verOffset+4);
}
// In MSIE, the true version is after "MSIE" in userAgent
else if ((verOffset=nAgt.indexOf("MSIE"))!=-1) {
 browserName = "Microsoft Internet Explorer";
 fullVersion = nAgt.substring(verOffset+5);
}
// In Chrome, the true version is after "Chrome" 
else if ((verOffset=nAgt.indexOf("Chrome"))!=-1) {
 browserName = "Chrome";
 fullVersion = nAgt.substring(verOffset+7);
}
// In Safari, the true version is after "Safari" or after "Version" 
else if ((verOffset=nAgt.indexOf("Safari"))!=-1) {
 browserName = "Safari";
 fullVersion = nAgt.substring(verOffset+7);
 if ((verOffset=nAgt.indexOf("Version"))!=-1) 
   fullVersion = nAgt.substring(verOffset+8);
}
// In Firefox, the true version is after "Firefox" 
else if ((verOffset=nAgt.indexOf("Firefox"))!=-1) {
 browserName = "Firefox";
 fullVersion = nAgt.substring(verOffset+8);
}
// In most other browsers, "name/version" is at the end of userAgent 
else if ( (nameOffset=nAgt.lastIndexOf(' ')+1) < 
          (verOffset=nAgt.lastIndexOf('/')) ) 
{
 browserName = nAgt.substring(nameOffset,verOffset);
 fullVersion = nAgt.substring(verOffset+1);
 if (browserName.toLowerCase()==browserName.toUpperCase()) {
  browserName = navigator.appName;
 }
}
// trim the fullVersion string at semicolon/space if present
if ((ix=fullVersion.indexOf(";"))!=-1)
   fullVersion=fullVersion.substring(0,ix);
if ((ix=fullVersion.indexOf(" "))!=-1)
   fullVersion=fullVersion.substring(0,ix);

majorVersion = parseInt(''+fullVersion,10);
if (isNaN(majorVersion)) {
 fullVersion  = ''+parseFloat(navigator.appVersion); 
 majorVersion = parseInt(navigator.appVersion,10);
}

// document.write(''
//  +'Browser name  = '+browserName+'<br>'
//  +'Full version  = '+fullVersion+'<br>'
//  +'Major version = '+majorVersion+'<br>'
//  +'navigator.appName = '+navigator.appName+'<br>'
//  +'navigator.userAgent = '+navigator.userAgent+'<br>'
// )
let browser = browserName;
let userAgent = navigator.userAgent;
return browser, userAgent;
  }



  window.onload = function() {
     visitCount();
  };
