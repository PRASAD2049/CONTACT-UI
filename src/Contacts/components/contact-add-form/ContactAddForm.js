import './ContactAddForm.css';
import useInput from '../../../hooks/use-input';
import useHttp from '../../../hooks/use-http';
import { MenuItem, Select } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function ContactAddForm(props) {

    const navigate = useNavigate();
    const { isLoading, error, sendRequest: contactAddRequest } = useHttp();

    console.log('dafaultdata', props.defaultData);

    const {
        value: contactTypeValue,
        isValid: isContactTypeValid,
        hasError: hasContactTypeError,
        valueChangeHandler: contactTypeChangeHandler,
        inputBlurHandler: contactTypeBlurHandler,
        reset: contactTypeReset } = useInput();


    const {
        value: contactNameValue,
        isValid: isContactNameValid,
        hasError: hasContactNameError,
        valueChangeHandler: contactNameChangeHandler,
        inputBlurHandler: contactNameBlurHandler,
        reset: contactNameReset } = useInput((value) => value && value.trim() !== '');

    const {
        value: aliasValue,
        isValid: isAliasValid,
        hasError: hasAliasError,
        valueChangeHandler: aliasChangeHandler,
        inputBlurHandler: aliasBlurHandler,
        reset: aliasReset } = useInput((value) => value && value.trim() !== '');


    let isFormValid = false;

    if (isContactNameValid && isAliasValid) {
        isFormValid = true;
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const formData = {
            type: contactTypeValue || '',
            name: contactNameValue || '',
            alias: aliasValue || ''
        };

        contactAddRequest({
            url: 'contact',
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: formData
        }, handleReponse);


        contactNameReset();
        aliasReset();

    }

    const handleReponse = (data) => {

        const path = `/contact/summary`;

        navigate(path);

    }

    return (
        <form className='form' onSubmit={submitHandler}>

            <div className={(hasContactNameError) ? 'form-group form-error' : 'form-group'}>
                <label>Contact Type</label>
                <div>
                <Select className='w-100'
                    value={contactTypeValue}
                    label="Contact Type"
                    onChange={contactTypeChangeHandler}
                >
                    <MenuItem value={'Beneficiary'}>Beneficiary</MenuItem>
                    <MenuItem value={'Employee'}>Employee</MenuItem>
                </Select>
                </div>
            </div>
            <div className={(hasContactNameError) ? 'form-group form-error' : 'form-group'}>
                <label>Contact Name</label>
                <input type="text" id="contactName" value={contactNameValue} onChange={contactNameChangeHandler} onBlur={contactNameBlurHandler} className='form-control' />
                {hasContactNameError && <p>Name must not be empty.</p>}
            </div>
            <div className='form-group'>
                <label>Alias</label>
                <input type="text" id="alias" value={aliasValue} onChange={aliasChangeHandler} onBlur={aliasBlurHandler} className='form-control' />
                {hasAliasError && <p>Alias must not be empty.</p>}
            </div>

            <div>
                <button type="submit" disabled={!isFormValid}>Submit</button>
            </div>
        </form>
    )
}

export default ContactAddForm;