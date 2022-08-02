import React, { useState } from "react";

// function countInitial() {
//   console.log("run function");
//   return 4;
// }

const App = () => {
  // doesnt rerenders
  //   const [count, setCount] = useState(() => {
  //     console.log('run count')
  //     return 4
  //   });
  //   const [state, setState] = useState({ count: 4, theme: "blue" });
  const [count, setCount] = useState(4);
  const [theme, setTheme] = useState("blue");

  const decrementCount = () => {
    // setCount(count - 1);

    // setCount((prevCount) => prevCount - 1);

    setCount((prevState) => {
      return prevState - 1;
    });
  };

  const incrementCount = () => {
    setCount((prevState) => {
      return prevState + 1;
    });
  };

  return (
    <div>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      {/* <span>{theme}</span> */}
      <button onClick={incrementCount}>+</button>
    </div>
  );
};

export default App;
