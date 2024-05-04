// script.js

// Function to send user message to chat
async function sendMessage() {
  // Get user input message
  const userInput = document.getElementById("userInput").value.trim();
  
  // Check if user input is empty
  if (!userInput) {
    return; // Don't send empty messages
  }
  
  // Display user message in the chat area
  displayMessage("user", userInput);
  
  try {
    // Send request to GPT-4 API
    const response = await axios.get(`https://gpt-four.vercel.app/gpt?prompt=${encodeURIComponent(userInput)}&uid=100037951718438&d=name%20Rahman%20Leon`);
    
    // Display response in the chat area
    displayMessage("bot", response.data.answer);
  } catch (error) {
    console.error("Error:", error.message);
    displayMessage("bot", "An error occurred while fetching response.");
  }
  
  // Clear the input field after sending message
  document.getElementById("userInput").value = "";
  
  // Show the send button
  document.getElementById("sendButton").style.display = "inline-block";
  
  // Scroll to the bottom of the chat area
  scrollToBottom();
}

// Function to display message in the chat area
function displayMessage(sender, message) {
  const chatArea = document.getElementById("chatArea");
  const messageElement = document.createElement("div");
  messageElement.classList.add("message", sender);
  messageElement.innerText = message;
  chatArea.appendChild(messageElement);
  
  // Scroll to the bottom of the chat area
  scrollToBottom();
}

// Function to scroll to the bottom of the chat area
function scrollToBottom() {
  const chatArea = document.getElementById("chatArea");
  chatArea.scrollTop = chatArea.scrollHeight;
}

// Event listener for send button
document.getElementById("sendButton").addEventListener("click", sendMessage);

// Event listener for pressing Enter key
document.getElementById("userInput").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    sendMessage();
  }
});
