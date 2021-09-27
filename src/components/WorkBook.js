import React from 'react';
import Entry from './Entry';
import { Table } from 'react-bootstrap';

const WorkBook = (props) => {
  return (
    <Table striped bordered hover size="sm"> 
      <thead>
        <tr>
          <th>EID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Birthdate</th>
        </tr>
      </thead>
      <tbody>
        {props.entries.map((entry) => (
          <Entry
            key={entry.eid}
            eid={entry.eid}
            firstname={entry.firstname}
            lastname={entry.lastname}
            email={entry.email}
            birthdate={entry.birthdate}
          />
        ))}
      </tbody>
    </Table>
  );
};

export default WorkBook;