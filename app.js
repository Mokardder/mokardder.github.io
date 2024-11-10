
const url = 'https://script.google.com/macros/s/AKfycbxMd0_pM82ivia2kkuSh-ryyyG33x3ICcyONPb-FtN4dkF5OzKuvVhmQSEPlmXupN1d/exec';
const data = { find: 9932896502};

fetch(url, {
method: 'POST',
body: new URLSearchParams(data)
})
.then(response => response.json())
.then(data => console.log(data))
// .then(data => window.alert("Submitted"))
.catch(error => console.error(error));
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
// Function to show or hide the loader with fade animation based on the argument passed
function toggleLoader(action) {
    const loader = document.getElementById('loader');
    
    if (action === 'show') {
        loader.style.display = 'flex'; // Make sure loader is in the DOM
        setTimeout(() => {
            loader.style.opacity = 1; // Fade in the loader
        }, 10); // A slight delay to trigger the CSS transition
    } else if (action === 'hide') {
        loader.style.opacity = 0; // Fade out the loader
        setTimeout(() => {
            loader.style.display = 'none'; // Hide the loader after fade-out is complete
        }, 500); // Match this with the CSS transition duration
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


 
