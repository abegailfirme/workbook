import React, { useState } from "react";
import CustomModal from "./UI/CustomModal";
import useInput from "../hooks/useInput";
import useNumber from "../hooks/useNumber";
import useEmail from "../hooks/useEmail";
import { Form, Button, Row, Col } from "react-bootstrap";

const EntryForm = (props) => {
  const [saved, setSave] = useState(false);
  let s = false;
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

  const {
    value: enteredEID,
    isValid: enteredIdIsValid,
    hasError: idInputHasError,
    valueChangeHandler: idChangeHandler,
    inputBlurHandler: idBlurHandler,
    reset: resetID
  } = useNumber(value => value.trim() !== '');

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail
  } = useEmail(value => value.includes('@'));

  const {
    value: enteredDate,
    isValid: enteredDateIsValid,
    hasError: dateInputHasError,
    valueChangeHandler: bdateChangeHandler,
    inputBlurHandler: bdateBlurHandler,
    reset: resetDate
  } = useEmail(value => value.trim() !== '');

  let formIsValid = false;

  if (enteredFNameIsValid && enteredLNameIsValid && enteredEmailIsValid && enteredIdIsValid && enteredDateIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = event => {
    event.preventDefault();
  
    const entry = {
      eid: enteredEID,
      firstname: enteredFName,
      lastname: enteredLName,
      email: enteredEmail,
      birthdate: enteredDate
    };

  
    props.onAddEntry(entry);

    setSave(true)
    resetfName();
    resetlName();
    resetEmail();
    resetID();
    resetDate();

  };

  const modalHandler = () => {
    setSave(false)
  }

  const fnameInputClasses = fnameInputHasError ? 'mb3 form-control invalid' : 'mb-3 form-control';
  const lnameInputClasses = lnameInputHasError ? 'mb3 form-control invalid' : 'mb-3 form-control';
  const emailInputClasses = emailInputHasError ? 'mb3 form-control invalid' : 'mb-3 form-control';
  const idInputClasses = idInputHasError ? 'mb3 form-control invalid' : 'mb-3 form-control';

  return (
    <div>
    
      {saved && <CustomModal show = {saved} modalTitle="Success" modalMessage="The entry was successfully saved." onConfirm={modalHandler}/>}
      <Form onSubmit={formSubmissionHandler}>
        <Form.Group className="form-control" controlId="formGroupEmail">
          <Row>
            <Col>
              <Form.Control className={idInputClasses} type='text' value={enteredEID} onChange={idChangeHandler} onBlur={idBlurHandler} placeholder="Enterprise ID" />
              {idInputHasError && <Form.Text className="error-text">
                Enterprise ID must not be empty
              </Form.Text>}
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Control className={fnameInputClasses} type='text' value={enteredFName} onChange={fnameChangeHandler} onBlur={fnameBlurHandler} placeholder="First name" />
              {fnameInputHasError && <Form.Text className="error-text">
                First name must not be empty
              </Form.Text>}
            </Col>
            <Col>
              <Form.Control className={lnameInputClasses} type='text' value={enteredLName} onChange={lnameChangeHandler} onBlur={lnameBlurHandler} placeholder="Last name" />
              {lnameInputHasError && <p className="error-text">Last name must not be empty</p>}
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Control className={emailInputClasses} type="text" value={enteredEmail} onChange={emailChangeHandler} onBlur={emailBlurHandler} placeholder="Email" />
              {emailInputHasError && <Form.Text className="error-text">
                Please enter a valid email
              </Form.Text>}
            </Col>
            <Col>
              <Form.Control className={emailInputClasses} type='date' value={enteredDate} onChange={bdateChangeHandler} onBlur={bdateBlurHandler} />
              {dateInputHasError && <p className="error-text">Birthdate is required.</p>}
            </Col>
          </Row>
          <Button variant="primary" type="submit" disabled={!formIsValid}>
            Submit
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default EntryForm;
