# Meesterproef

#### Opdracht:

Mijn meesterproef opdracht is om samen met 4 mede studenten een app voor de google assistent te bouwen. De app moet instaat zijn om kinderen tussen de 10 en 15 te helpen met het leren van woordjes. De bot moet samen met de kinderen de woordjes oefenen. Dit heeft 2 voordelen. Doordat de robot geen oordeel heeft over de prestaties van het kind ervaart het kind minder stres bij het leren. En het kind kan dit zelf en hoeft het kind niet te wachten op ouders om tijd vrij te maken.

Naast deze use case hebben we tijdens de gesprekken ook aangehaald dat het ook een hele mooie kans voor mensen met een visuele beperking. Zij kunnen met deze bot ook zelfstandig een nieuwe taal leren.


#### Leerdoelen:

Tijdens deze meesterproef wil ik 3 onderdelen van de minor uitdiepen. Ik wil in javascript gebruike maken van modules en hier een systeem in aanbrengen. Ik wil leren hoe ik een database moet opzetten en aanspreken. En ik wil kennis maken met BEM in combinatie met SCSS om css structuur te leren. 

Naast deze 3 focus punten ben ik door deze opdracht ook veel met de volgende web design elementen bezig.
-	ux (vocal user experience)
-	Rapid prototyping
-	Testing


## Proces

In de eerste 2 weken heeft iedereen individueel onderzocht hoe je voor de google assistent een app moest maken. Ik heb 2 kleine apps gemaakt die via een webhook data ophaalde uit mijn server. De eerste was een programmatje dat de NPO website van Pauw scrapt, om daarna aan de bot te kunnen vragen welke onderwerpen er bijvoorbeeld eergisteren bij pauw langs gekomen waren. De ander was een quiz bot die, als onderzoek voor het eind product, checkt of je het goede antwoord gaf op een vraag. Hierdoor werd mij al snel duidelijk dat de google assistent eigenlijk niet meer is dan een goede natural language procesor. Het is niet zo dat hij de context van het gesprek begrijpt (wat ik wel verwacht had). Een verwijs zin als bijvoorbeeld "doe maar de laatste optie" werken wel in google's eigen apps maar niet in apps die je zelf bouwt. 

<code snippet van vraag antwoord>

Na 2 weken zijn we gaan zitten en hebben we een week lang flowcharts gemaakt om de hele app uit te denken. Omdat het gaat om een vui, of Voice user interface, worden inplaats van knoppen alle events getriggerd door een spraak comando. We hebben om het voor de gebruiker overzichtelijk te houden gekozen voor een structuur waarbij je een trigger zin gebruikt om een actie te starten. Bij deze actie horen vervogl vragen. En als je klaar bent met de actie word er opnieuw gevraagt "wat wil je nu doen". Ons idee is dat je omdat het nog nieuwe techniek is hierdoor duidelijk weet in welke flow je zit, je weet wat je kunt vragen en duidelijk is wanneer je weer wat moet zeggen. 

We hebben geprobeerd om de spraak functie zo veel mogelijk te benutten en het zoveel mogelijk als een gesprek doen aanvoelen. We konden alleen niet om het gebruik van codes om lijsten aan te spreken heen. Om toch zo minmogelijk codes te gebruiken hebben we een extra feature verzonnen. We hebben naast losse lijsten ook “het kanaal” toegevoegd aan het systeem. Een kanaal voeg je één keer toe met een code en geeft je daarna toegang tot alle lijsten die al in dit kanaal zitten en in de toekomst toegevoegd worden. Als je gaat oefenen hoef je dan dus niet meer uit te zoeken welke code bij welke lijst hoort. We hebben het zo ontworpen dat je met het vak en de naam van de lijst de juiste lijst kunt vinden. Hierdoor imiteren we een echt gesprek het meest. Als je niet weet hoe de lijst heet die je wilt oefenen kun je dit natuurlijk vragen.

Om dit te realizeren zijn we eind van de 3de week begonnen met coderen. We hebben met trello alle features en to do's bij gehouden. Ik had als leerdoel leren werken met modules en een database. Arrash heeft aan mij uitgelegd hoe dit werkt en ik heb daarna de get list en quiz modules gebouwd. We hebben gewerkt met mongo DB en mongoose in nodeJS. Ik merkte dat ik het snel kon oppakken. De modules waren eenvoudig te bouwen en ik heb samen met arrash de structuur van de database bedacht en opgebouwd. Naast deze leerdoelen heb ik ook ervaren hoe het is om te werken in een groep met git. Om alles veilig te houden heeft arrash de github pagina beheert. Ik werd geinstrueerd om voor elke feature een apprate branch te maken van de dev branch. Door daarnaast met modules te werken zaten we vrij weinig in elkaars code en waren er bijna geen merge conflicten. De bestanden waar we samen in werkten waren vooral de controlers en omdat we dat wisten konden we makkelijk overzien wat er gebeurde. Omdat ik in deze week veel met de bot bezig was werd ik onofficieel een beetje chef botlogica. 

