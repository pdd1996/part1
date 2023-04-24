import Hello from "./Hello";

function App() {
  const name = "ls"
  const age = 18
  return (
    <div className="App">
      <h1>Greeting</h1>
      <Hello name="zs" age={14 + 3} />
      <Hello name={name} age={age}/>
    </div>
  );
}

export default App;
