import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
    // clear inputs
    const [formState, setFormState] = useState({ name: '', email:'', message: ''});
    // destructure from useState
    const [name, email, message] = formState;
    // create error message for invalid inputs
    const [errorMessage, setErrorMessage] = useState('')

    function handleChange(e) {
        // if(e.target.name === 'email')
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return(
        <section>
            <h1>Contact me</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        {/* onBlur- display message when field doesn't have focus */}
                        <label htmlFor='name'>Name:</label>
                        <input type='text' name='name' defaultValue={name} onBlur={handleChange} />
                    </div>
                    <div>
                        <label htmlFor='email'>Email Address:</label>
                        <input type='email' name='email' defaultValue={email} onBlur={handleChange} />
                    </div>
                    <div>
                        <label htmlFor='Message'>Message:</label>
                        <input type='message' name='message' defaultValue={message} onBlur={handleChange} />
                    </div>
                    {/* displays message when input is invalid */}
                    {errorMessage && (
                        <div>
                            <p className='error-text'>{errorMessage}</p>
                        </div>
                    )}
                    <button type='submit'>Submit</button>
                </form>

        </section>
    );
}

export default Contact;