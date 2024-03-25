import './App.css';
import FunctionContextA from './Questão 1/FunctionContextA';
import ComponenteAvo from './02Pokemon/ComponenteAvo';
import ComponenteAvo2 from './03Pokemon/ComponenteAvo'

const styles = {
  Claudio: {
    display:  "flex",
    textAlign: "left",
    flexDirection: "column",
    alignItems: "start",
    alignContent: "center",

    backgroundColor: "#cccccc"
  },
}

function App() {
  return (
    <div style={styles.Claudio}>
      <h1>Questão 1</h1>
      <FunctionContextA />
      <h1>Questão 2</h1>
      <ComponenteAvo />
      <h1>Questão 3</h1>
      <ComponenteAvo2 />
    </div>
  );
}

export default App;
