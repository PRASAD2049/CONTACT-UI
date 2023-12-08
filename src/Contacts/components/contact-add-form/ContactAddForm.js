import './ContactAddForm.css';
import useInput from '../../../hooks/use-input';
import useHttp from '../../../hooks/use-http';

function ContactAddForm(props) {

    const { isLoading, error, sendRequest: contactAddRequest } = useHttp();

    console.log('dafaultdata', props.defaultData);

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
            contactName: contactNameValue || '',
            alias: aliasValue || ''
        };



        contactAddRequest({
            url: 'http://localhost:3001/contact/add',
            method: 'POST',
            body: formData
        }, handleReponse);


        contactNameReset();
        aliasReset();

    }

    const handleReponse = (data) => {

        console.log('handleResp')

    }

    return (
        <form className='form' onSubmit={submitHandler}>
            <div className={(hasContactNameError) ? 'form-group form-error' : 'form-group'}>
                <label>Contact Name</label>
                <input type="text" id="contactName" value={contactNameValue} onChange={contactNameChangeHandler} onBlur={contactNameBlurHandler} className='form-control' />
                {hasContactNameError && <p>Name must not be empty.</p>}
            </div>
            <div className='form-group'>
                <label>Alias</label>
                <input type="text" id="alias" value={aliasValue} onChange={aliasChangeHandler} onBlur={aliasBlurHandler}  className='form-control' />
                {hasAliasError && <p>Alias must not be empty.</p>}
            </div>

            <div>
                <button type="submit" disabled={!isFormValid}>Submit</button>
            </div>
        </form>
    )
}

export default ContactAddForm;