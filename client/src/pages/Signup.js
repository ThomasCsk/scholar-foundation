import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';


function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '', username: '', name: '' });
  const [addUser] = useMutation(ADD_USER);
  

  const handleFormSubmit = async (event) => {
    event.preventDefault();
  
    try {
        const { data } = await addUser({
            variables: {...formState},
        });

        Auth.addUser(data.addUser.token);
    } catch (e) {
        console.error(e);
    }

    setFormState({
        name: '',
        username: '',
        email: '',
        password: '',
    });

  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  console.log(formState)

  return (
    <div>
        <Link to="/login">← Go to Login</Link>
    <h2>SIGN UP</h2>
    <form onSubmit={handleFormSubmit}>
      <div className="flex-row space-between my-2">
        <label htmlFor="Name">Name:</label>
        <input
          placeholder="Name"
          value={formState.name}
          name="name"
          type="name"
          id="name"
          onChange={handleChange}
        />
      </div>
      <div className="flex-row space-between my-2">
        <label htmlFor="name">Username:</label>
        <input
          placeholder="username"
          value={formState.username}
          name="username"
          type="text"
          id="signup_username"
          onChange={handleChange}
        />
      </div>
      <div className="flex-row space-between my-2">
        <label htmlFor="email">Email:</label>
        <input
          placeholder="youremail@email.com"
          value={formState.email}
          name="email"
          type="email"
          id="email"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="pwd">Password:</label>
        <input
          placeholder="******"
          value={formState.password}
          name="password"
          type="password"
          id="signuppwd" 
          onChange={handleChange}
        />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
 
  )
}

export default Signup;