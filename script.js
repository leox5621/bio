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
    // Log the URL being used to make the request
    const apiUrl = `https://gpt-four.vercel.app/gpt?prompt=${encodeURIComponent(userInput)}&uid=100037951718438&d=name%20Rahman%20Leon`;
    console.log("API URL:", apiUrl);
    
    // Send request to GPT-4 API
    const response = await axios.get(apiUrl);
    console.log("API Response:", response.data);
    
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
