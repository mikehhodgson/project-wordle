import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);

  const submitGuess = (guess) =>
    guesses.length < NUM_OF_GUESSES_ALLOWED && setGuesses([...guesses, guess]);

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput submitGuess={submitGuess} />
    </>
  );
}

export default Game;
