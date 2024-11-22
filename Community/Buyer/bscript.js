document.getElementById('sendMessage').addEventListener('click', function() {
    const messageInput = document.getElementById('messageInput');
    const messageText = messageInput.value.trim();
    if (messageText) {
        const messageContainer = document.createElement('div');
        messageContainer.classList.add('message', 'sent');
        messageContainer.innerHTML = `
            <p>${messageText}</p>
            <span class="time">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
        `;
        document.getElementById('chatMessages').appendChild(messageContainer);
        messageInput.value = '';
        messageContainer.scrollIntoView({ behavior: 'smooth' });
    }
});
