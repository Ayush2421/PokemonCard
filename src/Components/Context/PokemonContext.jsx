import { createContext, useState } from "react";

//create Context
export const Pcontext= createContext()

export default function PokemonContext(props){
    const [pokemonData, setPokemonData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [loading, setLoading] = useState(false)
    const [searchValue, setSearchValue] = useState("");
    const [currentPage, setCurrentPage] = useState(0);

    //pagination Constant
    const totalItemDisplay = 5;
    const totalPages = Math.ceil(filteredData.length / totalItemDisplay);
    const paginationCount = new Array(totalPages).fill("");
    const start = currentPage * totalItemDisplay;
    const end = totalItemDisplay * (currentPage + 1);

    const pokemonContextValue={
        pokemonData, setPokemonData,
        filteredData, setFilteredData,
        loading, setLoading,
        searchValue, setSearchValue,
        currentPage, setCurrentPage,
        paginationCount, start, end
    }

    return (
        <Pcontext.Provider value={pokemonContextValue}>
            {props.children}
        </Pcontext.Provider>
    )
}