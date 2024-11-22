let selectedUser = "Everyone"; // Default to sending to everyone

function selectUser(user) {
    selectedUser = user;
    document.getElementById('message').placeholder = `Message ${user}`; // Update placeholder
}

document.getElementById('send-btn').addEventListener('click', () => {
    const message = document.getElementById('message').value;
    const chatBox = document.getElementById('chat-box');

    if (message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', 'message-to-everyone');
        messageElement.textContent = `To ${selectedUser}: ${message}`;
        chatBox.appendChild(messageElement);
        document.getElementById('message').value = ''; // Clear the message input
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom
    }
});
