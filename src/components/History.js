const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      <p>button press history: {props.allClicks.join(' ')}</p>
    </div>
  )
}

export default History;