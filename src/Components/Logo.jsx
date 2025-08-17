import { pokemonAssets } from "../Assets/pokemonAssets";

export default function Logo(){
    return (
        <>
        <div className="logo">
             <img src={pokemonAssets.pokemonLogo} alt="logo"/>
        </div>
        </>
    )
}