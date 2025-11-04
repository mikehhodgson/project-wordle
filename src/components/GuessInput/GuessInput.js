import React, { useState } from 'react';

function GuessInput() {
  const [value, setValue] = useState('');

  const onChange = (e) => setValue(e.target.value.toUpperCase());

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(value);
    setValue('');
  };

  return (
    <form className="guess-input-wrapper" onSubmit={onSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={value}
        onChange={onChange}
        pattern="\w{5}"
      />
    </form>
  );
}

export default GuessInput;
