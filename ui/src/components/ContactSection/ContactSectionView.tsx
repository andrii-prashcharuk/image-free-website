import React from 'react';
import type { ChangeEvent } from 'react';
import classNames from 'classnames';
import styled from '@emotion/styled';
import Section from '../Section';
import InvertedColorsContainer from '../InvertedColorsContainer';
import StyledInput from '../StyledInput';
import StyledTextArea from '../StyledTextArea';
import StyledButton from '../StyledButton';
import { StyledA } from '../StyledA';
import Alert from '../Alert';
import { LINKEDIN_LINK } from '../../constants';
import { isEmailValid } from '../../utils';
import {
    Paper,
    MainBg,
    Envelope,
    TopClosed,
    TopOpen,
    envelopeTransformCSS,
} from './envelope';

const StyledSection = styled(Section)`
    z-index: 1;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    background: ${({ theme }) => theme.color.black};

    h3 {
        text-align: center;
    }

    &.closed {
        &.success {
            .ContactSection-Success {
                opacity: 1;
            }
        }
    }
`;

const StyledInvertedColorsContainer = styled(InvertedColorsContainer)`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

const Content = styled.div`
    position: relative;
    display: flex;
    flex: 1 1 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

const SuccessMessage = styled.div`
    opacity: 0;
    margin-bottom: 30%;
    padding: 0 12px;
    font-size: 24px;
    transition: opacity 500ms ease-in;
    transition-delay: 2s;
    text-align: center;

    .success & {
        opacity: 1;
    }

    @media only screen and (max-width: 600px) {
        & {
            margin-bottom: 60%;
        }
    }
`;

const LetterWrap = styled.div`
    position: absolute;
    top: 0;
    height: 100%;
    width: 600px;
    max-width: 85%;
    padding-bottom: 42px;
    box-sizing: border-box;
    transition: transform 1s;
    transition-delay: 2s;
    overflow: hidden;

    .closed & {
        transform: scale3d(0.3, 0.3, 1);
    }

    @media only screen and (min-width: 1920px) {
        & {
            width: 800px;
        }
    }
`;

const EnvelopeTop = styled.div`
    position: absolute;
    width: 100%;
    max-height: 30%;
    top: 25%;
    z-index: 2;
    ${envelopeTransformCSS}
`;

const LetterPaper = styled.div`
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    padding: 24px;
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 2;
    transition: transform 600ms ease-in;
    transition-delay: 300ms;
    
    .closed & {
        transform: translate3d(0, calc(100% + 50px), 0);
    }

    button {
        flex: none;
        align-self: flex-end;
    }

    input {
        width: calc(72.3% - 24px);
    }

    textarea {
        flex: 1 1 100%;
    }

    @media only screen and (max-width: 600px) {
        & {
            transition: transform 450ms ease-in;
            transition-delay: 250ms;
        }
    }

    @media only screen and (min-width: 1920px) {
        & {
            padding: 32px;
        }
    }
`;

const ErrorMessage = styled.div`
    text-align: center;
    font-size: 24px;

    &::before {
        content: '✖ ';
        color: ${({ theme }) => theme.color.brightRed};
    }

    @media only screen and (max-width: 600px) {
        &::before  {
            content: '✕ ';
        }
    }
`;

type FieldName = 'name' | 'email' | 'message';

export type Props = {
    isRequesting: boolean,
    isFailedRequest: boolean,
    sendMessage: (name: string, email: string, message: string) => void,
};

type State = {
    closeEnvelope: boolean,
    closePopup: boolean,
    notValidField: string | null,
    formData: Record<FieldName, string>,
};

export default class ContactSection extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            closeEnvelope: false,
            closePopup: false,
            notValidField: null,
            formData: {
                name: '',
                email: '',
                message: '',
            },
        };
    }

    getNotValidField = (): FieldName | null => {
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

    closeEnvelope = (): void => this.setState((state: State) => ({
        ...state,
        closeEnvelope: true,
        closePopup: false,
    }));

    handleFieldChange = (name: FieldName) => (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ): void => {
        const { value } = e.target;

        this.setState((state: State) => {
            const newState = {
                ...state,
                notValidField: null,
            };

            newState.formData[name] = value;

            return newState;
        });
    }

    handleSubmit = (): void => {
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

    handleClosePopup: () => void = () => this.setState((state: State) => ({
        ...state,
        closePopup: true,
    }));

    render(): JSX.Element {
        const { closeEnvelope, notValidField, closePopup } = this.state;
        const { isFailedRequest, isRequesting } = this.props;

        return (
            <StyledSection
                id="contact"
                className={classNames({
                    closed: closeEnvelope && !isFailedRequest,
                    success: closeEnvelope && !isRequesting && !isFailedRequest,
                    error: isFailedRequest,
                })}
            >
                <StyledInvertedColorsContainer>
                    <h3>Contact</h3>
                    <Content>
                        <SuccessMessage>
                            Your message has been successfully sent!
                        </SuccessMessage>
                        <LetterWrap>
                            <EnvelopeTop>
                                <TopOpen />
                                <TopClosed />
                            </EnvelopeTop>
                            <LetterPaper>
                                <Paper />
                                <StyledInput
                                    className={classNames({ 'form-error': notValidField === 'name' })}
                                    type="text"
                                    placeholder="Name"
                                    aria-label="Name"
                                    onChange={this.handleFieldChange('name')}
                                    maxLength={64}
                                />
                                <StyledInput
                                    className={classNames({ 'form-error': notValidField === 'email' })}
                                    type="email"
                                    placeholder="Email"
                                    aria-label="Email"
                                    onChange={this.handleFieldChange('email')}
                                    maxLength={64}
                                />
                                <StyledTextArea
                                    className={classNames({ 'form-error': notValidField === 'message' })}
                                    placeholder="Message"
                                    onChange={this.handleFieldChange('message')}
                                    maxLength={3 * 1024}
                                />
                                <StyledButton type="button" onClick={this.handleSubmit}>Send</StyledButton>
                            </LetterPaper>
                            <MainBg />
                            <Envelope />
                        </LetterWrap>
                    </Content>
                    <Alert
                        onCloseRequest={this.handleClosePopup}
                        show={isFailedRequest && !closePopup}
                    >
                        <ErrorMessage>
                            Sorry, an error has been occurred :(
                            <br />
                            Please message me in&nbsp;
                            <StyledA href={LINKEDIN_LINK} target="_blank" rel="me noopener noreferrer">
                                LinkedIn
                            </StyledA>
                            &nbsp;or try again later!
                        </ErrorMessage>
                    </Alert>
                </StyledInvertedColorsContainer>
            </StyledSection>
        );
    }
}
