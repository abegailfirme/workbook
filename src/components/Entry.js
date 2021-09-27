import React from 'react';


const Entry = (props) => {
  return (
    <li>
      <h2>{props.eid}</h2>
      <h3>{props.firstname} {props.lastname}</h3>
      <p>{props.email}</p>
    </li>
  );
};

export default Entry;