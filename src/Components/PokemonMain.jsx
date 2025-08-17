import { useContext, useEffect } from "react"
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Loading from "./Loading";
import pokemonDataFetch from "./PokemonDataFetch";
import PokemonContent from "./PokemonCard/PokemonContent";
import filteringData from "./FilteringData";
import { Pcontext } from "./Context/PokemonContext";

export default function PokemonMain() {
    const { pokemonData, setPokemonData, setFilteredData, loading, setLoading,
        searchValue, setSearchValue, setCurrentPage } = useContext(Pcontext)

    // Fetching Data
    useEffect(() => {
        pokemonDataFetch(setPokemonData, setFilteredData, setLoading)
    }, [])

    // filtering Data && debounce
    useEffect(() => {
        const timer = setTimeout(()=>{
            setCurrentPage(0);
            if (searchValue.trim()) {
                setFilteredData(filteringData(pokemonData, searchValue))
            } else {
                setFilteredData(pokemonData)
            }
        },300)
        return () => clearTimeout(timer);
    }, [searchValue])

    return (
        <>
            <Logo/>
            <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
            {loading ? <Loading /> : <PokemonContent />}
        </>
    )
}