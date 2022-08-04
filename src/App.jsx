import React, { useEffect, useState } from "react";

// useState lesson
// const App = () => {

//   // function countInitial() {
//   //   console.log("run function");
//   //   return 4;
//   // }

//   // doesnt rerenders
//   //   const [count, setCount] = useState(() => {
//   //     console.log('run count')
//   //     return 4
//   //   });
//   //   const [state, setState] = useState({ count: 4, theme: "blue" });
//   const [count, setCount] = useState(4);
//   const [theme, setTheme] = useState("blue");

//   const decrementCount = () => {
//     // setCount(count - 1);

//     // setCount((prevCount) => prevCount - 1);

//     setCount((prevState) => {
//       return prevState - 1;
//     });
//   };

//   const incrementCount = () => {
//     setCount((prevState) => {
//       return prevState + 1;
//     });
//   };

//   return (
//     <div>
//       <button onClick={decrementCount}>-</button>
//       <span>{count}</span>
//       {/* <span>{theme}</span> */}
//       <button onClick={incrementCount}>+</button>
//     </div>
//   );
// };

// useEffect lesson
// const App = () => {
//   const [resourceType, setResourceType] = useState("posts");

//   useEffect(() => {
//     console.log('changed');

//     return () => {
//       console.log('return from resource changed');
//     }
//   }, [resourceType]);

//   return (
//     <div>
//       <div>
//         <button onClick={() => setResourceType("posts")}>Posts</button>
//         <button onClick={() => setResourceType("users")}>Users</button>
//         <button onClick={() => setResourceType("comments")}>Comments</button>
//       </div>
//       <h1>{resourceType}</h1>
//     </div>
//   );
// };

// useContext lesson

export const ThemeContext = React.createContext()

const App = () => {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }

  return <div>
<ThemeContext.Provider value={darkTheme} >
  <button onClick={toggleTheme}>Toggle Theme</button>

  
</ThemeContext.Provider>
  </div>;
};

export default App;
