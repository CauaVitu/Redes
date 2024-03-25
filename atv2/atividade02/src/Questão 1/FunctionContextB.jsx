
import ColorTheme from "./MyColorContext"

const FunctionContextB = () => {
    return (
        <ColorTheme.Consumer>
            {
                ({bkgB}) => {
                    return (
                        <div>
                            <h1 style={{ background: bkgB }}>
                                Contexto B
                            </h1>
                        </div>
                    )
                }
            }
        </ColorTheme.Consumer>

    )
}

export default FunctionContextB