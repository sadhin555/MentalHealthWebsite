document.addEventListener('DOMContentLoaded', function() {
  const chatLog = document.getElementById('chatLog');
  const userInput = document.getElementById('userInput');
  const sendButton = document.getElementById('sendButton');

  sendButton.addEventListener('click', function() {
    const userMessage = userInput.value.trim();
    if (userMessage === '') return;

    // Disable user input and send button
    userInput.disabled = true;
    sendButton.disabled = true;

    // Simulate bot response (replace with actual chatbot logic)
    setTimeout(function() {
      const botResponse = " It's important to address your concerns. Let's explore this topic together.";
      appendMessage(botResponse, 'bot');

      // Enable user input and send button
      userInput.disabled = false;
      sendButton.disabled = false;

      userInput.value = '';
    }, 1000); // Simulated delay of 1 second for the bot's response
  });

  function appendMessage(message, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);
    messageDiv.textContent = message;
    chatLog.appendChild(messageDiv);
    chatLog.scrollTop = chatLog.scrollHeight;
  }
});
