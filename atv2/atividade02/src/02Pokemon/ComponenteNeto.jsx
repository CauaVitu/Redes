import { useContext } from "react";
import ContextoFamilia from "./ContextoFamilia";

export default function ComponenteNeto({baseUrl}) {
    let numero = useContext(ContextoFamilia)

    return (
        <div>
            <h3>Componente Neto</h3>
            <img src={baseUrl + (numero + 2) + '.png'} alt="pukemon" />
        </div>
    )
}