import StatisticLine from "./StatisticLine";

const Statistics = (props) => {
  const {title, good, natural, bad, all } = props

  if (all > 0) {
    return (
      <div>
        <h2>{title}</h2>
        <table>
          <thead>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="natural" value={natural} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="all" value={all} />
            <StatisticLine text="average" value={all > 0 ? (good - bad) / all : 0} />
            <StatisticLine text="positive" value={all > 0 ? (good / all)*100 : 0}/>
          </thead>
        </table>
      </div>
    )
  } else {
    return (
      <div>
        <h2>{title}</h2>
        <p>No Feedback given</p>
      </div>
    )
  }

}

export default Statistics;