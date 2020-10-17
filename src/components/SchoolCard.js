import React from 'react';
import './css/SchoolCard.css';

function SchoolCard(props) {
  return(
    <div className="col-4">
      <div className="card">
        <h5 className="card-header">{props.school.ENTITY_NAME}</h5>
        <div className="card-body">
          <h5 className="card-title">
            <span className="badge">2017-18</span>
            <span className="badge">2016-17</span>
            <span className="badge">Archive</span>
          </h5>
          <span className="badge badge-header">Student Data</span>
          <ul className="list-group">
            <li className="list-group-item">% Male: {props.school.PER_MALE}, % Female: {props.school.PER_FEMALE}</li>
            <li className="list-group-item">% ELL: {props.school.PER_ELL}</li>
            <li className="list-group-item">% SWD: {props.school.PER_SWD}</li>
          </ul>
          <span className="badge badge-header">School Data</span>
          <ul className="list-group">
            <li className="list-group-item">School Report Card</li>
            <li className="list-group-item">Student and Educator Report</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SchoolCard;
