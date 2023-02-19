import { useState } from "react";

const UseStateCounter = () => {
  return (
    <div className="container text-center mt-5">
      <h2> </h2>
      <h1 className="display-4">COUNT:</h1>
      <button className="btn btn-success me-4">INCREASE</button>
      <button className="btn btn-warning me-4">CLEAR</button>
      <button className=" btn btn-danger">DECREASE</button>
    </div>
  );
};

export default UseStateCounter;
