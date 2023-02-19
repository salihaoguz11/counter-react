import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Saliha",
    surname: "Oguz",
    salary: 6500,
  });

  const handleSalaryINc = () => {
    setPerson({ ...person, salary: person.salary + 500 });
  };
  const handleSalaryDec = () => {
    setPerson({ ...person, salary: person.salary - 500 });
  };

  return (
    <div className="container text-center mt-5">
      <h2>
        {person.name}
        {person.surname}
      </h2>
      <h1 className="display-4">SALARY:${person.salary}</h1>
      <button onClick={handleSalaryINc} className="btn btn-success me-4">
        SALARY INCREASE
      </button>
      <button onClick={handleToggle} className="btn btn-warning me-4">
        CLEAR
      </button>
      <button onClick={handleSalaryDec} className=" btn btn-danger">
        SALARY DECREASE
      </button>
    </div>
  );
};

export default UseStateObject;
