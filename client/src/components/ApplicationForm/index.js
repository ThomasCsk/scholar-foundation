import React, { useState } from 'react';

const ApplicationForm = () => {
    return (
      <div>
        <p className="application-form">
        </p>
        <form className="flex-row justify-center justify-space-between-md align-stretch">
          <textarea
            placeholder="Here's a new thought..."
            className="form-input col-12 col-md-9"
          ></textarea>
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  };
  
  export default ApplicationForm;