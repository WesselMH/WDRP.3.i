import './Header.css'

function Header({ Titel, Knop1, Knop2}){
    return(
        <>
            <div className="header">
                <div className='tekst'>{Titel}</div>
                <button className='knop'>{Knop1}</button>
                <button className='knop'>{Knop2}</button>
            </div>
        </>
    )

}
export default Header;