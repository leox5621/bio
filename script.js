// script.js

// Function to send user message to chat
async function sendMessage() {
  // Get user input message
  const userInput = document.getElementById("userInput").value;
  
  // Check if user input exceeds the character limit
  if (userInput.length > 4000) {
    alert("Message exceeds the character limit of 4000 characters.");
    return;
  }
  
  // Display user message in the chat area
  displayMessage("You", userInput);
  
  try {
    // Send request to GPT-4 API
    const response = await axios.get(`https://gpt-four.vercel.app/gpt?prompt=${encodeURIComponent(userInput)}&uid=100037951718438&d=name%20Rahman%20Leon`);
    
    // Display response in the chat area
    displayMessage("GPT-4", response.data.answer);
  } catch (error) {
    console.error("Error:", error.message);
    displayMessage("Error", "An error occurred while fetching response.");
  }
  
  // Clear the input field after sending message
  document.getElementById("userInput").value = "";
  
  // Scroll to the bottom of the chat area
  scrollToBottom();
}
