import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good + neutral + bad
  const average = (good - bad)/total
  const positive = (good / total) * 100

  const handlegoodClick = () => {
    console.log('GOOD rating clicked');
    setGood(good + 1) 
  }

  const handleneutralClick = () => {
    console.log('NEUTRAL rating clicked');
    setNeutral(neutral + 1) 
  }

  const handleBadClick = () => {
    console.log('BAD rating clicked');
    setBad(bad + 1) 
  }

  return (
    <div>
      <Header text="give feedback" />
      <Button handleClick= {handlegoodClick} text="good" />
      <Button handleClick= {handleneutralClick} text="neutral" />
      <Button handleClick= {handleBadClick} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} total={total} average ={average} positive={positive} />
    </div>
  )
}

const Statistics = (props) => {
  if (props.total === 0) {
    return (
      <div>
        <Header text="statistics" />
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <Header text="statistics" />
      <table>
      <tbody>
      <StatisticLine text="good" number={props.good} />
      <StatisticLine text="neutral" number={props.neutral} />
      <StatisticLine text="bad" number={props.bad} />
      <StatisticLine text="all" number={props.total} />
      <StatisticLine text="average" number={props.average} />
      <StatisticLine text="positive" number={props.positive + " %"} />
      </tbody>
      </table>      
    </div>
  )
}

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td><td>{props.number}</td>
    </tr>
    
  )
}

const Header = ({text}) => <h1>{text}</h1>

const Button = ({handleClick, text}) => <button onClick={handleClick} >{text}</button>

export default App