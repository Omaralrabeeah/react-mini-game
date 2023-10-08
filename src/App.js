import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import useTimer from "./components/Timer";

function App() {
  const [counter, setCounter] = useState(0);
  const [gold, setGold] = useState(0);
  const [amount, setAmount] = useState(1);
  // const [days, setDays] = useState(0);
  // const [hours, setHours] = useState(0);
  // const [minutes, setMinutes] = useState(0);
  // const [seconds, setSeconds] = useState(0);
  // const deadline = "Octuber, 8, 2023";
  const addOne = () => {
    setCounter(counter + amount);
    setGold(counter);
  };

  const handleUpgrade = () => {
    setGold(gold - 4);
    setAmount(amount + 2);
  };
  const bigUpgrade = () => {
    setGold(gold - 500);
    setAmount(amount + 30);
  };
  // const time = () => {
  //   return <div className="timer"></div>;
  // };
  const { days, hours, minutes, seconds } = useTimer("2023-10-08T16:00:00");

  return (
    <div className="App">
      {days} - {hours} - {minutes} - {seconds}
      <header className="App-header">
        {counter}
        <button className="click-Button button-green" onClick={addOne}>
          Plus
        </button>
        {gold > 4 && (
          <button className="click-Button button-black" onClick={handleUpgrade}>
            Upgrade
          </button>
        )}
        <button className="click-Button button-red" onClick={bigUpgrade}>
          Monster
        </button>
        <h3>gold: {gold}</h3>
      </header>
    </div>
  );
}

export default App;
