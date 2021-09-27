import Modal from "./UI/Modal";
import React, { useRef, useState } from "react";
import useInput from "../hooks/useInput";
import useNumber from "../hooks/useNumber";

const EntryForm = (props) => {
  const numExp = /^[0-9\b]+$/;
  const enteredEID = useRef();

  const {
    value: enteredFName,
    isValid: enteredFNameIsValid,
    hasError: fnameInputHasError,
    valueChangeHandler: fnameChangeHandler,
    inputBlurHandler: fnameBlurHandler,
    reset: resetfName
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredLName,
    isValid: enteredLNameIsValid,
    hasError: lnameInputHasError,
    valueChangeHandler: lnameChangeHandler,
    inputBlurHandler: lnameBlurHandler,
    reset: resetlName
  } = useInput(value => value.trim() !== '');

  // const {
  //   value: enteredEID,
  //   isValid: enteredIdIsValid,
  //   hasError: idInputHasError,
  //   valueChangeHandler: idChangeHandler,
  //   inputBlurHandler: idBlurHandler,
  //   reset: resetID
  // }  = useInput(value => value.trim() !== '');

  const numOnly = (input) => {
    const numExp = /^[0-9\b]+$/
    
    let val = input.target.value;

    if (input.target.value === '' || numExp.test(input.target.value)) return true;
    else {
      input.target.value = val.substring(0, (val.length - 1))
      return false   
    }
  }


  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail
  } = useInput(value => value.includes('@'));

  const {
    value: enteredDate,
    isValid: enteredDateIsValid,
    hasError: dateInputHasError,
    valueChangeHandler: bdateChangeHandler,
    inputBlurHandler: bdateBlurHandler,
    reset: resetDate
  } = useInput(value => value.trim() !== '');

  let formIsValid = false;

  if (enteredFNameIsValid && enteredLNameIsValid && enteredEmailIsValid && numOnly && enteredDateIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = event => {
    event.preventDefault();

    const entry = {
      eid: enteredEID.current.value,
      firstname: enteredFName,
      lastname: enteredLName,
      email: enteredEmail,
      birthdate: enteredDate
    };

    props.onAddEntry(entry);

    resetfName();
    resetlName();
    resetEmail();
    // resetID();
    resetDate();
  };

  const fnameInputClasses = fnameInputHasError ? 'form-control invalid' : 'form-control';
  const lnameInputClasses = lnameInputHasError ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control';
  const idInputClasses = !numOnly ? 'form-control invalid' : 'form-control';

  return (
    <React.Fragment>
      <Modal modalTitle="Success!" modalMessage="The entry is succesfully saved." />
      <form onSubmit={formSubmissionHandler}>
        <div className={idInputClasses}>
          <label htmlFor='eid'>Enterprise ID</label>
          <input type='text' id='eid' onChange={numOnly} ref={enteredEID} required={true}/>
          {!numOnly && <p className="error-text">Enterprise ID must not be empty</p>}
        </div>

        <div>
          <div className={fnameInputClasses}>
            <label htmlFor='fname'>First name</label>
            <input type='text' id='fname' value={enteredFName} onInput={fnameChangeHandler} onBlur={fnameBlurHandler} />
            {fnameInputHasError && <p className="error-text">First name must not be empty</p>}
          </div>

          <div className={lnameInputClasses}>
            <label htmlFor='lname'>Last name</label>
            <input type='text' id='lname' value={enteredLName} onChange={lnameChangeHandler} onBlur={lnameBlurHandler} />
            {lnameInputHasError && <p className="error-text">Last name must not be empty</p>}
          </div>
        </div>

        <div className={emailInputClasses}>
          <label htmlFor='email'>Email</label>
          <input type='text' id='email' value={enteredEmail} onChange={emailChangeHandler} onBlur={emailBlurHandler} />
          {emailInputHasError && <p className="error-text">Please enter a valid email</p>}
        </div>

        <div className={emailInputClasses}>
          <label htmlFor='bdate'>Birthdate</label>
          <input type='date' id='bdate' value={enteredDate} onChange={bdateChangeHandler} onBlur={bdateBlurHandler} />
          {dateInputHasError && <p className="error-text">Birthdate is required.</p>}
        </div>

        <div className="form-actions">
          <button className="btn btn-primary" disabled={!formIsValid}>Submit</button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default EntryForm;
