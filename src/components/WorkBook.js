import React from 'react';
import Entry from './Entry';
// import classes from './MoviesList.module.css';

const WorkBook = (props) => {
  return (
    <ul >
      {props.entries.map((entry) => (
        <Entry
          key={entry.eid}
          eid={entry.eid}
          firstname={entry.firstname}
          lastname={entry.lastname}
          email={entry.email}
        />
      ))}
    </ul>
  );
};

export default WorkBook;