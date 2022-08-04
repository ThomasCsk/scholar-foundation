import React, { useState } from 'react';

function ApplicationForm() {
    const [formState, setFormState] = useState({ student_name: '', birthday: '', student_phonenumber: '', student_street: '', city: '', state: '', guardian_name: '', guardian_phone: '', grade: '', school: ''});
    const [errorMessage, setErrorMessage] = useState('');
    const { student_name, birthday, student_phonenumber, student_street, city, state, guardian_name, guardian_phone, grade, school } = formState;
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!errorMessage) {
        console.log('Submit Form', formState);
      }
    };
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  }
    return (
      <div>
      <form className="application-form" onSubmit={handleSubmit} onBlur={handleChange}>
        <div className='container'>
          <h1>Scholarship Application</h1>
          <p>Please fill out this form in its entirety. Double check all answers before submitting.</p>

          <div className='form-questions'>
            {/* input for students name */}
            <label for='student_name'>Student Name:</label>
            <input type='text' name='student_name' defaultValue={formState.student_name} onBlur={handleChange} required/>

            {/* input for students birthday */}
            <label for='date'>Students Birthday:</label>
            <input type='date' name='birthday' defaultValue={formState.birthday} onBlur={handleChange} required/>

            {/* input for students phone number */}
            <label for='phone_number'>Student Phone Number:</label>
            <input type='text' name='student_phonenumber' defaultValue={formState.student_phonenumber} onBlur={handleChange} />

            {/* input for students street address */}
            <label for='street_address'>Student Street Adress:</label>
            <input type='text' name='student_street' defaultValue={formState.student_street} onBlur={handleChange} />

            {/* input for students city */}
            <label for='city'>City:</label>
            <input type='text' name='city' defaultValue={formState.city} onBlur={handleChange} />

            {/* input for students state */}
            <label for='state'>Choose a State:</label>
            <select id='state' name='state' defaultValue={formState.state} onBlur={handleChange} >
            <option value="ALABAMA">ALABAMA</option>
            <option value="ALASKA">ALASKA</option>
            <option value="ARIZONA">ARIZONA</option>
            <option value="ARKANSAS">ARKANSAS</option>
            <option value="CALIFORNIA">CALIFORNIA</option>
            <option value="COLORADO">COLORADO</option>
            <option value="CONNECTICUT">CONNECTICUT</option>
            <option value="DELAWARE">DELAWARE</option>
            <option value="FLORIDA">FLORIDA</option>
            <option value="GEORGIA">GEORGIA</option>
            <option value="HAWAII">HAWAII</option>
            <option value="IDAHO">IDAHO</option>
            <option value="ILLINOIS">ILLINOIS</option>
            <option value="INDIANA">INDIANA</option>
            <option value="IOWA">IOWA</option>
            <option value="KANSAS">KANSAS</option>
            <option value="KENTUCKY">KENTUCKY</option>
            <option value="LOUISIANA">LOUISIANA</option>
            <option value="MAINE">MAINE</option>
            <option value="MARYLAND">MARYLAND</option>
            <option value="MASSACHUSETTS">MASSACHUSETTS</option>
            <option value="MICHIGAN">MICHIGAN</option>
            <option value="MINNESOTA">MINNESOTA</option>
            <option value="MISSISSIPPI">MISSISSIPPI</option>
            <option value="MISSOURI">MISSOURI</option>
            <option value="MONTANA">MONTANA</option>
            <option value="NEBRASKA">NEBRASKA</option>
            <option value="NEVADA">NEVADA</option>
            <option value="NEW_HAMPSHIRE">NEW_HAMPSHIRE</option>
            <option value="NEW_JERSEY">NEW_JERSEY</option>
            <option value="NEW_MEXICO">NEW_MEXICO</option>
            <option value="NEW_YORK">NEW_YORK</option>
            <option value="NORTH_CAROLINA">NORTH_CAROLINA</option>
            <option value="NORTH_DAKOTA">NORTH_DAKOTA</option>
            <option value="OHIO">OHIO</option>
            <option value="OKLAHOMA">OKLAHOMA</option>
            <option value="OREGON">OREGON</option>
            <option value="PENNSYLVANIA">PENNSYLVANIA</option>
            <option value="RHODE_ISLAND">RHODE_ISLAND</option>
            <option value="SOUTH_CAROLINA">SOUTH_CAROLINA</option>
            <option value="SOUTH_DAKOTA">SOUTH_DAKOTA</option>
            <option value="TENNESSEE">TENNESSEE</option>
            <option value="TEXAS">TEXAS</option>
            <option value="UTAH">UTAH</option>
            <option value="VERMONT">VERMONT</option>
            <option value="VIRGINIA">VIRGINIA</option>
            <option value="WASHINGTON">WASHINGTON</option>
            <option value="WEST_VIRGINIA">WEST_VIRGINIA</option>
            <option value="WISCONSIN">WISCONSIN</option>
            <option value="WYOMING">WYOMING</option>
            </select>
          
            {/* input for guardian name */}
            <label for='guardian_name'>Enter in Guardian Name:</label>
            <input type='text' name='guardian_name' defaultValue={formState.guardian_name} onBlur={handleChange}/>

            {/* input for guardians phone */}
            <label for='guardian_phone'>Enter in Guardian Phone Number:</label>
            <input type='text' name='guardian_phone' defaultValue={formState.guardian_phone} onBlur={handleChange}/>

            {/* input for gade of student */}
            <label for='grade'>Enter in Grade of Student:</label>
            <select id='grade' name='grade' defaultValue={formState.grade} onBlur={handleChange}>
            <option value="SIXTH"></option>
            <option value="SEVENTH">SEVENTH</option>
            <option value="EIGHTH">EIGHTH</option>
            <option value="NINTH">NINTH</option>
            <option value="TENTH">TENTH</option>
            <option value="ELEVENTH">ELEVENTH</option>
            <option value="TWELTH">TWELTH</option>
            </select>

            {/* input for students school */}
            <label for='school'>Enter in Students School:</label>
            <input type='text' name='school' defaultValue={formState.school} onBlur={handleChange}/>

            {/* input for submit bitton */}
            <button type="submit">Submit Application</button>

          </div>
        </div>
      </form>
      </div>
    );
  
  
  export default ApplicationForm;