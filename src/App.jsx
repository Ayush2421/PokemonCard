import "./App.css";
import PokemonContext from "./Components/Context/PokemonContext";
import PokemonMain from "./Components/PokemonMain";

export default function App() {
  return (
   <PokemonContext>
   <PokemonMain/>
   </PokemonContext>
  )
}
