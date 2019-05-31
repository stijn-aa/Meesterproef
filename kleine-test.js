var express = require("express");
var bodyParser = require('body-parser');
var app = express();
var server = require('http').createServer(app);
const ejs = require('ejs')
const fs = require('fs')
app.set('view engine', 'ejs');

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

let log = "123";

app.use(bodyParser.json());
app.use(express.static('public'))

app.get('/', function (req, res) {
    res.render('./index', {log})
});


reqproces.intent('Kleine Test - Vraag 1 - antwoord', (conv, params) => {
    console.log("params vraag 1 hier ----------------------------------------------------------", params.any)
    let response = ""

    if (params.any === antwoorden.vraag1) {
         response = "Helemaal goed! "
    } else {
         response = `Helemaal fout! Het goede antwoord was ${antwoorden.vraag1} `
    }

    conv.ask(response);
    conv.ask("Volgende vraag: Wat is het kookpunt van water? ");
});



reqproces.intent('oefenen-taal-niveau', (conv, params) => {
    console.log("params vraag 1 hier ----------------------------------------------------------", params.niveau)
    log = JSON.stringify(params)
});



reqproces.intent('Kleine Test - Vraag 2 - antwoord', (conv, params) => {
    console.log("params vraag 1 hier ----------------------------------------------------------", params.number)
    let response = ""


    if (params.number === antwoorden.vraag2) {
         response = "Helemaal goed! "
    } else {
        response = `Helemaal fout! Het goede antwoord was ${antwoorden.vraag2} `
    }

    conv.ask(response);
    conv.ask("Volgende vraag: Wat is het engelse woord voor ongemakkelijk? ");
});

reqproces.intent('Kleine Test - Vraag 3 - antwoord', (conv, params) => {
    console.log("params vraag 1 hier ----------------------------------------------------------", params.any)
    let response = ""


    if (params.any === antwoorden.vraag3) {
         response = "Helemaal goed! "
    } else {
        response = `Helemaal fout! Het goede antwoord was ${antwoorden.vraag3} `
    }

    conv.ask(response);
    conv.ask("Dit was de kleine test ");
    conv.ask("This is a text to check if the bot changes his language setting automatically ");
});

const antwoorden = {
    vraag1: 'amsterdam',
    vraag2: '100',
    vraag3: 'awkward'
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


// conv.followup('apply-for-license-event', {
//     date: new Date().toISOString(),
//   })