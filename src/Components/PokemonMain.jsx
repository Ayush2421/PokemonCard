import { useEffect, useState } from "react"
import Card from "./Card";
import SearchBar from "./SearchBar";
import pokemonDataFetch from "./PokemonDataFetch";

export default function PokemonMain(){
    const [pokemonData, setPokemonData] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    useEffect(()=>{
        pokemonDataFetch(setPokemonData)
    },[])
    const searchedData =  pokemonData.filter((evt)=> {
        return (
            evt.name.split("").slice(0, searchValue.length).join("").includes(searchValue)
            //  evt.name.toLowerCase().includes(searchValue.toLowerCase())
        )
    })
    return(
        <>
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue}/>
        <div className="MainContainer">
        {
            searchedData.map((element , index)=>{
                return (
                    <div key={index}>
                        <Card pokemonCard= {element} />
                    </div>
                )
            })
        }
        </div>
        </>
    )
}