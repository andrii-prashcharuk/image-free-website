import React, { JSX } from 'react';
import classNames from 'classnames';
import styled from '@emotion/styled';
import { StyledButton } from '../StyledButton';

const Wrapper = styled.div`
    opacity: 0;
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    display: flex;
    justify-content: center;
    transition: opacity 300ms, z-index 300ms;

    &.show {
        opacity: 1;
        z-index: 5;
    }
`;

const Container = styled.div`
    margin: auto;
    width: 440px;
    max-width: 95%;
    background: ${({ theme }) => theme.color.black};
    overflow: hidden;
    border-radius: 16px;
    padding: 12px;
    box-sizing: border-box;
    box-shadow: 0 22px 70px 4px rgba(0, 0, 0, 0.56);
    display: flex;
    flex-direction: column;
    
    button {
        align-self: flex-end;
    }
`;

const Overlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.2);
    z-index: -1;
    
    &:focus {
        outline: none;
    }
`;

type Props = {
    children: JSX.Element,
    show: boolean,
    onCloseRequest: () => any,
};

export function Alert({ children, onCloseRequest, show }: Props): JSX.Element {
    return (
        <Wrapper className={classNames({ show })}>
            <Container>
                <div>{children}</div>
                <StyledButton type="button" onClick={onCloseRequest}>OK</StyledButton>
            </Container>
            <Overlay
                role="button"
                onClick={show ? onCloseRequest : undefined}
                onKeyPress={show ? onCloseRequest : undefined}
                tabIndex={0}
                aria-label="Close"
            />
        </Wrapper>
    );
}
