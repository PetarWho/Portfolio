import React, { useState } from 'react';
import Dc from './discord.png';

const Contacts = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your logic for form submission here
        console.log('Form submitted:', formData);
        // You can also send the form data to your backend or any other services.
        // Example: sendFormDataToServer(formData);
    };

    return (
        <>
            
            <div className="contact-container bg-gray-900 text-white">
            <div className='contact-direct'>
                <span><img className='icon-small' src={Dc} alt="Discord: "></img> royvoytheboy</span>
            </div>
                <h3 className="page-heading">Contact Me</h3>
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

                    <button type="submit" className="submit-button">
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
};

export default Contacts;
