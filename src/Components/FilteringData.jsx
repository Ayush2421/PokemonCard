 

export default function filteringData(pokemonData , searchValue){
    return pokemonData.filter((evt)=> {
        return (
            evt.name.split("").slice(0, searchValue.length).join("").includes(searchValue)
        )
    })
}