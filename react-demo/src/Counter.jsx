import { useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState({
    count: 0,
    history: [],
  });

  const handleChange = (e) => {
    console.log('EVENT:', e);
    const newCount = parseInt(e.target.value);
    const newHistory = counter.history;
    newHistory.push(newCount);

    setCounter({
      count: newCount,
      history: newHistory,
    });
  };

  const handleClick = (e) => {
    const countChange = parseInt(e.target.innerText);
    const newCount = counter.count + countChange;
    const newHistory = counter.history;
    newHistory.push(newCount);

    setCounter({
      count: newCount,
      history: newHistory,
    });
  };

  return (
    <>
      <input type="number" value={counter.count} onChange={handleChange} />
      <button type="button" onClick={handleClick}>+1</button>
      <button type="button" onClick={handleClick}>-1</button>
      {/* <button onClick={() => setCount(0)}>reset</button> */}
      <h2>History:</h2>
      <div>
        {
            counter.history.map((num) => <p>{num}</p>)
        }
      </div>
    </>
  );
}

export default Counter;