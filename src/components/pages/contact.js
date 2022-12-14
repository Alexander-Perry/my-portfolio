import React, {useState, useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// Contact Page render function
function Contact() {
    // Form Data State
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    // Response Message state (error message for missing fields)
    const [responseMessage, setResponseMessage] = useState();
    // State to enable the submit button only when valid data entered
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [inputData, setInputData] = useState({ name: '', email: '', message: '' });

    // Handle input changes to the form
    // update formState with relevant key/value pairs
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setInputData({ ...inputData, [name]: value });
    };

    const handleFocusChange = (event) => {
        const { name, value } = event.target;
        setFormState({ ...formState, [name]: value });
    }

    // Handle for the submit button
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        // read values of formState
        const { name, email, message } = formState;
        // return if missing data, otherwise setResponse message to 'Message Sent and clear the form. 
        // The button is disabled, however this adds a 2nd level of checks.
        if (!name || !email || !message) { return (setResponseMessage('Data Missing')) }
        return (
            setInputData({ name: '', email: '', message: '' }),
            setFormState({ name: '', email: '', message: '' }),
            setResponseMessage("Message Sent"),
            setButtonDisabled(true)
        );
    };

    // test that entered email is valid
    const validateEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    };

    // Update on changes to formState
    useEffect(() => {
        // validate the input fields and set ResponseMessage with the relevant error
        const { name, email, message } = formState;
        if (!name && !email && !message) {
            if (responseMessage === 'Message Sent') { return };
            return (setButtonDisabled(true), setResponseMessage(''));
        }
        if (!name) {
            return (setButtonDisabled(true), setResponseMessage('Name required'))
        };
        if (!email) {
            return (setButtonDisabled(true), setResponseMessage('Email required'))
        };
        if (email && !validateEmail(email)) {
            return (setButtonDisabled(true), setResponseMessage('Invalid Email'))
        };
        if (!message) {
            return (setButtonDisabled(true), setResponseMessage('Message required'))
        };
        setButtonDisabled(false)
        setResponseMessage()
    }, [formState]);

// Render the page
    return (
        <div className='centered'>
            <h2>Contact Me</h2>
            {/* Form Data */}
            <Form style={{ maxWidth: 600 }} >
                <Form.Group className='mb-3' controlId='formName'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type='input' name='name' onBlur={handleFocusChange} onChange={handleInputChange} value={inputData.name} />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formEmail'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' name='email'  onBlur={handleFocusChange} onChange={handleInputChange} value={inputData.email} />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formMessage'>
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} name='message' onBlur={handleFocusChange} onChange={handleInputChange} value={inputData.message} />
                </Form.Group>
                {/* element for response message */}
                <h5>{responseMessage }</h5>
                <Button name='submitButton' variant='primary' onClick={handleFormSubmit} disabled={buttonDisabled}>Submit</Button>
            </Form>
        </div>
    )
};
export default Contact;