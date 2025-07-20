import { useEffect, useState } from "react"
import Card from "./Card";
import SearchBar from "./SearchBar";

export default function Main(){
    const API= "https://pokeapi.co/api/v2/pokemon?limit=200";
    const [pokemonData, setPokemonData] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    const pDataFetch = async()=>{
        try{
            const pResponse = await fetch(API);
            const pData = await pResponse.json();
            const pResult = pData.results;
            const pDetail= await Promise.all(
                pResult.map(async(element)=>{
                    const pDetailResponse = await fetch(element.url);
                    const pDetailData = await pDetailResponse.json();
                    return pDetailData;
                })
            );
            console.log(pDetail)
            setPokemonData(pDetail)
        }catch(e){
            console.log(e)
        }
    }
    useEffect(()=>{
        pDataFetch()
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