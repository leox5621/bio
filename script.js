/* styles.css */

body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-size: cover;
  transition: background-image 1s ease-in-out;
}

.time, .info {
  text-align: center;
  margin-bottom: 20px;
}

h1, h2, p {
  color: #333;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5); /* Add text shadow for better readability */
}

.morning, .noon, .evening, .night {
  background-position: center; /* Center the background image */
  background-repeat: no-repeat; /* Prevent background image from repeating */
  background-size: cover; /* Cover the entire container with the background image */
}

.morning {
  background-image: url('https://tinyurl.com/236kum8f'); /* Replace with the morning image URL */
}

.noon {
  background-image: url('https://tinyurl.com/23napmab'); /* Replace with the noon image URL */
}

.evening {
  background-image: url('https://tinyurl.com/29bm9sm3'); /* Replace with the evening image URL */
}

.night {
  background-image: url('https://tinyurl.com/2dndkr7y'); /* Replace with the night image URL */
}

.footer {
  position: fixed;
  bottom: 10px;
  right: 10px;
  color: #666;
}
