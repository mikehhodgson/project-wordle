import React, { useEffect, useRef, useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { checkGuess } from '../../game-helpers';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';

const Banner = ({ status, children }) => (
  <div className={`${status} banner`}>
    <p>{children}</p>
  </div>
);

const RestartButton = ({ restart }) => (
  <button
    autoFocus
    onClick={restart}
    style={{
      border: '1px solid white',
      borderRadius: '4px',
      padding: '5px 10px',
      float: 'right',
    }}
  >
    Restart
  </button>
);

const WonBanner = ({ numGuesses, restart }) => (
  <Banner status="happy">
    <strong>Congratulations!</strong> Got it in{' '}
    <strong>
      {numGuesses} guess{numGuesses > 1 ? 'es' : ''}
    </strong>
    <RestartButton restart={restart} />
  </Banner>
);

const LostBanner = ({ answer, restart }) => (
  <Banner status="sad">
    Sorry, the correct answer is <strong>{answer}</strong>.
    <RestartButton restart={restart} />
  </Banner>
);

function Game() {
  const [answer, setAnswer] = useState(sample(WORDS));
  const [guesses, setGuesses] = useState([]);
  const ref = useRef();

  // To make debugging easier, we'll log the solution in the console.
  // console.info({ answer });

  useEffect(() => ref.current?.focus());

  const won =
    guesses.length > 0 &&
    guesses[guesses.length - 1].every(({ status }) => status === 'correct');

  const lost = guesses.length >= NUM_OF_GUESSES_ALLOWED && !won;

  const submitGuess = (guess) =>
    !won && !lost && setGuesses([...guesses, checkGuess(guess, answer)]);

  const restart = () => {
    setGuesses([]);
    setAnswer(sample(WORDS));
  };

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput submitGuess={submitGuess} disabled={won || lost} ref={ref} />
      {won && <WonBanner numGuesses={guesses.length} restart={restart} />}
      {lost && <LostBanner answer={answer} restart={restart} />}
    </>
  );
}

export default Game;
