import React from "react";
import { useCallback, useState } from "react";

function debounce(callback: (...args: any) => void, delay: number) {
  let timerId: ReturnType<typeof setTimeout>;
  
  return function(...args: any) {
    clearTimeout(timerId);

    timerId = setTimeout(callback, delay, ...args);
  }
}

export const App = () => {
  const [value, setValue] = useState('');
  const [appliedValue, setAppliedValue] = useState('');

  const wrapper = useCallback(debounce(setValue, 1000), []);

  return (
    <>
      <h2 className="title is-2">Debounce</h2>
      <p></p>
      <p className="subtitle is-4">value: {value}</p>
      <input 
        className="input is-rounded" 
        type="text"
        value={appliedValue}
        onChange={event => {
          setAppliedValue(event.target.value)
          wrapper(event.target.value)
        }
        }
      />
    </>
    
  )
}