import React, {useState} from "react";
import { useQuery } from '@apollo/client';
import { QUERY_APPLICATIONS } from '../../utils/queries';
import Modal from '../Modal'


const PendingApplicaitons = () => {

  const { loading, data } = useQuery(QUERY_APPLICATIONS);
  const [currentApp, setCurrentApp] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const toggleModal = (app, i) => {
    setCurrentApp({...app, index: i});
    setIsModalOpen(!isModalOpen);
  }

  if(loading){
    return(
      <div>...Loading</div>
    )
  }

  const pendingApps = []
  const placeHolder = data.applications.map((index) => {
    if(index.currentStatus === 0){
      return pendingApps.push(index);
    }else{
      return 0;
    }})

  return (
    <div>
      {isModalOpen && (
        <Modal currentApp={currentApp} onClose={toggleModal} />
      )}
      <ul>
        {pendingApps.map((app, i) => (
          <li key={app._id} onClick={() => toggleModal(app, i)}>
            <div><h4>Name: {app.name}</h4> <h4>Created at: {app.createdAt}</h4></div>
            <div><h5>Birthday: {app.birthday}</h5> <h5>Parent/Gaurdian: {app.guardianName}</h5></div>
            <div><h5>School: {app.school}</h5> <h5>Grade: {app.grade}</h5></div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PendingApplicaitons;