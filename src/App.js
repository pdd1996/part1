import Hello from "./Hello";

const App = (props) => {
  const { count } = props;

  return (
    <div>
      <h1>Greetings</h1>
     <div>{ count }</div>
    </div>
  )
}

export default App;