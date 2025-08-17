import { useEffect, useRef } from "react";

export default function SearchBar({searchValue, setSearchValue}){
    const inputField= useRef("")
    const handleInputs =(evt)=>{
        setSearchValue(evt.target.value);
    }
    useEffect(()=>{
        inputField.current.focus();
    },[])
    return(
        <div className="searchContainer">
           <input ref={inputField} placeholder="Enter Pokemon Name..." value={searchValue} onChange={handleInputs}/>
        </div>
    )
}