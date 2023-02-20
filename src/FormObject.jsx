import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import UseStateObject from "./UseStateObject";

function FormObject() {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { username, email, password } = formValues;

  const handleForm = (e) => {
    console.log(e.target.value);
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
  };

  const {
    handleSubmit,
  } = () => {
    alert(`username:${username} email:${email} password:%{password}`);
  };
  return (
    <Form className="text-center mt-4" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="User Name"
          id="username"
          value={username}
          onChange={handleForm}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          id="email"
          value={email}
          onChange={handleForm}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          id="password"
          value={password}
          onChange={handleForm}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default FormObject;
