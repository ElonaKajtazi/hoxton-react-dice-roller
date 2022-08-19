import { useState } from "react";
import "./App.css";

function App() {
  const [dice, setDice] = useState(0);
  const [diceCount, setDiceCount] = useState(0);
  // const [player, setPlayer] = useState(true);
  function rollDice() {
    setDice(Math.floor(Math.random() * 6) + 1);
  }
  return (
    <div className="App">
      <h1>Dice: {dice}</h1>
      <button
        onClick={() => {
          rollDice();
        }}
      >
        Roll the dice
      </button>
    </div>
  );
}

export default App;
