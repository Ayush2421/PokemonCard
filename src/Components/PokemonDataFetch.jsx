export default async function pokemonDataFetch(setPokemonData,setFilteredData, setLoading){
    const API= "https://pokeapi.co/api/v2/pokemon?limit=50";
        try{
            setLoading(true);
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
            setPokemonData(pDetail)
            setFilteredData(pDetail)
            setLoading(false);
        }catch(e){
            setLoading(false);
            console.log(e)
        }
    }