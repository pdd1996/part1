const Total  = (props) => {
  const parts = props.parts
  const exercises = parts[0].exercises + parts[1].exercises + parts[2].exercises
  return (
    <p>
      Number of exercises - {exercises}
    </p>
  )
}

export default Total;