import { useState } from "react";
import "./App.css";

function App() {
  const [dice, setDice] = useState(0);
  // const [diceCount, setDiceCount] = useState(0 + dice);
  // const [player, setPlayer] = useState(true);
  function rollDice() {
    setDice(Math.floor(Math.random() * 6) + 1);
  }

  return (
    <div className="App">
      <h1>
        {dice === 0 ? <h2>Roll the dice </h2> : null}

        {dice === 1 ? (
          <img
            src="https://thefiveplanets.org/b01/data/graphics/textures/dice/face1.jpg"
            alt=""
          />
        ) : null}
        {dice === 2 ? (
          <img
            src="https://thefiveplanets.org/b01/data/graphics/textures/dice/face2.jpg"
            alt=""
          />
        ) : null}
        {dice === 3 ? (
          <img
            src="https://thefiveplanets.org/b01/data/graphics/textures/dice/face3.jpg"
            alt=""
          />
        ) : null}
        {dice === 4 ? (
          <img
            src="https://thefiveplanets.org/b01/data/graphics/textures/dice/face4.jpg"
            alt=""
          />
        ) : null}
        {dice === 5 ? (
          <img
            src="https://thefiveplanets.org/b01/data/graphics/textures/dice/face5.jpg"
            alt=""
          />
        ) : null}
        {dice === 6 ? (
          <img
            src="https://thefiveplanets.org/b01/data/graphics/textures/dice/face6.jpg"
            alt=""
          />
        ) : null}
      </h1>
      <p>You got: {dice}</p>
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
