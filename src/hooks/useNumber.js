import { useState } from "react";

const useNumber = (validator) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);
    const numExp = /^[0-9\b]+$/

    let valueIsValid = validator(enteredValue)
    
    const valueChangeHandler = event => {
        let val = event.target.value;
        valueIsValid = event.target.value === '' || numExp.test(event.target.value)
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

export default useNumber;