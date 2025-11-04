import React from 'react';

import { range } from '../../utils';

function Guess({ guess }) {
  return (
    <p className="guess">
      {guess
        ? guess.map(({ letter, status }, i) => (
            <span key={i} className={`cell ${status}`}>
              {letter}
            </span>
          ))
        : range(5).map((i) => <span key={i} className="cell"></span>)}
    </p>
  );
}

export default Guess;
