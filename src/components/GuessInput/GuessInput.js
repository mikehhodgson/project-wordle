import React, { useState } from 'react';

function GuessInput({ submitGuess, disabled, ref }) {
  const [value, setValue] = useState('');

  const onChange = (e) => setValue(e.target.value.toUpperCase());

  const onSubmit = (e) => {
    e.preventDefault();

    submitGuess(value);
    setValue('');
  };

  return (
    <form className="guess-input-wrapper" onSubmit={onSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        ref={ref}
        value={value}
        onChange={onChange}
        pattern="\w{5}"
        title="5 letter word"
        required
        minLength={5}
        maxLength={5}
        disabled={disabled}
      />
    </form>
  );
}

export default GuessInput;
