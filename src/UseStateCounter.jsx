import { useState } from "react";

const UseStateCounter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div className="container text-center mt-5">
      <h2> </h2>
      <h1 className="display-4">COUNT:{count}</h1>
      <button onClick={increment} className="btn btn-success me-4">
        INCREASE
      </button>
      <button onClick={() => setCount(0)} className="btn btn-warning me-4">
        CLEAR
      </button>
      <button
        onClick={() => count > 0 && setCount(count - 1)}
        className=" btn btn-danger"
      >
        DECREASE
      </button>
    </div>
  );
};

export default UseStateCounter;
