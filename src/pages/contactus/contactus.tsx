import React from 'react';
import { contactus } from '../../types';
import { useForm } from 'react-hook-form';
import '../../styles/formstyle.scss';

export const ContactUsForm = () => {
    const { register, errors, handleSubmit } = useForm<contactus>();
    const onSubmit = (data: contactus) => {
        console.log("Contact US Data is ", data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="field">
                <label htmlFor="email">Email: </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    ref={register({ required: true })}
                />
                {errors.email && errors.email.type === "required" && (
                    <div className="error">Your must enter your Email.</div>
                )}
            </div>
            <div className="field">
                <label htmlFor="subject">Subject</label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    ref={register({ required: true })}
                />
                {errors.subject && errors.subject.type === "required" && (
                    <div className="error">Enter Subject Line.</div>
                )}
            </div>
            <div className="field">
                <label htmlFor="message">Message</label>
                <input
                    type="textArea"
                    id="message"
                    name="message"
                    ref={register({ required: true })}
                />
                {errors.message && errors.message.type === "required" && (
                    <div className="error">Your must enter Message.</div>
                )}
            </div>
            <button type="submit">Submit</button>
        </form>
    );

};