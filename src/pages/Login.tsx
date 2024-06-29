import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Login() {
    const registerRoute: string = '/register';


    return (
<div className="bg-gradient-to-r from-blue-200 to-blue-500 h-screen flex justify-center items-center p-4">
  <Form className="bg-white shadow-md flex flex-col border rounded-lg p-8 w-full max-w-md">
    <Form.Group className="mb-4" controlId="formBasicEmail">
      <Form.Label className="mb-2 text-gray-700">Email</Form.Label>
      <Form.Control
        type="email"
        placeholder="Enter Email"
        className="border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </Form.Group>

    <Form.Group className="mb-4" controlId="formBasicPassword">
      <Form.Label className="mb-2 text-gray-700">Password</Form.Label>
      <Form.Control
        type="password"
        placeholder="Enter Password"
        className="border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </Form.Group>

    <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mb-4" variant="primary" type="submit">Login</Button>

    <p className="text-gray-600 text-center">Don't have an account? <Link to={registerRoute} className="text-blue-500 hover:text-blue-900 underline">Register New Account</Link>
    </p>
  </Form>
</div>
    );
}