import React from 'react';
import { useQuery } from '@apollo/client';
import {QUERY_USERS} from '../utils/queries';

const About = () => {

  const { data: userData } = useQuery(QUERY_USERS);

  const logData = () => {
    console.log(userData);
  }
  return(
    <div>
      About
      <button onClick={logData}>Button</button>
    </div>
  )
}

export default About