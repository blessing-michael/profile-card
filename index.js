
const timeElement = document.getElementById('user-time');

// Function to update time in milliseconds
function updateTime() {
    timeElement.textContent = Date.now();
}

// Initial render
updateTime();

// Update every second
setInterval(updateTime, 1000);
