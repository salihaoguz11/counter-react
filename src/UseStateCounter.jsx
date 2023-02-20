import { useState } from "react";

const UseStateCounter = () => {
  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState("Odd,Even or Tens");
  const increment = () => {
    if (count < 100) {
      setCount(count + 1);

      if ((count + 1) % 10 === 0) {
        setMsg("Tens");
      } else if ((count + 1) % 2 === 0) {
        setMsg("Even Number");
      } else {
        setMsg("Odd Number");
      }
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
      if ((count - 1) % 10 === 0) {
        setMsg("Tens");
      } else if ((count - 1) % 2 === 0) {
        setMsg("Even Number");
      } else {
        setMsg("Odd Number");
      }
    }
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
      <button onClick={decrement} className=" btn btn-danger">
        DECREASE
      </button>
      <p className=" text-success mt-4 display-6">{msg}</p>
    </div>
  );
};

export default UseStateCounter;
