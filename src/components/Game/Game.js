import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { checkGuess } from '../../game-helpers';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

const Banner = ({ status, children }) => (
  <div className={`${status} banner`}>
    <p>{children}</p>
  </div>
);

const WonBanner = ({ numGuesses }) => (
  <Banner status="happy">
    <strong>Congratulations!</strong> Got it in{' '}
    <strong>
      {numGuesses} guess{numGuesses > 1 ? 'es' : ''}
    </strong>
  </Banner>
);

const LostBanner = ({ answer }) => (
  <Banner status="sad">
    Sorry, the correct answer is <strong>{answer}</strong>.
  </Banner>
);

function Game() {
  const [guesses, setGuesses] = useState([]);

  const won =
    guesses.length > 0 &&
    guesses[guesses.length - 1].every(({ status }) => status === 'correct');

  const lost = guesses.length >= NUM_OF_GUESSES_ALLOWED && !won;

  const submitGuess = (guess) =>
    !won && !lost && setGuesses([...guesses, checkGuess(guess, answer)]);

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput submitGuess={submitGuess} disabled={won || lost} />
      {won && <WonBanner numGuesses={guesses.length} />}
      {lost && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
