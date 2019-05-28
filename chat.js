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


reqproces.intent('Kleine Test - Vraag 1 - antwoord', (conv, params) => {
    console.log(params)
    const response = undefined

    if (params.any = antwoorden.vraag1) {
         response = "Helemaal goed!"
    } else {
         response = `Helemaal fout! Het goede antwoord was ${antwoorden.vraag1}`
    }

    conv.ask(response);
});

reqproces.intent('Kleine Test - Vraag 2 - antwoord', (conv, params) => {
    console.log(params)
    const response = undefined


    if (params.temperature = antwoorden.vraag2) {
         response = "Helemaal goed!"
    } else {
        response = `Helemaal fout! Het goede antwoord was ${antwoorden.vraag2}`
    }

    conv.ask(response);
});

const antwoorden = {
    vraag1: 'Amsterdam',
    vraag2: '100'
}

reqproces.fallback((conv) => {
    conv.ask(`I couldn't understand`);
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