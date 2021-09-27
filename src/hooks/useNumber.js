import { useState } from "react";

const useNumber = (input) => {
    const numExp = /^[0-9\b]+$/

    const [enteredValue, setEnteredValue] = useState('');
    // const [enteredValueIsValid, setEnteredValueIsValid] = useState(false);
    const [isTouched, setIsTouched] = useState(false);

    // let l = enteredValue.length;

    // const numberRegEx = /[0-9]/;
    const valueIsValid = input(enteredValue);
    const hasError = !valueIsValid && isTouched;

    const valueChangeHandler = event => {
        console.log(event)
        setEnteredValue(event.target.value);
        let val = input.target.value;
        if(input.target.value === '' || numExp.test(input.target.value)) return true;
        else return false
        // input.target.value = val.substring(0, (val.length-1))
    };

    const inputBlurHandler = event => {
        setIsTouched(true);
    };

    const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
    };

    return {
        value: enteredValue,
        isValid: valueIsValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset
    };
};

export default useNumber;