import React, { useState, useEffect } from 'react';
import Dc from './discord.png';

const Contacts = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errorMessage, setErrorMessage] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState('');
    const [showSnackbar, setShowSnackbar] = useState(false);
    const [snackbarText, setSnackbarText] = useState('');

    useEffect(() => {
        if (showSnackbar) {
            const timeoutId = setTimeout(() => {
                setShowSnackbar(false);
                setSnackbarText('');
            }, 3000);

            return () => clearTimeout(timeoutId);
        }
    }, [showSnackbar]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.message.length < 30) {
            setErrorMessage('Message must be at least 30 characters long.');
            return;
        }

        setSubmitting(true);

        try {
            const response = await fetch('https://formspree.io/f/mjvnywqj', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmissionStatus('success');
                setErrorMessage('');
                setSnackbarText('Message sent!');
                setShowSnackbar(true);
                setFormData({
                    name: '',
                    email: '',
                    message: '',
                });
            } else {
                setSubmissionStatus('error');
                setErrorMessage('Error submitting the form. Please try again.');
            }
        } catch (error) {
            setSubmissionStatus('error');
            setErrorMessage('Error submitting the form. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    // const handleTestSnackbar = () => {
    //     setSnackbarText('Message sent!');
    //     setShowSnackbar(true);
    // };

    return (
        <>
            <div id="snackbar" className={showSnackbar ? 'show' : ''}>
                {snackbarText}
            </div>
            <div className="contact-container bg-gray-900 text-white">
                <div className='contact-direct'>
                    <span><img className='icon-small' src={Dc} alt="Discord: "></img> royvoytheboy</span>
                </div>
                <h3 className="page-heading">Contact Me</h3>
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                {submitting && <p>Submitting...</p>}
                {submissionStatus === 'error' && <p style={{ color: 'red' }}>Mail is full! Try contacting me via Discord.</p>}

                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name" className="label">
                            Name:
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="input"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email" className="label">
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="input"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message" className="label">
                            Message:
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="textarea"
                        />
                    </div>

                    <button type="submit" className="submit-button" disabled={submitting}>
                        {submitting ? 'Submitting...' : 'Submit'}
                    </button>
                </form>
                {/* <button onClick={handleTestSnackbar}>Test Snackbar</button> */}
            </div>
        </>
    );
};

export default Contacts;
