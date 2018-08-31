// @flow
import React from 'react';
import classNames from 'classnames';
import Section from '../Section';
import { LINKEDIN_LINK } from '../../constants';
import { paper, mainBg, envelope, topClosed, topOpen } from './envelope';
import './ContactSection.scss';

type State = {
    closed: boolean,
    error: boolean,
};

export default class ContactSection extends React.Component<*, State> {
    state: State = {
        closed: false,
        error: false,
    };
    close = () => this.setState({ closed: true, error: false });
    render = () => (
        <Section
            id="contact"
            className={classNames('ContactSection', 'darkColorScheme', {
                closed: this.state.closed,
                success: !this.state.error,
                error: this.state.error,
            })}
        >
            <h3>Contact</h3>
            <div className="ContactSection-Content">
                <div className="ContactSection-SubmitResult ContactSection-Success">
                    Your message has been successfully sent!
                </div>
                <div className="ContactSection-SubmitResult ContactSection-Error">
                    Sorry, an error has been occurred :(
                    <br />
                    Please message me in <a href={LINKEDIN_LINK} target="_blank" rel="noopener noreferrer">LinkedIn</a> or try again later!
                </div>
                <div className="ContactSection-LetterWrap">
                    <div className="ContactSection-EnvelopeTop">
                        {topOpen}
                        {topClosed}
                    </div>
                    <div className="ContactSection-LetterPaper">
                        {paper}
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <textarea placeholder="Message" />
                        <button onClick={this.close}>Send</button>
                    </div>
                    {mainBg}
                    {envelope}
                </div>
            </div>
        </Section>
    );
}
