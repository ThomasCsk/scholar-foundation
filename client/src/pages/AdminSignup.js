import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';


const AdminSignup = () =>{
    const [formState, setFormState] = useState({
        username: '',
        name: '',
        email: '',
        password: '',
        admin: false,
      });
      const [addUser, { error }] = useMutation(ADD_USER);
    
  
  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
    
  };

//submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
  
    try {
        const { data } = await addUser({
            variables: {...formState},
        });

        Auth.login(data.addUser.token);
    } catch (e) {
        console.error(e);
    }

  };

console.log(formState)

  return (
    <div>
        <Link to="/login">← Go to Login</Link>
        <Link to="/signup">← Go to Student Signup</Link>
    <h2>SIGN UP</h2>
    <form onSubmit={handleFormSubmit}>
    <div>
        <label htmlFor="username">Username:</label>
        <input
          placeholder="username"
          name="username"
          type="text"
          id="signup_username"
          value={formState.username}
          onChange={handleChange}
        />
    </div>
    <div> 
        <label htmlFor="Name">Name:</label>
        <input
          placeholder="Name"
          name="name"
          type="name"
          id="name"
          value={formState.name}
          onChange={handleChange}
        />
    </div>
    <div>
        <label htmlFor="email">Email:</label>
        <input
          placeholder="youremail@email.com"
          name="email"
          type="email"
          id="email"
          value={formState.email}
          onChange={handleChange}
        />
    </div>
    <div>
        <label htmlFor="password">Password:</label>
        <input
          placeholder="******"
          name="password"
          type="password"
          id="password" 
          value={formState.password}
          onChange={handleChange}
        />
    </div>
        <button type="submit">Submit</button>
     </form>
     {error && <div>Signup failed</div>}
  </div>
 
  )
}

export default AdminSignup;