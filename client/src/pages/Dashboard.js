import React from 'react';
import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_ME_DASH } from '../utils/queries';
import AdminDash from '../components/AdminDash';
import StudentDash from '../components/StudentDash';

const Dashboard = () => {

  const { loading, data: userData } = useQuery(QUERY_ME_DASH);
  
  const adminStatus = userData?.me.admin;

  const loggedIn = Auth.loggedIn();

  if(loading){
    return(
      <div>...Loading</div>
    );
  }
  if(!loggedIn){
    return(
      <div>Please Login to view your dashboard!</div>
    );
  }
  return(
    <section>
      {adminStatus ? (
          <AdminDash/>
        ):(
          <StudentDash/>
        )
      }
    </section>
  )
}

export default Dashboard