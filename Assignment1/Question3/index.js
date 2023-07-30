const Chatbot = require('./chatbot');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function showThinkingAnimation() {
    const dots = ["", ".", "..", "..."];

    for (let i = 0; i < 5; i++) {
        for (const dot of dots) {
            process.stdout.write("\r\u{1F916} : Replying " + dot);
            await sleep(200);
            process.stdout.clearLine();
            process.stdout.cursorTo(0);
        }
    }
}

async function getUserInput() {
    rl.question("\u{1F464} : ", async function (message) {
        if (message.trim().toLowerCase() === 'exit') {
            console.log("\u{1F916} : Bye Have a great Day.");
            rl.close();
            return;
        }

        process.stdout.write("\u{1F916} : Replying ");
        await showThinkingAnimation();

        const reply = await Chatbot.ChatbotReply(message);
        process.stdout.clearLine();
        process.stdout.cursorTo(0);
        console.log("\u{1F916} : " + reply);

        getUserInput();
    });
}

async function startChat() {
    console.log("\u{1F916} : Hi! I'm Jarvis your friendly AI. Type 'exit' to end the conversation.");
    await getUserInput();
}

startChat();

rl.on('close', function () {
    process.exit(0);
});