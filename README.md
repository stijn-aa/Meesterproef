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

In de eerste 2 weken heeft iedereen onderzocht hoe je voor de google assistent een app moest maken. Ik heb 2 kleine apps gemaakt die via een webhook data ophaalde uit mijn server. De eerste was een programmatje dat de NPO website van Pauw scrapt, om daarna aan de bot te kunnen vragen welke onderwerpen er gisteren bij pauw langs gekomen waren. De ander was een quiz bot die, als onderzoek voor het eind product, checkt of je het goede antwoord gaf op de vraag. Hierdoor werd mij al snel duidelijk dat de google assistent eigenlijk niet meer is dan een goede natural language procesor. Het is niet zo dat hij de context van het gesprek begrijpt (wat ik wel verwacht had). Bijvoorbeeld een verwijs zin als "doe maar de laatste optie" werken wel in google's eigen apps maar niet in apps die je zelf bouwt.

Na 2 weken zijn we gaan zitten en hebben we een week lang flowcharts gemaakt om de hele app uit te denken. Omdat het gaat om een vui, Voice user interface, worden inplaats van knoppen alle events getriggerd door een spraak comando. 


bouwen bot, mijn bijdrage, lukken de leerdoelen,
bouwen site, lukken de leerdoelen,



#### Tests
Om te testen hebben 2 studenten gevraagd om te gaan oefenen met de overhoorbot.

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








