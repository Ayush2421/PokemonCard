export default function SearchBar({searchValue, setSearchValue}){
    const handleInputs =(evt)=>{
        setSearchValue(evt.target.value);
    }
    return(
        <div className="SearchContainer">
           <input placeholder="EnterPokemon..." value={searchValue} onChange={handleInputs}/>
        </div>
    )
}