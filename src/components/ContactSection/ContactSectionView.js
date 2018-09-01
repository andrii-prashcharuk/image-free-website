// @flow
import React from 'react';
import classNames from 'classnames';
import Section from '../Section';
import { LINKEDIN_LINK } from '../../constants';
import { emailValid } from '../../utils';
import { paper, mainBg, envelope, topClosed, topOpen } from './envelope';
import './ContactSection.scss';

type FieldName = 'name' | 'email' | 'message';

type Props = {
    isRequesting: boolean,
    isFailedRequest: boolean,
    sendMessage: (string, string, string) => *,
};

type State = {
    closed: boolean,
    notValidField: string | null,
    formData: {
        name: string,
        email: string,
        message: string,
    },
};

export default class ContactSection extends React.Component<Props, State> {
    state: State = {
        closed: false,
        notValidField: null,
        formData: {
            name: '',
            email: '',
            message: '',
        },
    };
    getNotValidField = () => {
        const { name, email, message } = this.state.formData;

        if (!name.trim()) {
            return 'name';
        }
        if (!emailValid(email)) {
            return 'email';
        }
        if (!message.trim()) {
            return 'message';
        }

        return null;
    };
    props: Props;
    close = () => this.setState((state: State) => ({
        ...state,
        closed: true,
    }));
    handleFieldChange = (name: FieldName, value: string) => this.setState((state: State) => ({
        ...state,
        notValidField: null,
        formData: {
            ...state.formData,
            [name]: value,
        },
    }));
    handleSubmit = () => {
        const notValidField = this.getNotValidField();
        const { name, email, message } = this.state.formData;

        if (!notValidField) {
            this.props.sendMessage(name, email, message);
            this.close();
        } else {
            this.setState((state: State) => ({ ...state, notValidField }));
        }
    };
    render = () => (
        <Section
            id="contact"
            className={classNames('ContactSection', 'darkColorScheme', {
                closed: this.state.closed,
                success: !this.props.isRequesting && !this.props.isFailedRequest,
                error: this.props.isFailedRequest,
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
                        <input
                            className={classNames({ 'form-error': this.state.notValidField === 'name' })}
                            type="text"
                            placeholder="Name"
                            onChange={e => this.handleFieldChange('name', e.target.value)}
                        />
                        <input
                            className={classNames({ 'form-error': this.state.notValidField === 'email' })}
                            type="email"
                            placeholder="Email"
                            onChange={e => this.handleFieldChange('email', e.target.value)}
                        />
                        <textarea
                            className={classNames({ 'form-error': this.state.notValidField === 'message' })}
                            placeholder="Message"
                            onChange={e => this.handleFieldChange('message', e.target.value)}
                        />
                        <button onClick={this.handleSubmit}>Send</button>
                    </div>
                    {mainBg}
                    {envelope}
                </div>
            </div>
        </Section>
    );
}
