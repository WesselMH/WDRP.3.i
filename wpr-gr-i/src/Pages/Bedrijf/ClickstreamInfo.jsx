import React, { useEffect, useState } from "react";
import Header from "../../Components/Header";
import { Link, Navigate } from "react-router-dom";
import background from "../backgroundWithGradient.png";
import "./ClickstreamInfo.css";
// import ReactGA from "react-ga4";

const headerButtons = [
  { Naam: "Terug", href: "/BedrijvenPortaal" },
  { Naam: "Uitloggen", href: "/" },
];

function ClickStream() {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };
  return (
    <>
      <Header Titel={"ClickStream Informatie"} Knoppen={headerButtons}></Header>
      <div
        className="Clickstream"
        style={{ backgroundImage: `url(${background})` }}
      >
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
        </style>

        <div className="tutorial-container">
          <div
            className={`step ${currentStep === 1 ? "active" : ""}`}
            id="step-1"
          >
            <h1>Stap 1: Maak een Analytics-account aan</h1>
            <p>
              Je eerste stap is het instellen van een Analytics-account, tenzij
              je er al een hebt. Ga verder met het aanmaken van een property
              tenzij je een apart account wilt aanmaken voor deze website en/of
              app. Bijvoorbeeld, je zou een ander account willen aanmaken als
              deze website en/of app toebehoort aan een afzonderlijk bedrijf.
            </p>
            <ol>
              <li>Ga naar https://analytics.google.com.</li>
              <li>
                In Beheerder, klik op Aanmaken en selecteer vervolgens Account.
              </li>
              <li>
                Geef een accountnaam op. Configureer de instellingen voor
                gegevens delen om te bepalen welke gegevens je deelt met Google.
              </li>
              <li>
                Klik op Volgende om de eerste property aan het account toe te
                voegen.
              </li>
            </ol>
            <button className="stream-button" onClick={nextStep}>
              Volgende
            </button>
          </div>
          <div
            className={`step ${currentStep === 2 ? "active" : ""}`}
            id="step-2"
          >
            <h1>Stap 2: Creëer een nieuwe Google Analytics 4-property</h1>
            <p>
              Je hebt de rol van Editor nodig om properties toe te voegen aan
              een Google Analytics-account. Als je dit account hebt aangemaakt,
              heb je automatisch de rol van Editor.
            </p>
            <p>
              - Je kunt maximaal 2.000 properties (elke combinatie van Universal
              Analytics en Google Analytics 4 properties) aan een
              Analytics-account toevoegen. Neem contact op met je
              ondersteuningsvertegenwoordiger om deze limiet te verhogen.
            </p>
            <p>Om een property aan te maken:</p>
            <ol>
              <li>
                Ga je verder vanaf "Maak een Analytics-account aan", hierboven?
                Zo ja, ga naar stap 2. Anders, in Beheerder, klik op Aanmaken en
                selecteer dan Property.
              </li>
              <li>
                Voer een naam in voor de property (bijv. "Mijn Bedrijf, Inc
                website") en selecteer de rapportagetijdzone en valuta. Als een
                bezoeker op dinsdag jouw website bezoekt in hun tijdzone, maar
                het is maandag in jouw tijdzone, wordt het bezoek geregistreerd
                als op maandag.
              </li>
              <li>
                Als je een tijdzone kiest die zomertijd hanteert, past Analytics
                automatisch aan voor tijdswijzigingen. Gebruik Greenwich Mean
                Time als je geen aanpassing voor zomertijd wilt.
              </li>
              <li>
                Het wijzigen van de tijdzone heeft alleen invloed op gegevens
                vanaf dat moment. Als je de tijdzone voor een bestaande property
                wijzigt, zie je mogelijk een vlakke plek of een piek in je
                gegevens, veroorzaakt door de tijdverschuiving vooruit of
                achteruit. Rapportgegevens kunnen gedurende een korte periode na
                het bijwerken van je instellingen nog verwijzen naar de oude
                tijdzone, totdat de Analytics-servers de wijziging hebben
                verwerkt.
              </li>
              <li>
                We raden aan de tijdzone voor een property niet meer dan eens
                per dag te wijzigen zodat Analytics de wijziging kan verwerken.
              </li>
              <li>
                Klik op Volgende. Selecteer je bedrijfstak en bedrijfsgrootte.
              </li>
              <li>
                Klik op Volgende. Selecteer hoe je van plan bent Google
                Analytics te gebruiken.
              </li>
              <li>
                Google Analytics past het set standaardrapporten aan op basis
                van de informatie die je verstrekt over hoe je van plan bent
                Analytics te gebruiken. Als je bijvoorbeeld kiest voor "Meer
                leads genereren," zie je een verzameling rapporten om je te
                helpen de leadgeneratie te meten. Lees meer over de
                rapportenverzameling voor zakelijke doelstellingen.
              </li>
              <li>
                Klik op Aanmaken en (indien je een nieuw account instelt)
                accepteer de Servicevoorwaarden en de Verwerkingsovereenkomst
                voor Analytics.
              </li>
            </ol>
            <p>
              Ga verder met het Toevoegen van een datastroom om gegevens te gaan
              verzamelen.
            </p>
            <button onClick={prevStep}>Vorige</button>
            <button onClick={nextStep}>Volgende</button>
          </div>
          <div
            className={`step ${currentStep === 3 ? "active" : ""}`}
            id="step-3"
          >
            <h1>Stap 3: Voeg een datastroom toe</h1>
            <p>
              Ga je verder vanaf "Maak een property aan", hierboven? Zo ja, ga
              naar stap 2. Anders,
            </p>
            <ol>
              <li>
                In Beheerder, onder Gegevensverzameling en wijziging, klik op
                Datastromen.
              </li>
              <li>Klik op Stroom toevoegen.</li>
              <li>Klik op Web.</li>
              <li>
                Voer de URL in van je hoofdwebsite, bijvoorbeeld "example.com
              </li>
              <li>
                Geef een naam aan de datastroom, bijvoorbeeld "Voorbeeld, Inc.
                (webstroom)
              </li>
              <li>
                Je hebt de keuze om verbeterde metingen in of uit te schakelen.
                Verbeterde metingen verzamelen automatisch informatie zoals
                paginaweergaven en diverse gebeurtenissen.
              </li>
              <li>
                Nadat de datastroom is aangemaakt, kun je altijd teruggaan en
                individueel de verbeterde meetgebeurtenissen uitschakelen die je
                niet wilt verzamelen. Daarom raden we aan om verbeterde metingen
                nu in te schakelen.
              </li>
              <li>Klik op "Stroom maken" om het proces te voltooien.</li>
            </ol>
            <button onClick={prevStep}>Vorige</button>
            <button onClick={nextStep}>Volgende</button>
          </div>
          <div
            className={`step ${currentStep === 4 ? "active" : ""}`}
            id="step-4"
          >
            <h1>Stap 4: Stel gegevensverzameling in voor websites</h1>
            <p>
              Je hebt toegang nodig tot de HTML van je webpagina's. Vraag je
              webontwikkelaar om deze stappen uit te voeren als je niet in staat
              bent om de stappen zelf te voltooien.
            </p>
            <ol>
              <li>Meld je aan bij je Google Analytics-account.</li>
              <li>Klik op Beheerder.</li>
              <li>Boven aan de kolom Property, selecteer je property.</li>
              <li>In de kolom Property, klik op Datastreams {`>`} Web.</li>
              <li>Klik op de datastroom voor je website.</li>
              <li>Onder Google-tag, klik op Instructies weergeven.</li>
              <li>
                Op de pagina met installatie-instructies, selecteer Handmatig
                installeren:
              </li>
              <li>
                Op het scherm zie je het JavaScript-snippet voor de Google-tag
                van je account. Je Google-tag is het volledige gedeelte code dat
                begint met:
              </li>
              <li>{`
                                <!--
                                <script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_MEASUREMENT_ID"></script>
                                <script>
                                    window.dataLayer = window.dataLayer || [];
                                    function gtag(){dataLayer.push(arguments);}
                                    gtag('js', new Date());
                                    gtag('config', 'YOUR_MEASUREMENT_ID');
                                </script>
                                -->
                            `}</li>
              <li>
                Plak je Google-tag direct na de {`<head>`} op elke pagina van je
                website.
              </li>
              <li>
                Het kan tot 30 minuten duren voordat de gegevensverzameling
                begint. Gebruik vervolgens het Realtime-rapport om te
                controleren of je gegevens ontvangt.
              </li>
            </ol>
            <button onClick={prevStep}>Vorige</button>
          </div>
          {/* Voeg meer stappen toe zoals hierboven */}
        </div>
      </div>
    </>
  );
}
export default ClickStream;
