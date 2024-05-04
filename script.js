// script.js

function updateTimeAndGreeting() {
  const timeElement = document.getElementById('time');
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  const options = { timeZone: 'Asia/Dhaka', hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
  const timeString = new Intl.DateTimeFormat('en-US', options).format(currentTime);
  timeElement.textContent = timeString;
  
  let greetingTop = '';
  let greetingMiddle = '';
  
  if (currentHour >= 5 && currentHour < 12) {
    greetingTop = '🌅 Good Morning!';
    greetingMiddle = '🌄 Have a wonderful day ahead!';
  } else if (currentHour >= 12 && currentHour < 17) {
    greetingTop = '☀️ Good Afternoon!';
    greetingMiddle = '🌞 Hope you\'re having a great day!';
  } else if (currentHour >= 17 && currentHour < 20) {
    greetingTop = '🌆 Good Evening!';
    greetingMiddle = '🌇 Enjoy your evening!';
  } else {
    greetingTop = '🌃 Good Night!';
    greetingMiddle = '🌉 Have a restful night!';
  }
  
  document.getElementById('topGreeting').textContent = greetingTop;
  document.getElementById('middleGreeting').textContent = greetingMiddle;
}

updateTimeAndGreeting();
setInterval(updateTimeAndGreeting, 1000);
