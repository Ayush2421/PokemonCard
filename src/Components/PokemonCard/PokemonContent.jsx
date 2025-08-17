import { useContext } from "react"
import Card from "./Card"
import { Pcontext } from "../Context/PokemonContext"
import Pagination from "./Pagination"
import ResultNotFound from "../ResultNotFound"

export default function PokemonContent() {
    const { filteredData, start, end } = useContext(Pcontext)
    return (
        <>
            <Pagination />
            <div className="pokemonContent">
                {
                   filteredData.length > 0 ? (filteredData.slice(start, end).map((element) => {
                        return (
                            <div key={element.id}>
                                <Card pokemonCard={element} />
                            </div>
                        )
                    }))
                    :
                    <ResultNotFound/>
                }
            </div>
        </>
    )
}