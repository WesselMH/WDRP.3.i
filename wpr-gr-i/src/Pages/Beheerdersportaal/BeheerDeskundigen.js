import Header from '../../Components/Header.jsx'
import '../Beheer.css'
import Knop from '../../Components/Button.jsx'

const Knoppen = [
    {Naam: 'Terug naar beheerdersportaal home', href:"/Beheerdersportaal"},
]

function BeheerDeskundigen({}){
    return(
        <>
            <Header Titel={"Lijst van ervaringsdeskundige"} Knoppen={Knoppen}></Header>
        </>
    )
}
export default BeheerDeskundigen;
