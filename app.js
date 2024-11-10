
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

const getParams = () => {
 const queryString = window.location.search;


const urlParams = new URLSearchParams(queryString);

// Get the value of the 'param' parameter
return urlParams.get('consumerId');
}


const lastParam = getParams()


if (lastParam != null || undefined ){
  alert(lastParam)
}



// Function to show or hide the loader based on the argument passed
function toggleLoader(action) {
    const loader = document.getElementById('loader');
    
    if (action === 'show') {
        loader.style.display = 'flex'; // Show the loader
    } else if (action === 'hide') {
        loader.style.display = 'none'; // Hide the loader
    } else {
        console.error('Invalid action. Use "show" or "hide".');
    }
}

// Example usage: Simulate data fetching with a timeout
window.onload = function() {
    // Show the loader
    toggleLoader('show');

    // Simulate loading time (e.g., 3 seconds)
    setTimeout(() => {
        // Hide the loader and show content
        toggleLoader('hide');
        document.getElementById('content').style.display = 'block';
    }, 3000); // Adjust this duration as needed
};


 
