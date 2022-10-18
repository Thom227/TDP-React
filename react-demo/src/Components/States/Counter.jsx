// import { useState } from 'react;

// function Counter () {
//     const [count, setCount] = useState();

//     return(
//         <>
//         <input type="Number" value={count} onChange={(event) => setCount
//         (event.target.value)}/>
//         <button onClick={()=> setCount(count+1)}>Increment 1</button>
//         </>
//     )
// }
// export default Counter;

import {useState} from 'react';

function Counter () {
    const [counter, setCount] = useState(0);
    return(
        <>
            <p>Count is: {counter}</p>
            <button onClick={() => setCount(counter + 1)}>Add</button>
        </>
    );
};

export default Counter;
