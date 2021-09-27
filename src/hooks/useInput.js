import { useState } from "react";

const useInput = (validator) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);
    const regEx = /^[a-zA-Z]+$/

    let valueIsValid = validator(enteredValue)
    
    const valueChangeHandler = event => {
        let val = event.target.value;
        valueIsValid = event.target.value === '' || regEx.test(event.target.value)
        if (valueIsValid) 
        {   
            setEnteredValue(event.target.value);
            return true
        }
        else {
            event.target.value = val.substring(0, (val.length - 1))
            return false
        }
    };
    let hasError = !valueIsValid && isTouched
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

export default useInput;