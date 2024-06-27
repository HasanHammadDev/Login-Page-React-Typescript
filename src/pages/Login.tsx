import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Login() {
    const registerRoute: string = '/register';
    return (
        <div className="bg-blue-200 h-screen flex justify-center items-center">
            <Form className="bg-gray-100 shadow flex flex-col border rounded m-1 p-10">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="m-1">Email</Form.Label>
                    <Form.Control
                        // onChange={(e) => handleChange("username", e.target.value)}
                        type="text"
                        placeholder="Enter Email"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="m-1">Password</Form.Label>
                    <Form.Control
                        // onChange={(e) => handleChange("username", e.target.value)}
                        type="text"
                        placeholder="Enter Password"
                    />
                </Form.Group>
                
                <Button variant="primary" type="submit">Login</Button>
                <Link className="mt-1 text-xs underline text-blue-500 hover:text-blue-900" to={registerRoute}>Register New Account</Link>
            </Form>
        </div>
    );
}