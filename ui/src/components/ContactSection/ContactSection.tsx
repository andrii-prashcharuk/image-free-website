import React, { useState, JSX } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import styled from '@emotion/styled';
import { Section } from '../Section';
import { InvertedColorsContainer } from '../InvertedColorsContainer';
import { ContactForm } from './components/ContactForm';
import { Form } from './components/ContactForm/utils';
import { ErrorAlert } from './components/ErrorAlert';
import { Letter } from './components/Letter';
import { sendMessage } from '../../reducers/form/formActions';
import { getFormError, isFormRequesting } from '../../reducers/form/formSelectors';

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

export function ContactSection(): JSX.Element {
    const isFailedRequest = !!useSelector(getFormError);
    const isRequesting = useSelector(isFormRequesting);
    const dispatch = useDispatch();
    const [envelopeClosed, setEnvelopeClose] = useState(false);
    const [popupClosed, setPopupClose] = useState(false);
    const handleSubmit = ({ name, email, message }: Form): void => {
        setEnvelopeClose(true);
        setPopupClose(false);
        dispatch(sendMessage(name, email, message));
    };

    return (
        <StyledSection
            id="contact"
            className={classNames({
                closed: envelopeClosed && !isFailedRequest,
                success: envelopeClosed && !isRequesting && !isFailedRequest,
                error: isFailedRequest,
            })}
        >
            <StyledInvertedColorsContainer>
                <h3>Contact</h3>
                <Content>
                    <SuccessMessage>
                        Your message has been successfully sent!
                    </SuccessMessage>
                    <Letter>
                        <ContactForm onSubmit={handleSubmit} />
                    </Letter>
                </Content>
                <ErrorAlert
                    onCloseRequest={() => setPopupClose(true)}
                    show={isFailedRequest && !popupClosed}
                />
            </StyledInvertedColorsContainer>
        </StyledSection>
    );
}
