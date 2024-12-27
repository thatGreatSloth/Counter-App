import { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState (() => {
    const savedCount = localStorage.getItem('countVal');
    return savedCount ? JSON.parse(savedCount) : 0

    //instead of setting the initial value of the useState to 0, we check local storage first to see if there is a value which we can restore.
  })

  useEffect( () => {
    localStorage.setItem('countVal', JSON.stringify(count), [count])
  })

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };
  return (
    <>
      <h1 className="display-value">count:<span className="count-display"> {count}</span> </h1>
      <div className="display-buttons">
        <button className="button on-hover" onClick={increaseCount}>
          Increase
        </button>
        <button
          className="button on-hover"
          onClick={decreaseCount}
          disabled={count <= 0}
        >
          Decrease
        </button>
        <button className="button on-hover" onClick={reset}>
          Reset
        </button>
      </div>
    </>
  );
};

export default Counter;