<code snippet van bot>

In week 4 heb ik omdat ik ook nog aan mijn BEM leerdoel wilde werken ook een cms pagina gebouwd. Mitch heeft mij eerst alle ins en outs van bem uitgelegd en ik heb daarna de channel overview pagina gemaakt. Om dat dit vooral kopieer en plak werk is geweest heb ik niet alles er uitgehaald en er niet zoveel tijd mee geoefend dat ik toch niet helemaal tevreden ben met dit leerdoel. Ik snap de theorie maar had bijvoorbeeld graag de landingpage gemaakt. Dit kon alleen niet omdat het zo niet uit in de verdeleing van features. Ik heb hierom van de mogelijkheid gebruik gemaakt om een van de artiekelen hier voor in te zetten. <link> gaat over mijn CSS ervaring en BEM. 

Op donderdag hadden we alle core functionalteiten staan en zijn mitch en ik korte user tests gaan doen om te kijken hoe mensen zonder ervaring op onze bot zouden reageren. Mijn bevindingen staan onderaan dit document maar wat vooral naarboven kwam is dat de gebruiker omdat het spraak is verwacht dat de bot meer context snapt zoals een mens die snapt. Wat dus belangrijk is is dat er veel duidelijk gemaakt moet worden in de reacties van de bot als er iest verkeerd gaat om de gebruiker in de goede richting bij te sturen. We hebben na de test onderandere extra geluidjes toe gevoegd en meer uitleg toegevoegd.

in het weekend voor week 5 hebben we alles afgemaakt en hebben we op maandag een lijst gemaakt met bugs die nog gefixd moesten worden. Daarnaast zijn we alle documentatie gaan schrijven. Er is een domein naam geregistreerd en hosting ingekocht. 

#### reflectie
Ik heb zoals ik hier boven ook al aangegeven heb zeker veel geleerd van 2 van de 3 leerdoelen. scss en bem heb ik op theoretischvlak nu door maar ga hier zelf nog in de praktijk mee oefenen. Naast deze leerdoelen uit de rubiks is het meest waardevolle toch wel het samenwerken en de techniek en theorie van de bot zelf geweest. Er zijn weinig momenten dat je 5 weken lang kunt werken aan een bijna af product in een zo nieuwe markt als deze. Ik ben erg tevreden over het resultaat en hij gaat zeker op mijn portfolio.


#### Tests
Om te testen hebben 2 studenten gevraagd om te gaan oefenen met de overhoorbot.

wat ging er goed? uitleg over de setting.

1.    De gebruiker ervaart dat het onduidelijk is wanneer er antwoord gegeven mag worden.
2.    De gebruiker ervaart frustratie wanneer de bot niet goed snapt wat je bedoelt. Hierdoor gaat de bot soms terug naar het begin.
3.    De gebruiker ervaart dat de woorden die hij zegt wel goed zijn maar de bot deze niet goed rekent. De oorzaak hiervoor is dat aan een woord niet herkent wordt welke taal er gesproken wordt en er dus vanuit wordt gegaan dat het Nederlands is. Een antwoord als “clock” op de vraag ”vertaal klok naar het Engels” wordt verstaan als “klok” en dus fout gerekend.
4.    De gebruiker ervaart verwarring wanneer hij een melding krijgt dat er nog niet geoefend kan worden door een gebrek aan lijsten terwijl de optie om te gaan oefenen wel gegeven is.
5.    De gebruiker ervaart verwarring door onvoldoende informatie over wat hij moet zeggen als hij het systeem voor het eerst gebruikt.
6.    De gebruiker ervaart onvoldoende overzicht in de mogelijkheden van de app.

Hiervoor hebben we de volgende oplossingen bedacht. Deze zijn deels doorgevoerd en deels advies voor tijdens het doorontwikkelen.

1.    Geluidje na vraag zodat je weet wanneer je mag
2.    Door context beter op te slaan onthouden vanaf waar de bot de fout in gegaan is en daar de draad oppakken.
3.    Woorden worden slecht herkent. Zinnen worden goed herkent in de goede taal. Advies om op zinnen te focussen
4.    Onboarding moet checken of er lijsten zijn en als dat niet zo is optie om te oefenen weglaten
5.    Voor elke intent een zero state met extra uitleg
6.    Website met tekst en uitleg zodat mensen op hun eigen snelheid de flow kunnen bekijken en snappen.


 beste bevindingen







