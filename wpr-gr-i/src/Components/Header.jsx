import './Header.css'
import Knop from './Button.jsx'

function Header({ Titel, Knoppen}){
    return(
        <>
            <div className="header">
                <div className='Titel'>{Titel}</div>
                {Knoppen.map(function(Knoppen) {
                    return(
                        <Knop label={Knoppen.Naam} href={Knoppen.href}></Knop>
                        )
                    })}
            </div>
        </>
    )

}
export default Header;