
// const url = 'https://script.google.com/macros/s/AKfycbwyLYzWi4BFjxW46sfsaj54TZsvfsdclWBoRCwxSCQ_UYYZcj7CsnaBip40DWBUiqO0/exec';
// const data = { name: name_input, email: email_input, message: msg_input, type:"Feedback", date: timestam, site: "mokardder.000webhostapp.com"};

// fetch(url, {
// method: 'POST',
// body: new URLSearchParams(data)
// })
// .then(response => response.text())
// .then(data => console.log(data))
// .then(data => window.alert("Submitted"))
// .catch(error => console.error(error));
// }
/* Get Location */
// Get the full URL query string
const queryString = window.location.search;

// Parse the query string parameters
const urlParams = new URLSearchParams(queryString);

// Get the value of the 'param' parameter
const paramValue = urlParams.get('param');


alert(paramValue)

console.log(paramValue); // This will output 'Mokaredder' if the URL is ?param=Mokaredder

 
