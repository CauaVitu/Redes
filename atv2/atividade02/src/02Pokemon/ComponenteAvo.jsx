import ContextoFamilia from "./ContextoFamilia";
import ComponenteFilho from "./ComponenteFilho"
let baseUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`

function urlMaker(number) {
    return baseUrl + number + '.png'
}

export default function ComponenteAvo() {
    let numero = 1;
    return (
        <ContextoFamilia.Provider value={numero}>
            <h3>Componente Avô</h3>
            <img src={urlMaker(numero)} alt="pukemon" />
            <ComponenteFilho baseUrl={baseUrl} />
        </ContextoFamilia.Provider>
    )
}