import { useReducer, useState } from 'react';
import './Login.css';
import { authActions } from '../../../store/slices/auth-slice';
import { useDispatch } from 'react-redux';

const emailReducer = (state,action) => {

    
    if(action.type === 'USER_INPUT') {
        return {
            value: action.value,
            isValid: action.value.includes('@')
        }
    }

    if(action.type === 'USER_BLUR') {

        return {
            value: state.value,
            isValid: state.value.includes('@')
        }

    }

    return {value: '', isValid: false}

}

const passwordReducer = (state,action) => {

    
    if(action.type === 'USER_INPUT') {
        return {
            value: action.value,
            isValid: action.value.trim().length > 6
        }
    }

    if(action.type === 'USER_BLUR') {

        return {
            value: state.value,
            isValid: state.value.trim().length > 6
        }

    }

    return {value: '', isValid: false}

}

function Login(props) {

    const [emailState, dispatchEmail] = useReducer(emailReducer, {value: '', isValid: false})
    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {value: '', isValid: false})

    const [formIsValid, setFormIsValid] = useState(false);

  const dispatch = useDispatch();

    const emailChangeHanlder = (event) => {
        dispatchEmail({type: 'USER_INPUT', value: event.target.value})

        setFormIsValid(
            event.target.value.includes('@') && passwordState.isValid  
        )
    }

    const emailBlurHandler = () => {
        dispatchEmail({type: 'USER_BLUR'});

        setFormIsValid(
            emailState.isValid && passwordState.isValid
        )

    }

    const passwordChangeHanlder = (event) => {
        dispatchPassword({type: 'USER_INPUT', value: event.target.value});

        setFormIsValid(
            emailState.isValid && event.target.value.trim().length > 6  
        )
    }

    const passwordBlurHandler = () => {
        dispatchPassword({type: 'USER_BLUR'});

        setFormIsValid(
            emailState.isValid && passwordState.isValid  
        )

    }

    const loginHandler = () => {
        // props.onLogin();

      dispatch(authActions.login())

    }

    return (
        <form className="login-form">
            <div className='form-group'>
                <label>Email</label>
                <input type="email" id="email" className='form-control' onChange={emailChangeHanlder} onBlur={emailBlurHandler} />
            
            </div>
            <div className='form-group'>
                <label>Alias</label>
                <input type="text" id="alias" className='form-control' onChange={passwordChangeHanlder} onBlur={passwordBlurHandler} />
            </div>

            <div>
                 <button type="button" onClick={loginHandler} disabled={!formIsValid}>Login {formIsValid}</button>
            </div>
        </form>
    )

}

export default Login;