import React from 'react';
import { useQuery } from '@apollo/client';
import Auth from '../utils/auth';

const Dashboard = () => {

  const loggedIn = Auth.loggedIn();
  return(
    <div>
      Dashboard
    </div>
  )
}

export default Dashboard