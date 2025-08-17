import { useContext } from "react"
import Card from "./Card"
import { Pcontext } from "../Context/PokemonContext"
import Pagination from "./Pagination"

export default function PokemonContent() {
    const { filteredData, start, end } = useContext(Pcontext)
    return (
        <>
            <Pagination />
            <div className="pokemonContent">
                {
                    filteredData.slice(start, end).map((element, index) => {
                        return (
                            <div key={index}>
                                <Card pokemonCard={element} />
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}