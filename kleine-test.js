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
    res.render('./index', {
        log,
        log2
    })
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



reqproces.intent('oefenen', (conv, params) => {
    console.log("params vraag 1 hier ----------------------------------------------------------", params.niveau)
    log = JSON.stringify(params)
    conv.ask(`top dan gaan we ${params.language} op niveau ${params.number} doen. `);

    conv.data.vraag = 1;
    conv.ask("vertaal " + vraag(params.language, conv.data.vraag).toString())

});

reqproces.intent("vraag", (conv, params) => {
    console.log("antwoord ----------------------------------------------------------", params)
    log = JSON.stringify(params)
    log2 = JSON.stringify(conv)
})

function vraag(taal, curquestion) {

    const q = Object.keys(taal[curquestion])
    return q
}


const duits = {
    "goedenmorgen": "guten morgen"
}
const engels = {
    1: {
        "goedenmorgen": "good morning"
    },
    2: {
        "ongemakkelijk": "awkward"
    }
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