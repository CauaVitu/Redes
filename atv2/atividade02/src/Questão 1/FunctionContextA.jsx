import FunctionContextB from "./FunctionContextB"
import FunctionContextC from "./FunctionContextC"

import ColorTheme from "./MyColorContext"

const FunctionContextA = () => {
    const colors = {
        bkgA:"green",
        bkgB:"white",
        bkgC:"yellow",
        bkgD:"blue"
    }
    return (
         <ColorTheme.Provider value={colors} >
            <h1 style={{background: colors.bkgA}}>Contexto A</h1>
            <FunctionContextB />
            <FunctionContextC />
         </ColorTheme.Provider>
    )
}

export default FunctionContextA