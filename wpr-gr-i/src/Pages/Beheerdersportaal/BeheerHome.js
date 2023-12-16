import Header from '../../Components/Header.jsx'
import './Beheer.css'
import Knop from '../../Components/Button.jsx'
// import { DeskundigePage } from './BeheerDeskundige'
import { Route, Routes } from 'react-router-dom'


const Knoppen = [
    {Naam: 'Opdrachten', href:"WesselIsStom"},
    {Naam: 'Uitloggen', href:"sf"}
]

function Paginas({}){

}

function Beheer({}){
    return (
        <>
            <Header Titel={"Beheerderspagina"} Knoppen={Knoppen}></Header>
            <div className='Blokjes'>                
                <Knop  label={"Overzicht van ervaringsdeskundigen"} href={"asdf"} />
                <Knop  label={"Overzicht van bedrijven"} href={""} />
                <Knop  label={"Overzicht van opdrachten"} href={"asdf"} />
            </div>

        </>
    )

}
export default Beheer;