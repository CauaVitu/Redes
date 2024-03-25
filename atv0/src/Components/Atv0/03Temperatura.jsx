const CtoF =  ({c}) => {
    return <div>{9*c/5 + 32}</div>
}
const FtoC = ({f}) =>{
    return <div>{5 * (f-32)/9}</div>
}
export {CtoF,FtoC};