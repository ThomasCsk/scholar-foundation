import React from "react";

function Staff() {
  return (
    <div>
      <h1 className="staff-pagetitle">Meet Our Team </h1>
      <div className="staff-div">
        <img className="staff-img"
          style={{ maxWidth: "120px" }}
          src="https://randomuser.me/api/portraits/women/23.jpg"
          alt="employee"
        />
        <p className="staff-info staff-name">Kathleen Simpson</p>
        <p className="staff-info staff-title">President &amp; COO</p>
        <p className="staff-contact">ksimpson@email.com</p>
        <p className="staff-contact">555-123-2345</p>
      </div>

      <div className="staff-div">
        <img
          style={{ maxWidth: "120px" }}
          src="https://randomuser.me/api/portraits/women/42.jpg"
          alt="employee"
        />
        <p className="staff-info staff-name">Maria Lopez</p>
        <p className="staff-info staff-title">Director of Scholarship Operations</p>
        <p className="staff-contact">mlopez@email.com</p>
        <p className="staff-contact">555-123-4729</p>
      </div>

      <div className="staff-div">
        <img
          style={{ maxWidth: "120px" }}
          src="https://randomuser.me/api/portraits/women/51.jpg"
          alt="employee"
        />
        <p className="staff-info staff-name">Danielle Doran</p>
        <p className="staff-info staff-title">Office Assistant</p>
        <p className="staff-contact">ddoran@email.com</p>
        <p className="staff-contact">123-444-5238</p>
      </div>

      <div className="staff-div">
        <img
          style={{ maxWidth: "120px" }}
          src="https://randomuser.me/api/portraits/men/35.jpg"
          alt="employee"
        />
        <p className="staff-info staff-name">John Finnerty</p>
        <p className="staff-info staff-title">Program Assistant</p>
        <p className="staff-contact">jfinn@email.com</p>
        <p className="staff-contact">554-123-8327</p>
      </div>

      <div className="staff-div">
        <img
          style={{ maxWidth: "120px" }}
          src="https://randomuser.me/api/portraits/men/45.jpg"
          alt="employee"
        />
        <p className="staff-info staff-name">Kurt Stewart</p>
        <p className="staff-info staff-title">Development Coordinator</p>
        <p className="staff-contact">kstewart@email.com</p>
        <p className="staff-contact">552-312-2385</p>
      </div>

      <div className="staff-div">
        <img
          style={{ maxWidth: "120px" }}
          src="https://randomuser.me/api/portraits/women/80.jpg"
          alt="employee"
        />
        <p className="staff-info staff-name">Elizabeth Walsh</p>
        <p className="staff-info staff-title">Program Assistant</p>
        <p className="staff-contact">ewalsh@email.com</p>
        <p className="staff-contact">234-123-3492</p>
      </div>
    </div>
  );
}

export default Staff;
