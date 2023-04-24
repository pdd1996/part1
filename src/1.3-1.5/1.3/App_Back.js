import Header from "./components/Header";
import Content from "./components/Content";
import Total from "./components/Total";

// 1.3
// 考察对象的操作
function App_Back() {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content part1_name={part1.name} part2_name={part2.name} part3_name={part3.name} exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises}/>
      <Total total={part1.exercises + part2.exercises + part3.exercises } />
    </div>
  )
}

export default App_Back;

