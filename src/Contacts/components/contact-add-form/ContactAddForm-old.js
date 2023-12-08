import { useState } from 'react';
import './ContactAddForm.css';

function ContactAddFormOld() {

    const [formInput, setFormInput] = useState({
        contactName: '',
        alias: ''
    });
    const [formValid, setformValid] = useState({
        isContactNameValid: false,
        isAliasValid: false
    });

    const [formTouched, setformTouched] = useState({
        isContactNameTouched: false,
        isAliasTouched: false
    });

    const handleNameChange = (event) => {

        setFormInput((prevState) => {
            return {
                ...prevState,
                contactName: event.target.value
            }
        });

    }

    const handleAliasChange = (event) => {

        setFormInput((prevState) => {
            return {
                ...prevState,
                alias: event.target.value
            }
        });

    }

    const submitHandler = (event) => {
        event.preventDefault();

        setformTouched((prevState) => {

            return {
                isContactNameTouched: true,
                isAliasTouched: true
            }

        })

        if(formInput.contactName.trim() === '') {

            setformValid(prevState => {
                return {
                    ...prevState,
                    isContactNameValid: false
                }
            })
            return;
        }

        setformValid(prevState => {
            return {
                isContactNameValid: true,
                isAliasValid: true
            }
        });

        const formData = {
            contactName: formInput.contactName || '',
            alias: formInput.alias || ''
        };

        setFormInput({
            contactName: '',
            alias: ''
        })
    }

    return (
        <form className='form' onSubmit={submitHandler}>
            <div className={(formTouched.isContactNameTouched && !formValid.isContactNameValid) ? 'form-group form-error':'form-group'}>
                <label>Contact Name</label>
                <input type="text" id="contactName" value={formInput.contactName} onChange={handleNameChange} className='form-control' />
                { formTouched.isContactNameTouched && !formValid.isContactNameValid && <p>Name must not be empty.</p> }
            </div>
            <div className='form-group'>
                <label>Alias</label>
                <input type="text" id="alias" value={formInput.alias} onChange={handleAliasChange} className='form-control' />
            </div>

            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}

export default ContactAddForm;