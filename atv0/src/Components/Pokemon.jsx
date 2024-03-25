import { useState } from "react"


const Pokemon = () => {
    const [pokeNumber,setPokeNumber] = useState(1)
    let pokeSrc = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pokeNumber +".png"
    let baseUrl = "https://pokeapi.co/api/v2/"

    const IncreasePokeNumber = () =>{
        setPokeNumber(pokeNumber => pokeNumber + 1)
    }

    
    
    const DecreasePokeNumber = () =>{
        if (pokeNumber <= 1){
            return
        }
        else setPokeNumber (pokeNumber =>  pokeNumber - 1)
    }

    return( 
        <div>
            <h3>Esse é o Pokemon numero: {pokeNumber}</h3>
            <img 
            src = {pokeSrc}
            width={200}
            />
            <button onClick={() => DecreasePokeNumber()}>Anterior</button>
            <button onClick={() => IncreasePokeNumber()}>Proximo</button>
        </div>)
}
export default Pokemon