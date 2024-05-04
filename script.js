// script.js

function updateTime() {
  const timeElement = document.getElementById('time');
  const currentTime = new Date();
  const options = { timeZone: 'Asia/Dhaka', hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
  const timeString = new Intl.DateTimeFormat('en-US', options).format(currentTime);
  timeElement.textContent = timeString;
  
  const currentHour = currentTime.getHours();
  const container = document.querySelector('.container');
  if (currentHour >= 5 && currentHour < 12) {
    container.className = 'container morning';
  } else if (currentHour >= 12 && currentHour < 17) {
    container.className = 'container noon';
  } else if (currentHour >= 17 && currentHour < 20) {
    container.className = 'container evening';
  } else {
    container.className = 'container night';
  }
}

updateTime();
setInterval(updateTime, 1000);
