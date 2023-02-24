import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

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

  const handleSubmit = () => {
    alert(`username:${username} email:${email} password:${password}`);
  };
  return (
    <Form className="text-center mt-4" onSubmit={handleSubmit}>
      <h1 className="text-danger display-6 mt-4 mb-4">FORM</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>
          User Name: <span>{username}</span>
        </Form.Label>
        <Form.Control
          type="text"
          placeholder="User Name"
          id="username"
          value={username}
          required
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
          required
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
          required
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
