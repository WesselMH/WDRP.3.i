import Header from '../../Components/Header.jsx'
import '../Beheer.css'
import Knop from '../../Components/Button.jsx'

const Knoppen = [
    {Naam: 'Terug naar beheerdersportaal home', href:"/Beheer/Home"},
]


const Bedr = [
    {ID: "1", Gebruikersnaam: 'Wessel', Bedrijfnaam: "Horsthuis",WebSite: "28-02-2003", Locatie: "asd@asd.com", Omschrijving: "0647976660"},
    {ID: "2", Gebruikersnaam: 'Wessel', Bedrijfnaam: "Horsthuis",WebSite: "28-02-2003", Locatie: "asd@asd.com", Omschrijving: "0647976660"},
    {ID: "3", Gebruikersnaam: 'Wessel', Bedrijfnaam: "Horsthuis",WebSite: "28-02-2003", Locatie: "asd@asd.com", Omschrijving: "0647976660"},
    {ID: "4", Gebruikersnaam: 'Wessel', Bedrijfnaam: "Horsthuis",WebSite: "28-02-2003", Locatie: "asd@asd.com", Omschrijving: "0647976660"},
    {ID: "5", Gebruikersnaam: 'Wessel', Bedrijfnaam: "Horsthuis",WebSite: "28-02-2003", Locatie: "asd@asd.com", Omschrijving: "0647976660"},
    {ID: "6", Gebruikersnaam: 'Wessel', Bedrijfnaam: "Horsthuis",WebSite: "28-02-2003", Locatie: "asd@asd.com", Omschrijving: "0647976660"},
    {ID: "7", Gebruikersnaam: 'Wessel', Bedrijfnaam: "Horsthuis",WebSite: "28-02-2003", Locatie: "asd@asd.com", Omschrijving: "0647976660"},
]

const ListBedr = Bedr.map((Bedr) => (
    <>
        <div className='BeheerItem'>
            <p className='BeheerInhoud'>{Bedr.ID}</p>
            <p className='BeheerInhoud'>{Bedr.Gebruikersnaam}</p>
            <p className='BeheerInhoud'>{Bedr.Bedrijfnaam}</p>
            <p className='BeheerInhoud'>{Bedr.Locatie}</p>
            <p className='BeheerInhoud'>{Bedr.WebSite}</p>
            <p className='BeheerInhoud'>{Bedr.Omschrijving}</p>
        </div>
    </>
));

function BeheerBedrijven({}){
    return(
        <>
            <Header Titel={"Lijst van bedrijven"} Knoppen={Knoppen}></Header>
            <ul className='BeheerLijst'>
                <div className='TitelBeheerLijst'>
                    <strong>ID</strong>
                    <strong>Gebruikersnaam</strong>
                    <strong>Bedrijfnaam</strong>
                    <strong>Locatie</strong>
                    <strong>WebSite</strong>
                    <strong>Omschrijving</strong>
                </div>
                <div className='BeheerItems'>
                    {ListBedr}
                </div>
            </ul>
        </>
    )
}

export default BeheerBedrijven;