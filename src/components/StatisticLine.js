const StatisticLine = ({text, value}) => {
  return (
    <tr>
      {text}
      <td>{value}</td>
    </tr>
  )
}

export default StatisticLine;