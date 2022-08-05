import React from "react";
import PendingApplications from '../PendingApplications'
import ApplicationSearch from '../ApplicationSearch'

const AdminDash = () => {
  return (
    <section>
      <div>
        <h2>
          Admin Dashboard
        </h2>
        <div>
          <div>
            <h3>Pending Applications</h3>
            <PendingApplications/>
          </div>
          <div>
            <h3>Search Applications</h3>
            <ApplicationSearch/>
          </div>
        </div>
      </div>
      
    </section>
  );
}

export default AdminDash;