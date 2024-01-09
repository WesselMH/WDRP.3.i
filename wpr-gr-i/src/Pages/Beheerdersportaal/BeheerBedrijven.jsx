import Header from "../../Components/Header.jsx";
import "../Beheer.css";
import background from "./../backgroundWithGradient.png";

const Knoppen = [
  { Naam: "Terug naar beheerdersportaal home", href: "/BeheerdersPortaal" },
];

const Bedr = [
  {
    ID: "1",
    Gebruikersnaam: "Wessel",
    Bedrijfnaam: "Horsthuis",
    WebSite: "28-02-2003",
    Locatie: "asd@asd.com",
    Omschrijving: "0612345678",
  },
  {
    ID: "2",
    Gebruikersnaam: "Wessel",
    Bedrijfnaam: "Horsthuis",
    WebSite: "28-02-2003",
    Locatie: "asd@asd.com",
    Omschrijving: "0612345678",
  },
  {
    ID: "3",
    Gebruikersnaam: "Wessel",
    Bedrijfnaam: "Horsthuis",
    WebSite: "28-02-2003",
    Locatie: "asd@asd.com",
    Omschrijving: "0612345678",
  },
  {
    ID: "4",
    Gebruikersnaam: "Wessel",
    Bedrijfnaam: "Horsthuis",
    WebSite: "28-02-2003",
    Locatie: "asd@asd.com",
    Omschrijving: "0612345678",
  },
  {
    ID: "5",
    Gebruikersnaam: "Wessel",
    Bedrijfnaam: "Horsthuis",
    WebSite: "28-02-2003",
    Locatie: "asd@asd.com",
    Omschrijving: "0612345678",
  },
  {
    ID: "6",
    Gebruikersnaam: "Wessel",
    Bedrijfnaam: "Horsthuis",
    WebSite: "28-02-2003",
    Locatie: "asd@asd.com",
    Omschrijving: "0612345678",
  },
  {
    ID: "7",
    Gebruikersnaam: "Wessel",
    Bedrijfnaam: "Horsthuis",
    WebSite: "28-02-2003",
    Locatie: "asd@asd.com",
    Omschrijving: "0612345678",
  },
];

const ListBedr = Bedr.map((Bedr) => (
  <>
    <div className="BeheerItem">
      <p className="BeheerInhoud">{Bedr.ID}</p>
      <p className="BeheerInhoud">{Bedr.Gebruikersnaam}</p>
      <p className="BeheerInhoud">{Bedr.Bedrijfnaam}</p>
      <p className="BeheerInhoud">{Bedr.Locatie}</p>
      <p className="BeheerInhoud">{Bedr.WebSite}</p>
      <p className="BeheerInhoud">{Bedr.Omschrijving}</p>
    </div>
  </>
));

function BeheerBedrijven({}) {
  function ListBedrijvenRow() {
    return (
      <>
        {Bedr.map((item) => {
          return (
            <tr className="">
              <td className="BeheerInhoud">{item.Gebruikersnaam}</td>
              <td className="BeheerInhoud">{item.ID}</td>
              <td className="BeheerInhoud">{item.Bedrijfnaam}</td>
              <td className="BeheerInhoud">{item.Locatie}</td>
              <td className="BeheerInhoud">{item.WebSite}</td>
              <td className="BeheerInhoud">{item.Omschrijving}</td>
            </tr>
          );
        })}
        ;
      </>
    );
  }

  return (
    <>
      <Header Titel={"Lijst van bedrijven"} Knoppen={Knoppen}></Header>
      {/* <ul className="BeheerLijst">
        <div className="TitelBeheerLijst">
          <strong>ID</strong>
          <strong>Gebruikersnaam</strong>
          <strong>Bedrijfnaam</strong>
          <strong>Locatie</strong>
          <strong>WebSite</strong>
          <strong>Omschrijving</strong>
        </div>
        <div className="BeheerItems">{ListBedr}</div>
      </ul> */}
      <div className="App" style={{ backgroundImage: `url(${background})` }}>
        <style>
          {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;1,200&family=Roboto:ital,wght@1,300&display=swap');
        `}
        </style>

        <table className="BeheerLijst">
          <thead>
            <tr className="TitelBeheerLijst">
              <th>ID</th>
              <th>Gebruikersnaam</th>
              <th>Bedrijfnaam</th>
              <th>Locatie</th>
              <th>WebSite</th>
              <th>Omschrijving</th>
            </tr>
          </thead>
          <tbody>
            <ListBedrijvenRow />
          </tbody>
        </table>
      </div>
    </>
  );
}

export default BeheerBedrijven;
