document.addEventListener("DOMContentLoaded", function() {
    const circleText = document.getElementById("circleText");

    // Fetch data from an API (example API)
    fetch('https://api.example.com/player-data')
        .then(response => response.json())
        .then(data => {
            // Assuming the API returns an object with a 'info' property
            circleText.textContent = data.info; // Adjust based on actual API response
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            circleText.textContent = "Error loading data";
        });
});