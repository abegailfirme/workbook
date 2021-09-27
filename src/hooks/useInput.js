import { useState } from "react";

const useInput = (validator) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);
    const regEx = /^[a-zA-Z]+$/

    let valueIsValid = regEx.test(validator(enteredValue));
    let hasError = !valueIsValid && isTouched;

    const valueChangeHandler = event => {
        let val = event.target.value;
        if (event.target.value === '' || regEx.test(event.target.value)) 
        {   
            setEnteredValue(event.target.value);
        }
        else {
            valueIsValid = false
            event.target.value = val.substring(0, (val.length - 1))
        }
    };

    const inputBlurHandler = event => {
        
        console.log(enteredValue, valueIsValid)
        setIsTouched(true);
    };

    const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
    };

    return {
        value: enteredValue,
        isValid: valueIsValid,
        hasError: !valueIsValid,
        valueChangeHandler,
        inputBlurHandler,
        reset
    };
};

export default useInput;