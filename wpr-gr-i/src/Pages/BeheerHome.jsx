import Header from '../Components/Header.jsx'
import './Beheer.css'
import { Link } from "react-router-dom";
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
                <Link className='knop' label={"Overzicht van ervaringsdeskundigen"} to={"/Beheer/Deskundigen"} />
                <Link className='knop' label={"Overzicht van bedrijven"} to={"/Beheer/Bedrijven"} />
                <Link className='knop' label={"Overzicht van opdrachten"} to={"/Beheer/Opdrachten"} />
            </div>

            <h1>Hallo</h1>
        </>
    )

}
export default Beheer;