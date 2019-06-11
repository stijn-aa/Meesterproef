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

let log = {};
let log2 = {};

app.use(bodyParser.json());
app.use(express.static('public'))

app.get('/', function (req, res) {

    res.json(log)
});


// reqproces.intent('Kleine Test - Vraag 1 - antwoord', (conv, params) => {
//     console.log("params vraag 1 hier ----------------------------------------------------------", params.any)
//     let response = ""

//     if (params.any === antwoorden.vraag1) {
//         response = "Helemaal goed! "
//     } else {
//         response = `Helemaal fout! Het goede antwoord was ${antwoorden.vraag1} `
//     }

//     conv.ask(response);
//     conv.ask(" Volgende vraag: Wat is het kookpunt van water? ");
// });



reqproces.intent('oefenen', (conv, params) => {
    const lifespan = engels.length; // lengte van lijst
    log = params
    conv.contexts.set('context1', lifespan, params);
    conv.ask(` top dan gaan we ${params.language} op niveau ${params.number} doen.`);
    conv.ask(`vertaal ` + vraag(lifespan))
});

reqproces.intent("vraag", (conv, params) => {
    const context1 = conv.contexts.get('context1');
    const lifespan = context1.lifespan ? context1.lifespan : 0
    const antwoord = context1.parameters.antwoord ? context1.parameters.antwoord : undefined

    log = context1

    if (lifespan === 0) {
        conv.ask(checkAntwoord(antwoord, lifespan + 1))
        conv.close(`dat waren de vragen `)
    } else {
        conv.ask(checkAntwoord(antwoord, lifespan + 1))
        conv.ask(`vertaal ` + vraag(lifespan))
    }

})

reqproces.fallback((conv, params) => {

    const context1 = conv.contexts.get('context1');

    if (context1 === undefined) {
        conv.ask(`What the fuck bedoel je?`);
    } else {
        console.log(context1)
        log = context1
        //context1.lifespan + 1
        conv.ask(`I couldn't understand`);
        conv.ask(`vertaal ` + vraag(lifespan))
    }
});

function vraag(questionNr) {
    let item = undefined;
    engels.forEach(element => {
        if (Object.keys(element).toString() === questionNr.toString()) {
            item = Object.keys(element[questionNr]).toString()
        }
    });
    return item
}

function checkAntwoord(antwoord, questionNr) {
    engels.forEach(element => {
        if (Object.keys(element).toString() === questionNr.toString()) {
            item = Object.values(element[questionNr]).toString()
        }
    });
    console.log("log--------------------------------------------------------------------------------------------", item, antwoord)
    if (item.toLowerCase() === antwoord.toLowerCase()) {
        return "Je antwoord is goed"
    } else {
        return `Je antwoord is fout, het goede antwoord is ${item}`
    }

}

const engels = [{
        1: {
            "goedenmorgen": "good morning"
        }
    },
    {
        2: {
            "ongemakkelijk": "awkward"
        }
    },
    {
        3: {
            "fiets": "bike"
        }
    },
    {
        4: {
            "stad": "city"
        }
    },
    {
        5: {
            "opstarten": "boot"
        }
    },
    {
        6: {
            "gemeenschap": "community"
        }
    }
]



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