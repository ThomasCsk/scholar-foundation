import React from 'react';
import { useMutation } from '@apollo/client';
import { EDIT_APPLICATION } from '../../utils/mutations';

const Modal = ({ onClose, currentApp }) => {
  const {    
    _id,
    createdAt,
    name,
    birthday,
    phoneNumber,
    addressStreet,
    addressCity,
    state,
    zipCode,
    guardianName,
    guardianPhone,
    grade,
    school,
    currentStatus} = currentApp;

    const [editApplication] = useMutation(EDIT_APPLICATION);

    const acceptApp = async () => {
      try{
        await editApplication({

        })
      }
      catch(e){
        console.error(e)
      }
    }

    const denyApp = async () => {
      try{
        await editApplication({

        })
      }
      catch(e){
        console.error(e)
      }
    }

  return (
    <div className='modalBackground'>
      <div className='modalCard'>
        <div>
          <h3 className='modalTitle'>{name}'s Application</h3>
        </div>
        <div className='modalContent'>
          <div>Name: {name} Created: {createdAt}</div>
          <div>Phone: {phoneNumber} Birthday: {birthday}</div>
          <div>Street: {addressStreet} City: {addressCity}</div>
          <div>State: {state} Zipcode: {zipCode}</div>
          <div>Parent/Guardian Name: {guardianName} Parent/Gaurdian Phone: {guardianPhone}</div>
          <div>School: {school} Grade: {grade}</div>
        </div>    
        <div className='modalButtons'>
          <button onClick={acceptApp}>Accept</button>
          <button onClick={denyApp}>Deny</button>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  )
}

export default Modal;