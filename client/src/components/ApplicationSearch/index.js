import React, { useState } from "react";
import { useQuery } from '@apollo/client';
import { QUERY_APPLICATIONS } from '../../utils/queries';



const ApplicationSearch = () => {
  const { loading, data: appData } = useQuery(QUERY_APPLICATIONS);
  const [nameText, setText] = useState('');
  const [searchedApps, setSearchedApps] = useState([])

  if(loading){
    return(
      <div>...Loading</div>
    )
  }

  const handleChange = e => {
    setText(e.target.value);
  }

  const searchApps = async e => {
    e.preventDefault();
    var tempHolder = [];
    try{
      const placeHolder = appData.applications.map(app => {
        if(app.name === nameText.trim()){
          tempHolder.push(app);
        }else{
          return 0;
        }
      })
      setText('');
      console.log(tempHolder);
      setSearchedApps(tempHolder);
      tempHolder = [];
    }
    catch(e){
      console.error(e);
    }
  }

  return (
    <section>
      <form onSubmit={searchApps}>
        <h4>Please type in a student's name:</h4>
        <input value={nameText} onChange={handleChange}></input>
        <button type="submit">Search</button>
      </form>
      <div>
      {searchedApps.map(app => {
        return (
          <div key={app._id}>
            <div>Name: {app.name} Created: {app.createdAt}</div>
            <div>Phone: {app.phoneNumber} Birthday: {app.birthday}</div>
            <div>Street: {app.addressStreet} City: {app.addressCity}</div>
            <div>State: {app.state} Zipcode: {app.zipCode}</div>
            <div>Parent/Guardian Name: {app.guardianName} Parent/Gaurdian Phone: {app.guardianPhone}</div>
            <div>School: {app.school} Grade: {app.grade}</div>
            <div>Current Status: {app.currentStatus === 0?(
                <p>Pending</p>
              ):(
                app.currentStatus === 1?(
                  <p>Accepted</p>
                ):(
                  <p>Denied</p>
                )
              )}
            </div>
          </div>
        )
      })}
      </div>
    </section>
  )
}

export default ApplicationSearch;