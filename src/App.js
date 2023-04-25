import {useState} from "react";
import Display from "./components/Display";
import Button from "./components/Button";

const App = () => {
  const [ counter, setCounter ] = useState(0);

  const addByOne = () => {
    return setCounter(counter + 1)
  }
  const deleteByOne = () => {
    return setCounter(counter - 1)
  }
  const zero = () => {
    return setCounter(0)
  }

  return (
    <div>
      <h1>Greetings</h1>
      <Display counter={counter} />
      <Button onClick={addByOne} text="+ 1"></Button>
      <Button onClick={deleteByOne} text="- 1"></Button>
      <Button onClick={zero} text="0"></Button>
    </div>
  )
}

export default App;