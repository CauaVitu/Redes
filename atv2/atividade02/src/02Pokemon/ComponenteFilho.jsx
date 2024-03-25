import { useContext } from "react";
import ContextoFamilia from "./ContextoFamilia";
import ComponenteNeto from "./ComponenteNeto"

export default function ComponenteFilho({baseUrl}) {
    let numero = useContext(ContextoFamilia)

    return (
        <div>
            <h3>Componente Filho</h3>
            <img src={baseUrl + (numero + 1) + '.png'} alt="pukemon" />
            <ComponenteNeto baseUrl={baseUrl} />
        </div>
    )
}