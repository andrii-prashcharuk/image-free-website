// @flow
import React from 'react';
import classNames from 'classnames';
import Section from '../Section';
import { paper, mainBg, envelope, topClosed, topOpen } from './envelope';
import './ContactSection.scss';

type State = {
    closed: boolean,
};

export default class ContactSection extends React.Component<*, State> {
    state: State = {
        closed: false,
    };
    close = () => this.setState({ closed: true });
    render = () => (
        <Section id="contact" className={classNames('ContactSection', { closed: this.state.closed })}>
            <h3>Contact</h3>
            <div className="ContactSection-Content">
                <div className="ContactSection-Success">
                    Your message has been successfully send!
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
