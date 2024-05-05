// Function to get the current time in Bangladesh time zone
function getBangladeshTime() {
    // Get the current time in UTC
    const now = new Date();

    // Set the time zone to Bangladesh time (GMT+6)
    const options = { timeZone: 'Asia/Dhaka' };
    const bdTime = now.toLocaleString('en-US', options);

    return bdTime;
}

// Function to update the time every second
function updateTime() {
    // Get the current Bangladesh time
    const bdTime = getBangladeshTime();

    // Display the Bangladesh time
    document.getElementById('bd-time').textContent = `Bangladesh Time: ${bdTime}`;
}

// Call the updateTime function initially and then every second to keep the time updated
updateTime();
setInterval(updateTime, 1000);
