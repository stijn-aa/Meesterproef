var express = require("express");
var app = express();
var server = require('http').createServer(app);
const {
    dialogflow,
    actionssdk,
    Image,
    Table,
    Carousel,
} = require('actions-on-google');
const reqproces = dialogflow({
    debug: true
});


reqproces.intent('test', (conv, params) => {
        conv.ask(`this is what i got`, params);
});

reqproces.fallback((conv) => {
    conv.ask(`I couldn't understand. You can change your name or say something in the chat with this app`);
});

reqproces.catch((conv, error) => {
    console.error(error);
    conv.ask('I encountered a glitch. Can you say that again?');
});

app.post('/webhook', reqproces);

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
})