import Header from '../../Components/Header.jsx'
import '../Beheer.css'

const Knoppen = [
    {Naam: 'Terug naar beheerdersportaal home', href:"/Beheer/Home"},
]

const Desk = [
    {ID: "1", Voornaam: 'Wessel', Achternaam: "Horsthuis",GeboorteDatum: "28-02-2003", Email: "asd@asd.com", TelefoonNummer: "0647976660", PostCode: "2492NE", Beperking: "NULL", Hulpmiddelen: "NULL", Benadering: "NULL"},
    {ID: "2", Voornaam: 'Wessel', Achternaam: "Horsthuis",GeboorteDatum: "28-02-2003", Email: "asd@asd.com", TelefoonNummer: "0647976660", PostCode: "2492NE", Beperking: "NULL", Hulpmiddelen: "NULL", Benadering: "NULL"},
    {ID: "3", Voornaam: 'Wessel', Achternaam: "Horsthuis",GeboorteDatum: "28-02-2003", Email: "asd@asd.com", TelefoonNummer: "0647976660", PostCode: "2492NE", Beperking: "NULL", Hulpmiddelen: "NULL", Benadering: "NULL"},
    {ID: "4", Voornaam: 'Wessel', Achternaam: "Horsthuis",GeboorteDatum: "28-02-2003", Email: "asd@asd.com", TelefoonNummer: "0647976660", PostCode: "2492NE", Beperking: "NULL", Hulpmiddelen: "NULL", Benadering: "NULL"},
    {ID: "5", Voornaam: 'Wessel', Achternaam: "Horsthuis",GeboorteDatum: "28-02-2003", Email: "asd@asd.com", TelefoonNummer: "0647976660", PostCode: "2492NE", Beperking: "NULL", Hulpmiddelen: "NULL", Benadering: "NULL"},
    {ID: "6", Voornaam: 'Wessel', Achternaam: "Horsthuis",GeboorteDatum: "28-02-2003", Email: "asd@asd.com", TelefoonNummer: "0647976660", PostCode: "2492NE", Beperking: "NULL", Hulpmiddelen: "NULL", Benadering: "NULL"},
    {ID: "7", Voornaam: 'Wessel', Achternaam: "Horsthuis",GeboorteDatum: "28-02-2003", Email: "asd@asd.com", TelefoonNummer: "0647976660", PostCode: "2492NE", Beperking: "NULL", Hulpmiddelen: "NULL", Benadering: "NULL"},
]

const ListDeskundigen = Desk.map((Desk) => (
    <>
        <div className='BeheerItem'>
            <p className='BeheerInhoud'>{Desk.ID}</p>
            <p className='BeheerInhoud'>{Desk.Voornaam}</p>
            <p className='BeheerInhoud'>{Desk.Achternaam}</p>
            <p className='BeheerInhoud'>{Desk.GeboorteDatum}</p>
            <p className='BeheerInhoud'>{Desk.Email}</p>
            <p className='BeheerInhoud'>{Desk.TelefoonNummer}</p>
            <p className='BeheerInhoud'>{Desk.PostCode}</p>
            <p className='BeheerInhoud'>{Desk.Beperking}</p>
            <p className='BeheerInhoud'>{Desk.Hulpmiddelen}</p>
            <p className='BeheerInhoud'>{Desk.Benadering}</p>
        </div>
    </>
));

function BeheerDeskundigen({}){
    return(
        <>
            <Header Titel={"Lijst van ervaringsdeskundige"} Knoppen={Knoppen}></Header>
            <ul className='BeheerLijst'>
                <div className='TitelBeheerLijst'>
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
                <div className='BeheerItems'>
                    {ListDeskundigen}
                </div>
            </ul>
        </>
    )
}
export default BeheerDeskundigen;
