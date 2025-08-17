
export default async function pokemonDataFetch(setPokemonData){
    const API= "https://pokeapi.co/api/v2/pokemon?limit=200";
        try{
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
        }catch(e){
            console.log(e)
        }
    }