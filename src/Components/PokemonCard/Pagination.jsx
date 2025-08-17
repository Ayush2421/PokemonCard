import { useContext } from "react";
import { Pcontext } from "../Context/PokemonContext";

export default function Pagination() {
    const { currentPage, setCurrentPage, paginationCount } = useContext(Pcontext)

    const handlePaginationBtnClick = (e, index) => {
        if (e.target.name === "Left") {
            setCurrentPage((prev) => prev - 1);
        } else if (e.target.name === "Right") {
            setCurrentPage((prev) => prev + 1);
        } else {
            setCurrentPage(index);
        }
    };
    return (
        <div className="paginationMainContainer">
            <button
                name="Left"
                onClick={handlePaginationBtnClick}
                id="paginationBtn"
                disabled={currentPage === 0}>◀</button>
                {paginationCount.map((_, index) => (
                    <button
                        name="Normal"
                        onClick={(e) => handlePaginationBtnClick(e, index)}
                        className={currentPage === index ? "active" : ""}
                        id="paginationBtn"
                        key={index}
                    >
                        {index + 1}
                    </button>
                ))}
            <button
                name="Right"
                onClick={handlePaginationBtnClick}
                id="paginationBtn"
                disabled={currentPage === paginationCount.length - 1}
            >▶</button>
        </div>
    );
}
