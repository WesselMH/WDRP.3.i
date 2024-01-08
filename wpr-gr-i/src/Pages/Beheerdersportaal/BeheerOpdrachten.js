import Header from '../../Components/Header.jsx'
import '../Beheer.css'
import Knop from '../../Components/Button.jsx'
import {Link} from 'react-router-dom'

const Knoppen = [
    {Naam: 'Terug naar beheerdersportaal home', href:"/Beheer/Home"},
]

function ApiRequest({}){
    fetch('https://wpr-i-backend.azurewebsites.net/api/Account')
        .then(Response => Response.json())
    
}


const opdracht = [
    { title: 'Opdracht 1', bedrijf: 'Mediamarkt', beschrijving: "Een internet interview over ervaring", datum: "12-12-12", id: 1 },
    { title: 'Opdracht 2', bedrijf: 'Microsoft', beschrijving: "Een internet interview over ervaring", datum: "12-12-12", id: 2 },
    { title: 'Opdracht 3', bedrijf: 'Albert Heijn', beschrijving: "Een internet interview over ervaring", datum: "12-12-12", id: 3 },
    { title: 'Opdracht 4', bedrijf: 'Albert Heijn', beschrijving: "Een internet interview over ervaring", datum: "12-12-12", id: 4 },
    { title: 'Opdracht 5', bedrijf: 'Albert Heijn', beschrijving: "Een internet interview over ervaring", datum: "12-12-12", id: 5 },
    { title: 'Opdracht 6', bedrijf: 'Albert Heijn', beschrijving: "Een internet interview over ervaring", datum: "12-12-12", id: 6 },
    { title: 'Opdracht 7', bedrijf: 'Albert Heijn', beschrijving: "Een internet interview over ervaring", datum: "12-12-12", id: 7 },
    { title: 'Opdracht 8', bedrijf: 'Albert Heijn', beschrijving: "Een internet interview over ervaring", datum: "12-12-12", id: 8 }
  
  ];

const listOpdrachten = opdracht.map((opdracht) => (
    <div className='BeheerItem'>
        {/* <Link className='BeheerItem' to={opdracht.href}> */}
        {/* <li  key={opdracht.id}> */}
            <p className='BeheerInhoud'>{opdracht.title}</p>
            <p className='BeheerInhoud'>{opdracht.bedrijf}</p>
            <p className='BeheerInhoud'>{opdracht.beschrijving}</p>
            <p className='BeheerInhoud'>{opdracht.datum}</p>
        {/* </li> */}
        {/* </Link> */}
    </div>
));

function BeheerOpdrachten({}){
    return(
        <>
            <Header Titel={"Lijst van opdrachten"} Knoppen={Knoppen}></Header>
            <ul className='BeheerLijst'>
                <div className="TitelBeheerLijst">
                    <strong>Titel</strong>
                    <strong>Bedrijf</strong>
                    <strong>Beschrijving</strong>
                    <strong>Datum gepost</strong>
                </div>
                <div className='BeheerItems'>
                    {listOpdrachten}
                </div>
            </ul>   
        </>
    )
}

export default BeheerOpdrachten;