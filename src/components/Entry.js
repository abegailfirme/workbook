import React from 'react';
import { ListGroup } from 'react-bootstrap';

const Entry = (props) => {
  return (
    <tr>
      <td>{props.eid}</td>
      <td>{props.firstname} {props.lastname}</td>
      <td>{props.email}</td>
      <td>{props.birthdate}</td>
    </tr>
  );
};

export default Entry;