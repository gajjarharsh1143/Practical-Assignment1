const chatbotResponses = {
    greeting: [
        "Hi!",
        "Hello!",
        "Welcome!",
        "Hey there!",
        "Greetings!",
        "Hi, how can I help you?",
    ],
    age: `I'm old enough to reply you my sir.`,
    name: "My name is Jarvis.",
    feeling: "I'm feeling fine 😊",
    location: "I live in an AI-powered server.",
    fallback: "Sorry, I didn't get it. ",
};

function getRandomResponse(responses) {
    return responses[Math.floor(Math.random() * responses.length)];
}

function containsAny(message, keywords) {
    return keywords.some((keyword) => message.indexOf(keyword) > -1);
}

function containsAll(message, keywords) {
    return keywords.every((keyword) => message.indexOf(keyword) > -1);
}

module.exports.ChatbotReply = async function (message) {
    const lowercasedMessage = message;

    if (containsAny(lowercasedMessage, ["hi", "hello", "welcome", "hey"])) {
        return getRandomResponse(chatbotResponses.greeting);
    }
    else if (containsAll(lowercasedMessage, ["how", "are", "you"])) {
        return chatbotResponses.feeling;
    }
    else if (containsAll(lowercasedMessage, ["your", "name"])) {
        return chatbotResponses.name;
    }
    else if (containsAll(lowercasedMessage, ["your", "age"])) {
        return chatbotResponses.age;
    }
    else if (containsAll(lowercasedMessage, ["where", "you", "live"])) {
        return chatbotResponses.location;
    }
    else {
        return chatbotResponses.fallback;
    }
};