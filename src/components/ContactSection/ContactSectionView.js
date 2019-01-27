// @flow
import React from 'react';
import classNames from 'classnames';
import Section from '../Section';
import Alert from '../Alert';
import { LINKEDIN_LINK } from '../../constants';
import { isEmailValid } from '../../utils';
import {
    paper, mainBg, envelope, topClosed, topOpen,
} from './envelope';
import './ContactSection.scss';

type FieldName = 'name' | 'email' | 'message';

type Props = {
    isRequesting: boolean,
    isFailedRequest: boolean,
    sendMessage: (string, string, string) => *,
};

type State = {
    closeEnvelope: boolean,
    closePopup: boolean,
    notValidField: string | null,
    formData: {
        name: string,
        email: string,
        message: string,
    },
};

export default class ContactSection extends React.Component<Props, State> {
    state: State = {
        closeEnvelope: false,
        closePopup: false,
        notValidField: null,
        formData: {
            name: '',
            email: '',
            message: '',
        },
    };

    getNotValidField = () => {
        const { formData: { name, email, message } } = this.state;

        if (!name.trim()) {
            return 'name';
        }
        if (!isEmailValid(email)) {
            return 'email';
        }
        if (!message.trim()) {
            return 'message';
        }

        return null;
    };

    closeEnvelope = () => this.setState((state: State) => ({
        ...state,
        closeEnvelope: true,
        closePopup: false,
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
        const { formData: { name, email, message } } = this.state;
        const { sendMessage } = this.props;

        if (!notValidField) {
            sendMessage(name, email, message);
            this.closeEnvelope();
        } else {
            this.setState((state: State) => ({ ...state, notValidField }));
        }
    };

    handleClosePopup = () => this.setState((state: State) => ({
        ...state,
        closePopup: true,
    }));

    props: Props;

    render() {
        const { closeEnvelope, notValidField, closePopup } = this.state;
        const { isFailedRequest, isRequesting } = this.props;

        return (
            <Section
                id="contact"
                className={classNames('ContactSection', 'darkColorScheme', {
                    closed: closeEnvelope && !isFailedRequest,
                    success: !isRequesting && !isFailedRequest,
                    error: isFailedRequest,
                })}
            >
                <h3>Contact</h3>
                <div className="ContactSection-Content">
                    <div className="ContactSection-Success">
                        Your message has been successfully sent!
                    </div>
                    <div className="ContactSection-LetterWrap">
                        <div className="ContactSection-EnvelopeTop">
                            {topOpen}
                            {topClosed}
                        </div>
                        <div className="ContactSection-LetterPaper">
                            {paper}
                            <input
                                className={classNames({ 'form-error': notValidField === 'name' })}
                                type="text"
                                placeholder="Name"
                                onChange={e => this.handleFieldChange('name', e.target.value)}
                                maxLength="64"
                            />
                            <input
                                className={classNames({ 'form-error': notValidField === 'email' })}
                                type="email"
                                placeholder="Email"
                                onChange={e => this.handleFieldChange('email', e.target.value)}
                                maxLength="64"
                            />
                            <textarea
                                className={classNames({ 'form-error': notValidField === 'message' })}
                                placeholder="Message"
                                onChange={e => this.handleFieldChange('message', e.target.value)}
                                maxLength={3 * 1024}
                            />
                            <button type="button" onClick={this.handleSubmit}>Send</button>
                        </div>
                        {mainBg}
                        {envelope}
                    </div>
                </div>
                <Alert
                    onCloseRequest={this.handleClosePopup}
                    show={isFailedRequest && !closePopup}
                >
                    <div className="ContactSection-Error">
                        Sorry, an error has been occurred :(
                        <br />
                        Please message me in&nbsp;
                        <a href={LINKEDIN_LINK} target="_blank" rel="me noopener noreferrer">
                            LinkedIn
                        </a>
                        &nbsp;or try again later!
                    </div>
                </Alert>
            </Section>
        );
    }
}
