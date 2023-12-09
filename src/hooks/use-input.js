import { useReducer } from "react";

const initialValue = {
    value: '',
    isTouched: false
};

const inputReducer = (state, action) => {

    if(action.type === 'INPUT') {

        return {
            value: action.value,
            isTouched: state.isTouched
        }

    }

    if(action.type === 'BLUR') {

        return {
            value: state.value,
            isTouched: true
        }

    }

    if(action.type === 'RESET') {

        return {
            value: '',
            isTouched: false
        }

    }

    return initialValue;

}

const useInput = (validatorFn) => {

    const [inputState, dispatch] = useReducer(inputReducer, initialValue);

    // const [enteredValue, setEnteredValue] = useState();

    // const [isTouched, setIsTouched] = useState();

    const isValid = validatorFn && validatorFn(inputState.value);

    const hasError = !isValid && inputState.isTouched;

    const valueChangeHandler = (event) => {

        // setEnteredValue(event.target.value);

        dispatch({type: 'INPUT', value: event.target.value});

    }

    const inputBlurHandler = (event) => {

        // setIsTouched(true);

        dispatch({type: 'BLUR'});

    }

    const reset = (event) => {

        // setEnteredValue('');

        // setIsTouched(false);

        dispatch({type: 'RESET'});


    }

    return {
        value: inputState.value,
        isValid: isValid,
        hasError: hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset
    }

}


export default useInput;