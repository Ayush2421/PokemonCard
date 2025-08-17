
export default function Card({pokemonCard}){
    const {name, sprites ,base_experience, height, weight, stats} = pokemonCard;
    return(
        <div className="cardContainer">
            <img src={sprites.back_default} alt={name}/>
            <h5> {name}</h5>
            <div style={{ width:"100%", marginTop:"10px"}}>
                <div id="pokemonDetails">
                    <span>Base Experience:</span>
                    <span>{base_experience}</span>
                </div>
                <div  id="pokemonDetails">
                    <span>Height:</span>
                    <span>{height}</span>
                </div>
                <div  id="pokemonDetails"> 
                    <span>Weight:</span>
                    <span>{weight}</span>
                </div>
                <div  id="pokemonDetails"> 
                    <span>Stats:</span>
                    <span>{stats.slice(-1)[0].base_stat}</span>
                </div>
            </div>
        </div>
    )
}