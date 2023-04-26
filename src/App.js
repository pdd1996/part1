import {useState} from "react";
import History from "./components/History";
import Button from "./components/Button";


function App() {
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0
  })
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    const newClicks = {
      ...clicks,
      left: clicks.left + 1
    }
    setClicks(newClicks)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    const newClicks = {
      ...clicks,
      right: clicks.right + 1
    }
    setClicks(newClicks)
  }

  return (
    <div>
      {clicks.left}
      <Button onClick={handleLeftClick} text='left' />
      {clicks.right}
      <Button onClick={handleRightClick} text='right' />
      <History allClicks={allClicks} />
    </div>
  )
}

export default App;