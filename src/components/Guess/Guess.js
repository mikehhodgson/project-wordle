import React from 'react';

import { range } from '../../utils';

function Guess({ guess }) {
  return (
    <p className="guess">
      {guess
        ? guess.split('').map((letter, i) => (
            <span key={i} className="cell">
              {letter}
            </span>
          ))
        : range(5).map((i) => <span key={i} className="cell"></span>)}
    </p>
  );
}

export default Guess;
