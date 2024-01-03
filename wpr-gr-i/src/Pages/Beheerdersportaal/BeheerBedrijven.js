import Header from '../../Components/Header.jsx'
import '../Beheer.css'
import Knop from '../../Components/Button.jsx'

const Knoppen = [
    {Naam: 'Terug naar beheerdersportaal home', href:"/Beheerdersportaal"},
]

function BeheerBedrijven({}){
    return(
        <>
            <Header Titel={"Lijst van bedrijven"} Knoppen={Knoppen}></Header>
              
        </>
    )
}
export default BeheerBedrijven;
