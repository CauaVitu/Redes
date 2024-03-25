
import ColorTheme from "./MyColorContext"

const FunctionContextD = () => {
    return (
        <ColorTheme.Consumer>
            {
                ({bkgD}) => {
                    return (
                        <div>
                            <h1 style={{ background: bkgD }}>
                                Contexto D
                            </h1>
                        </div>
                    )
                }
            }
        </ColorTheme.Consumer>

    )
}

export default FunctionContextD