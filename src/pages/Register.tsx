import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Checkmark } from 'react-checkmark';

interface Inputs {
  email: string;
  password: string;
  confirmPassword: string;
}

const Register: React.FC = () => {
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
    <div className="bg-blue-200 h-screen flex justify-center items-center">
      <Form className="bg-gray-100 shadow flex flex-col border rounded m-1 p-10" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="m-1">Email</Form.Label>
          <Form.Control
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange('email', e.target.value)}
            type="email"
            placeholder="Enter Email"
            value={inputs.email}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="m-1">Password</Form.Label>
          <Form.Control
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange('password', e.target.value)}
            type="password"
            placeholder="Enter Password"
            value={inputs.password}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
          <Form.Label className="m-1">Confirm Password</Form.Label>
          <Form.Control
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange('confirmPassword', e.target.value)}
            type="password"
            placeholder="Confirm Password"
            value={inputs.confirmPassword}
          />
        </Form.Group>

        <div className='mb-1'>
          <ul className="text-gray-600 flex flex-col items-start">
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

        {errorMsg && <div className="text-red-500 mb-3 font-semibold text-center">{errorMsg}</div>}

        <Button className='mt-1' variant="primary" type="submit">Register</Button>
      </Form>
    </div>
  );
};

export default Register;
