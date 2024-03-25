'use client'
import ContextoFamilia from "./ContextoFamilia";
import ComponenteFilho from "./ComponenteFilho"
import { useContext, useState } from "react";
let baseUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`

function urlMaker(number) {
    return baseUrl + number + '.png'
}

export default function ComponenteAvo() {
    let numero = useContext(ContextoFamilia)
    const [contador, setContador] = useState(numero)

    function numberUp(){
        setContador(contador + 1);
    }

    return (
        <ContextoFamilia.Provider value={contador}>
            <h3>Componente Avô</h3>
            <img src={urlMaker(contador)} alt="pukemon" />
            <ComponenteFilho baseUrl={baseUrl} />
            <button onClick={numberUp}>Subir Número</button>
        </ContextoFamilia.Provider>
    )
}