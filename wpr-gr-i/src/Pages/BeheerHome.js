import Header from '../Components/Header.jsx'
import './Beheer.css'
import Knop from '../Components/Button.jsx'
// import { DeskundigePage } from './BeheerDeskundige'



const Knoppen = [
    {Naam: 'Opdrachten', href:""},
    {Naam: 'Uitloggen', href:"/"}
]


function Beheer({}){
    return (
        <>
            <Header Titel={"Beheerderspagina"} Knoppen={Knoppen}></Header>
            <div className='Blokjes'>                
                <Knop  label={"Overzicht van ervaringsdeskundigen"} href={"../Beheer/Deskundigen"} />
                <Knop  label={"Overzicht van bedrijven"} href={"../Beheer/Bedrijven"} />
                <Knop  label={"Overzicht van opdrachten"} href={"../Beheer/Opdrachten"} />
            </div>

            <h1>Hallo</h1>
        </>
    )

}
export default Beheer;