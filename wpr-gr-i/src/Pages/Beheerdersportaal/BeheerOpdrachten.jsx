import Header from "../../Components/Header.jsx";
import "../Beheer.css";
import { Link } from "react-router-dom";
import background from "./../backgroundWithGradient.png";

const Knoppen = [
  { Naam: "Terug naar beheerdersportaal home", href: "/BeheerdersPortaal" },
];

function ApiRequest({}) {
  fetch("https://wpr-i-backend.azurewebsites.net/api/Account").then(
    (Response) => Response.json()
  );
}

const opdracht = [
  {
    title: "Opdracht 1",
    bedrijf: "Mediamarkt",
    beschrijving: "Een internet interview over ervaring",
    datum: "12-12-12",
    id: 1,
  },
  {
    title: "Opdracht 2",
    bedrijf: "Microsoft",
    beschrijving: "Een internet interview over ervaring",
    datum: "12-12-12",
    id: 2,
  },
  {
    title: "Opdracht 3",
    bedrijf: "Albert Heijn",
    beschrijving: "Een internet interview over ervaring",
    datum: "12-12-12",
    id: 3,
  },
  {
    title: "Opdracht 4",
    bedrijf: "Albert Heijn",
    beschrijving: "Een internet interview over ervaring",
    datum: "12-12-12",
    id: 4,
  },
  {
    title: "Opdracht 5",
    bedrijf: "Albert Heijn",
    beschrijving: "Een internet interview over ervaring",
    datum: "12-12-12",
    id: 5,
  },
  {
    title: "Opdracht 6",
    bedrijf: "Albert Heijn",
    beschrijving: "Een internet interview over ervaring",
    datum: "12-12-12",
    id: 6,
  },
  {
    title: "Opdracht 7",
    bedrijf: "Albert Heijn",
    beschrijving: "Een internet interview over ervaring",
    datum: "12-12-12",
    id: 7,
  },
  {
    title: "Opdracht 8",
    bedrijf: "Albert Heijn",
    beschrijving: "Een internet interview over ervaring",
    datum: "12-12-12",
    id: 8,
  },
];

const listOpdrachten = opdracht.map((opdracht) => (
  <div className="BeheerItem">
    {/* <Link className='BeheerItem' to={opdracht.href}> */}
    {/* <li  key={opdracht.id}> */}
    <p className="BeheerInhoud">{opdracht.title}</p>
    <p className="BeheerInhoud">{opdracht.bedrijf}</p>
    <p className="BeheerInhoud">{opdracht.beschrijving}</p>
    <p className="BeheerInhoud">{opdracht.datum}</p>
    {/* </li> */}
    {/* </Link> */}
  </div>
));

function BeheerOpdrachten({}) {
  function ListOpdrachtenRow() {
    return (
      <>
        {opdracht.map((item) => {
          return (
            <tr className="">
              <td className="BeheerInhoud">{item.title}</td>
              <td className="BeheerInhoud">{item.bedrijf}</td>
              <td className="BeheerInhoud">{item.beschrijving}</td>
              <td className="BeheerInhoud">{item.datum}</td>
            </tr>
          );
        })}
        ;
      </>
    );
  }

  return (
    <>
      <Header Titel={"Lijst van opdrachten"} Knoppen={Knoppen}></Header>
      {/* <ul className="BeheerLijst">
        <div className="TitelBeheerLijst">
          <strong>Titel</strong>
          <strong>Bedrijf</strong>
          <strong>Beschrijving</strong>
          <strong>Datum gepost</strong>
        </div>
        <div className="BeheerItems">{listOpdrachten}</div>
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
              <th>Titel</th>
              <th>Bedrijf</th>
              <th>Beschrijving</th>
              <th>Datum gepost</th>
            </tr>
          </thead>
          <tbody>
            <ListOpdrachtenRow />{" "}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default BeheerOpdrachten;
