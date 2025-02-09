const sendButton = document.getElementById("send-btn");
const userInput = document.getElementById("user-input");
const messages = document.getElementById("messages");
const bot = document.getElementById("bot");

function addMessage(message, sender) {
    const messageElement = document.createElement("div");
    messageElement.className = sender === "user" ? "user-message" : "bot-message";
    messageElement.textContent = message;
    messages.appendChild(messageElement);
    messages.scrollTop = messages.scrollHeight; // Scroll to the bottom
}

function setStatus(status) {
    bot.className = status; // Set the class to update bot status
}

async function getBotResponse(userMessage) {
    const apiKey = "sk-fPoevSxx7tRYdaNMkczbhCqUJt74-1xuNvzXgue4JpT3BlbkFJqlbDQFIwEjYNXUWXBQD1DC-XW2S6_veAwsjCrUkUMA"; // Use your OpenAI API key here

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo", // Change model if necessary
            messages: [{ role: "user", content: userMessage }],
        }),
    });

    const data = await response.json();
    return data.choices[0].message.content; // Get the chatbot's response
}

sendButton.addEventListener("click", async () => {
    const message = userInput.value;
    if (!message) return; // Don't send empty messages
    addMessage(message, "user");
    userInput.value = ""; // Clear the input field
    setStatus("thinking");

    try {
        const botResponse = await getBotResponse(message);
        addMessage(botResponse, "bot");
    } catch (error) {
        addMessage("Error: Unable to get response", "bot");
    } finally {
        setStatus("neutral");
    }
});
