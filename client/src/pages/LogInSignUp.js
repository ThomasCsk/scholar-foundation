// import React, { useState } from 'react';
// import { useMutation } from '@apollo/client';
// import { Link } from 'react-router-dom';
// import { LOGIN } from '../utils/mutations';
// import Auth from '../utils/auth';
// import { ADD_USER } from '../utils/mutations';

// function LogInSignUp(props) {
//   const [formState, setFormState] = useState({ email: '', password: '' });
//   const [login, { error }] = useMutation(LOGIN);
//   const [addUser] = useMutation(ADD_USER);

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const mutationResponse = await login({
//         variables: { email: formState.email, password: formState.password },
//       });
//       const token = mutationResponse.data.login.token;
//       Auth.login(token);
//     } catch (e) {
//       console.log(e);
//     }

//     const mutationResponse = await addUser({
//       variables: {
//         email: formState.email,
//         password: formState.password,
//         firstName: formState.firstName,
//         lastName: formState.lastName,
//       },
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormState({
//       ...formState,
//       [name]: value,
//     });
//   };

//   // const handleFormSubmit = async (event) => {
//   //   event.preventDefault();
   
//   //   });
//     const token = mutationResponse.data.addUser.token;
//     Auth.login(token);
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormState({
//       ...formState,
//       [name]: value,
//     });
//   };
  

//   return (
//     <div>
//     <div className="container my-1">
//      <h2>Login</h2>
//       <form onSubmit={handleFormSubmit}>
//         <div className="flex-row space-between my-2">
//           <label htmlFor="name">Username:</label>
//           <input
//             placeholder="username"
//             name="text"
//             type="text"
//             id="username"
//             onChange={handleChange}
//           />
//         </div>
//         <div className="flex-row space-between my-2">
//           <label htmlFor="pwd">Password:</label>
//           <input
//             placeholder="******"
//             name="password"
//             type="password"
//             id="pwd"
//             onChange={handleChange}
//           />
//         </div>
//         {error ? (
//           <div>
//             <p className="error-text">The provided credentials are incorrect</p>
//           </div>
//         ) : null}
//         <div className="flex-row flex-end">
//           <button type="submit">Submit</button>
//         </div>
//       </form>
//     </div>
//     <div className="container my-1">
//       <h2>Signup</h2>
//       <form onSubmit={handleFormSubmit}>
//         <div className="flex-row space-between my-2">
//           <label htmlFor="Name">Name:</label>
//           <input
//             placeholder="Name"
//             name="name"
//             type="name"
//             id="name"
//             onChange={handleChange}
//           />
//         </div>
//         <div className="flex-row space-between my-2">
//           <label htmlFor="name">Username:</label>
//           <input
//             placeholder="username"
//             name="text"
//             type="text"
//             id="username"
//             onChange={handleChange}
//           />
//         </div>
//         <div className="flex-row space-between my-2">
//           <label htmlFor="email">Email:</label>
//           <input
//             placeholder="youremail@test.com"
//             name="email"
//             type="email"
//             id="email"
//             onChange={handleChange}
//           />
//         </div>
//         <div className="flex-row space-between my-2">
//           <label htmlFor="pwd">Password:</label>
//           <input
//             placeholder="******"
//             name="password"
//             type="password"
//             id="pwd"
//             onChange={handleChange}
//           />
//         </div>
//         <div className="flex-row flex-end">
//           <button type="submit">Submit</button>
//         </div>
//       </form>
//     </div>
//     </div>
//   );
// }

// export default LogInSignUp