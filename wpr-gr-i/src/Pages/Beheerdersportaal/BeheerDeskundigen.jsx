import Header from "../../Components/Header.jsx";
import "../Beheer.css";
import background from "./../backgroundWithGradient.png";

const Knoppen = [
  { Naam: "Terug naar beheerdersportaal home", href: "/BeheerdersPortaal" },
];

const Desk = [
  {
    ID: "1",
    Voornaam: "Wessel",
    Achternaam: "Horsthuis",
    GeboorteDatum: "28-02-2003",
    Email: "asd@asd.com",
    TelefoonNummer: "0647976660",
    PostCode: "2492NE",
    Beperking: "NULL",
    Hulpmiddelen: "NULL",
    Benadering: "NULL",
  },
  {
    ID: "2",
    Voornaam: "Wessel",
    Achternaam: "Horsthuis",
    GeboorteDatum: "28-02-2003",
    Email: "asd@asd.com",
    TelefoonNummer: "0647976660",
    PostCode: "2492NE",
    Beperking: "NULL",
    Hulpmiddelen: "NULL",
    Benadering: "NULL",
  },
  {
    ID: "3",
    Voornaam: "Wessel",
    Achternaam: "Horsthuis",
    GeboorteDatum: "28-02-2003",
    Email: "asd@asd.com",
    TelefoonNummer: "0647976660",
    PostCode: "2492NE",
    Beperking: "NULL",
    Hulpmiddelen: "NULL",
    Benadering: "NULL",
  },
  {
    ID: "4",
    Voornaam: "Wessel",
    Achternaam: "Horsthuis",
    GeboorteDatum: "28-02-2003",
    Email: "asd@asd.com",
    TelefoonNummer: "0647976660",
    PostCode: "2492NE",
    Beperking: "NULL",
    Hulpmiddelen: "NULL",
    Benadering: "NULL",
  },
  {
    ID: "5",
    Voornaam: "Wessel",
    Achternaam: "Horsthuis",
    GeboorteDatum: "28-02-2003",
    Email: "asd@asd.com",
    TelefoonNummer: "0647976660",
    PostCode: "2492NE",
    Beperking: "NULL",
    Hulpmiddelen: "NULL",
    Benadering: "NULL",
  },
  {
    ID: "6",
    Voornaam: "Wessel",
    Achternaam: "Horsthuis",
    GeboorteDatum: "28-02-2003",
    Email: "asd@asd.com",
    TelefoonNummer: "0647976660",
    PostCode: "2492NE",
    Beperking: "NULL",
    Hulpmiddelen: "NULL",
    Benadering: "NULL",
  },
  {
    ID: "7",
    Voornaam: "Wessel",
    Achternaam: "Horsthuis",
    GeboorteDatum: "28-02-2003",
    Email: "asd@asd.com",
    TelefoonNummer: "0647976660",
    PostCode: "2492NE",
    Beperking: "NULL",
    Hulpmiddelen: "NULL",
    Benadering: "NULL",
  },
];

const ListDeskundigen = Desk.map((Desk) => (
  <>
    <div className="BeheerItem">
      <p className="BeheerInhoud">{Desk.ID}</p>
      <p className="BeheerInhoud">{Desk.Voornaam}</p>
      <p className="BeheerInhoud">{Desk.Achternaam}</p>
      <p className="BeheerInhoud">{Desk.GeboorteDatum}</p>
      <p className="BeheerInhoud">{Desk.Email}</p>
      <p className="BeheerInhoud">{Desk.TelefoonNummer}</p>
      <p className="BeheerInhoud">{Desk.PostCode}</p>
      <p className="BeheerInhoud">{Desk.Beperking}</p>
      <p className="BeheerInhoud">{Desk.Hulpmiddelen}</p>
      <p className="BeheerInhoud">{Desk.Benadering}</p>
    </div>
  </>
));

function BeheerDeskundigen({}) {
  function ListDeskundigenRow() {
    return (
      <>
        {Desk.map((item) => {
          return (
            <tr className="">
              <td className="BeheerInhoud">{item.ID}</td>
              <td className="BeheerInhoud">{item.Voornaam}</td>
              <td className="BeheerInhoud">{item.Achternaam}</td>
              <td className="BeheerInhoud">{item.GeboorteDatum}</td>
              <td className="BeheerInhoud">{item.Email}</td>
              <td className="BeheerInhoud">{item.TelefoonNummer}</td>
              <td className="BeheerInhoud">{item.PostCode}</td>
              <td className="BeheerInhoud">{item.Beperking}</td>
              <td className="BeheerInhoud">{item.Hulpmiddelen}</td>
              <td className="BeheerInhoud">{item.Benadering}</td>
            </tr>
          );
        })}
        ;
      </>
    );
  }
  return (
    <>
      <Header
        Titel={"Lijst van ervaringsdeskundige"}
        Knoppen={Knoppen}
      ></Header>
      {/* <ul className="BeheerLijst">
        <div className="TitelBeheerLijst">
          <strong>ID</strong>
          <strong>Voornaam</strong>
          <strong>Achternaam</strong>
          <strong>GeboorteDatum</strong>
          <strong>Email</strong>
          <strong>TelefoonNummer</strong>
          <strong>PostCode</strong>
          <strong>Beperking</strong>
          <strong>Hulpmiddelen</strong>
          <strong>Benadering</strong>
        </div>
        <div className="BeheerItems">{ListDeskundigen}</div>
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
              <th>Voornaam</th>
              <th>Achternaam</th>
              <th>GeboorteDatum</th>
              <th>Email</th>
              <th>TelefoonNummer</th>
              <th>PostCode</th>
              <th>Beperking</th>
              <th>Hulpmiddelen</th>
              <th>Benadering</th>
            </tr>
          </thead>
          <tbody>
            <ListDeskundigenRow />{" "}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default BeheerDeskundigen;
