import Part from "./Part";

const Content = (props) => {
  return (
    <>
      <Part name={props.part1_name} exercises={props.exercises1} />
      <Part name={props.part2_name} exercises={props.exercises2} />
      <Part name={props.part3_name} exercises={props.exercises3} />
    </>
  )
}

export default Content;