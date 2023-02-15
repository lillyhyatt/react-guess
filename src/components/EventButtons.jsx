import React, { useState } from 'react';


const guesses = [1,2,3,4,5,6,7,8,9,10];

function EventButtons() {
  const [NumberToGuess] = useState(() => {
    return xxxx(1,10)
  
  
});

const [currentGuess, makeGuess] = useState(-1);

if(currentGuess === numberToGuess) {
  return <p> you Won! the number was {numberToGuess} </p>
}

  return (
    <div>
    <h1> Guess the number </h1>
    {guesses.map((n) => (<button onClick={() => makeGuess(n)}>{n}</button>))};




<p>{value}</p>
      <button onClick={() => setter(value + 1)}> press me pls</button>
    </div>
  );
}

export default EventButtons;
