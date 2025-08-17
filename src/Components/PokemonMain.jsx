import { useContext, useEffect, useState } from "react"
import SearchBar from "./SearchBar";
import Loading from "./Loading";
import pokemonDataFetch from "./PokemonDataFetch";
import PokemonContent from "./PokemonCard/PokemonContent";
import filteringData from "./FilteringData";
import { Pcontext } from "./Context/PokemonContext";

export default function PokemonMain(){
    const { pokemonData, setPokemonData, setFilteredData, loading, setLoading,
    searchValue, setSearchValue, setCurrentPage} = useContext(Pcontext)


    // Fetching Data
    useEffect(()=>{
        pokemonDataFetch(setPokemonData,setFilteredData, setLoading)
    },[])

    // filterind Data
    useEffect(()=>{
        setCurrentPage(0);
        if(searchValue.trim()){
            setFilteredData(filteringData(pokemonData , searchValue))
        }else{
            setFilteredData(pokemonData)
        }
    },[searchValue])

    return(
        <>
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue}/>
        {loading ? <Loading/> : <PokemonContent/>}
        </>
    )
}