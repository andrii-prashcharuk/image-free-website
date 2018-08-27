// @flow
import React from 'react';
import Section from '../Section';
import { paper } from './envelope';
import './ContactSection.scss';

const ContactSection = () => (
    <Section id="contact" className="ContactSection">
        <h3>Contact</h3>
        <div className="ContactSection-Content">
            <div className="ContactSection-Success">
                Your message has been successfully send!
            </div>
            <div className="ContactSection-LetterWrap">
                <div className="ContactSection-LetterTop" />
                <div className="ContactSection-LetterPaper">
                    {paper}
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <textarea placeholder="Message" />
                    <button>Send</button>
                </div>
                <div className="ContactSection-LetterBottom" />
            </div>
        </div>
    </Section>
);

export default ContactSection;
