import { useState } from "react"

const useInput1 = (validatorFn) => {

    const [enteredValue, setEnteredValue] = useState();

    const [isTouched, setIsTouched] = useState();

    const isValid = validatorFn(enteredValue);

    const hasError = !isValid && isTouched;

    const valueChangeHandler = (event) => {

        setEnteredValue(event.target.value);

    }

    const inputBlurHandler = (event) => {

        setIsTouched(true);

    }

    const reset = (event) => {

        setEnteredValue('');

        setIsTouched(false);

    }

    return {
        value: enteredValue,
        isValid: isValid,
        hasError: hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset
    }

}


export default useInput;