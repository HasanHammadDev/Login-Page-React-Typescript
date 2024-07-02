import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Checkmark } from 'react-checkmark';
import { Link } from "react-router-dom";

interface Inputs {
  email: string;
  password: string;
  confirmPassword: string;
}

const Register: React.FC = () => {
  const loginRoute: string = '/';
  const [inputs, setInputs] = useState<Inputs>({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errorMsg, setErrorMsg] = useState<string>('');
  const [passwordCriteria, setPasswordCriteria] = useState({
    minLength: false,
    hasUpperCase: false,
    hasLowerCase: false,
    hasNumber: false,
    hasSpecialChar: false,
  });

  const handleChange = (name: string, value: string) => {
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));

//Check which requirements the password meets 
    if (name === 'password') {
      setPasswordCriteria({
        minLength: value.length >= 8,
        hasUpperCase: /[A-Z]/.test(value),
        hasLowerCase: /[a-z]/.test(value),
        hasNumber: /[0-9]/.test(value),
        hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(value),
      });
    }
  };


//Check if password meets all requirements
  const validatePassword = () => {
    return (
      passwordCriteria.minLength &&
      passwordCriteria.hasUpperCase &&
      passwordCriteria.hasLowerCase &&
      passwordCriteria.hasNumber &&
      passwordCriteria.hasSpecialChar
    );
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!validatePassword()) {
      setErrorMsg('Password must meet all criteria.');
    } else if (inputs.password !== inputs.confirmPassword) {
      setErrorMsg('Passwords do not match.');
    } else {
      setErrorMsg('');
    }
  };

  return (
<div className="bg-gradient-to-r from-blue-200 to-blue-500 h-screen flex justify-center items-center p-4">
  <Form className="bg-white shadow-lg flex flex-col border rounded-lg p-8 w-full max-w-md" onSubmit={handleSubmit}>
    <Form.Group className="mb-4" controlId="formBasicEmail">
      <Form.Label className="mb-2 text-gray-700">Email</Form.Label>
      <Form.Control
        onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange('email', e.target.value)}
        type="email"
        placeholder="Enter Email"
        value={inputs.email}
        className="border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </Form.Group>

    <Form.Group className="mb-4" controlId="formBasicPassword">
      <Form.Label className="mb-2 text-gray-700">Password</Form.Label>
      <Form.Control
        onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange('password', e.target.value)}
        type="password"
        placeholder="Enter Password"
        value={inputs.password}
        className="border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </Form.Group>

    <Form.Group className="mb-4" controlId="formBasicConfirmPassword">
      <Form.Label className="mb-2 text-gray-700">Confirm Password</Form.Label>
      <Form.Control
        onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange('confirmPassword', e.target.value)}
        type="password"
        placeholder="Confirm Password"
        value={inputs.confirmPassword}
        className="border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </Form.Group>

    <div className='mb-2'>
      <ul className="text-gray-600 flex flex-col items-start space-y-1">
        <li className="flex items-center">
          {passwordCriteria.minLength && <Checkmark size='small' />}
          <span className="ml-2">At least 8 characters</span>
        </li>
        <li className="flex items-center">
          {passwordCriteria.hasUpperCase && <Checkmark size='small' />}
          <span className="ml-2">At least one uppercase letter</span>
        </li>
        <li className="flex items-center">
          {passwordCriteria.hasLowerCase && <Checkmark size='small' />}
          <span className="ml-2">At least one lowercase letter</span>
        </li>
        <li className="flex items-center">
          {passwordCriteria.hasNumber && <Checkmark size='small' />}
          <span className="ml-2">At least one number</span>
        </li>
        <li className="flex items-center">
          {passwordCriteria.hasSpecialChar && <Checkmark size='small' />}
          <span className="ml-2">At least one special character</span>
        </li>
      </ul>
    </div>

    {errorMsg && <div className="text-red-500 mb-1 font-semibold text-center">{errorMsg}</div>}

    <Button className='mt-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg' variant="primary" type="submit">Register</Button>

    <p className="text-gray-600 text-center mt-3">
          Already have an account?{" "}
          <Link to={loginRoute} className="text-blue-500 hover:text-blue-900 underline">
            Back To Login
          </Link>
        </p>
  </Form>
</div>
  );
};

export default Register;
