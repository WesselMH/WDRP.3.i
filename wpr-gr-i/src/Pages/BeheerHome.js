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
                <Knop  label={"Overzicht van ervaringsdeskundigen"} href={"Deskundigen"} />
                <Knop  label={"Overzicht van bedrijven"} href={"Bedrijven"} />
                <Knop  label={"Overzicht van opdrachten"} href={"Opdrachten"} />
            </div>

        </>
    )

}
export default Beheer;