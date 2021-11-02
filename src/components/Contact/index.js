import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
    // clear inputs
    const [formState, setFormState] = useState({ name: '', email:'', message: ''});
    // destructure from useState
    const {name, email, message} = formState;
    // create error message for invalid inputs
    const [errorMessage, setErrorMessage] = useState('')

    function handleChange(e) {
        // check if email is valid 
        if(e.target.name === 'email') {
            const isValid = validateEmail(e.target.value)
            console.log(isValid)
            if (!isValid) {         // if email is false-not valid
                setErrorMessage('You email is invalid')
            } else {
                setErrorMessage('')
            }
        } else {
            // check to see if ther is an input for message and/or name
            if(!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`)
            } else {
                setErrorMessage('')
            }
        }

        if(!errorMessage){
            // ... is used to retain the other key-value pairs in the object 
            setFormState({...formState, [e.target.name]: e.target.value})
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return(
        <section className='contact'>
            <h1 className='proj-title'>Contact me</h1>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    {/* onBlur- display message when field doesn't have focus */}
                    <label className='form-label' htmlFor='name'>Name:</label>
                    <input className='form-control' type='text' name='name' defaultValue={name} onBlur={handleChange} />
                </div>
                <div className='mb-3'>
                    <label className='form-label' htmlFor='email'>Email Address:</label>
                    <input className='form-control' type='email' name='email' defaultValue={email} onBlur={handleChange} />
                </div>
                <div className='mb-3'>
                    <label className='form-label' htmlFor='Message'>Message:</label>
                    <textarea className='form-control' type='message' name='message' defaultValue={message} onBlur={handleChange} />
                </div>
                {/* displays message when input is invalid */}
                {errorMessage && (
                    <div>
                        <p className='error-text'>{errorMessage}</p>
                    </div>
                )}
                <button className='btn btn-primary' type='submit'>Submit</button>
            </form>

        </section>
    );
}

export default Contact;