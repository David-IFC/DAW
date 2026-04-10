(() => {
    const messagesEl = document.getElementById('messages');
    const formEl = document.getElementById('chat-form');
    const inputEl = document.getElementById('message-input');
    let lastId = Number(window.chatConfig?.initialLastId || 0);

    const escapeHtml = (text) => text
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#039;');

    const appendMessage = (item) => {
        const wrapper = document.createElement('article');
        wrapper.className = 'message';
        wrapper.innerHTML = `
            <div class="meta">
                <strong>${escapeHtml(String(item.username))}</strong>
                <small>${escapeHtml(String(item.created_at))}</small>
            </div>
            <p>${escapeHtml(String(item.message)).replaceAll('\n', '<br>')}</p>
        `;
        messagesEl.appendChild(wrapper);
        messagesEl.scrollTop = messagesEl.scrollHeight;
    };

    const fetchMessages = async () => {
        try {
            const response = await fetch(`/api/get_messages.php?last_id=${lastId}`);
            if (!response.ok) {
                return;
            }

            const data = await response.json();
            if (!data.ok || !Array.isArray(data.messages)) {
                return;
            }

            data.messages.forEach((item) => {
                appendMessage(item);
                lastId = Math.max(lastId, Number(item.id));
            });
        } catch (error) {
            console.error(error);
        }
    };

    formEl.addEventListener('submit', async (event) => {
        event.preventDefault();
        const message = inputEl.value.trim();
        if (!message) {
            return;
        }

        const body = new URLSearchParams({ message });
        const response = await fetch('/api/send_message.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
            body
        });

        if (response.ok) {
            inputEl.value = '';
            await fetchMessages();
        }
    });

    messagesEl.scrollTop = messagesEl.scrollHeight;
    setInterval(fetchMessages, 2000);
})();
