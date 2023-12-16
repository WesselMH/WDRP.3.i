

const Knoppen = [
    {Naam: 'Terug naar beheerdersportaal home', href:"WesselIsStom"},
]

function BeheerOpdrachten(){
    return(
        <>
            <Header Titel={"Lijst van opdrachten"} Knoppen={Knoppen}></Header>
        </>
    )
}