document.addEventListener("DOMContentLoaded", function() {
  const sendButton = document.getElementById("send");
  const msgInput = document.getElementById("msg");
  const conversation = document.getElementById("conversation");

  // Function to append messages to the conversation
  function appendMessage(text, sender) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add(sender); // 'user' or 'bot'
    messageDiv.textContent = text;
    conversation.appendChild(messageDiv);
    conversation.scrollTop = conversation.scrollHeight; // Scroll to the latest message
  }

  // Handle "Send" button click
  sendButton.addEventListener("click", function() {
    const userMessage = msgInput.value.trim();
    if (userMessage) {
      appendMessage(userMessage, 'user'); // Display user's message
      msgInput.value = ""; // Clear the input field

      // Simulate bot response after a short delay
      setTimeout(function() {
        const botResponse = "ZenMind is here to help you. 🙏"; // Simple placeholder response
        appendMessage(botResponse, 'bot'); // Display bot's message
      }, 1000);
    }
  });

  // Handle "Enter" key press for sending message
  msgInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      sendButton.click(); // Trigger send button click on "Enter"
    }
  });
});
