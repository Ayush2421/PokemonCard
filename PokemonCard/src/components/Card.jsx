
export default function Card({pokemonCard}){
    const {name, sprites} = pokemonCard;
    return(
        <div className="CardContainer">
            <img src={sprites.back_default} alt={name}/>
            <h5> {name}</h5>
        </div>
    )
}