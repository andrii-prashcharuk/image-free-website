/** @jsx jsx */
import React from 'react';
import styled from '@emotion/styled';
import {
    jsx,
    css,
    Theme,
    Interpolation,
} from '@emotion/react';

const Container = styled.div`
    width: 50%;
    max-width: 600px;
    background: ${({ theme }) => theme.color.white};
    overflow: hidden;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 22px 70px 4px rgba(0, 0, 0, 0.56);

    @media only screen and (min-width: 1920px) {
        & {
            flex: 0 0 48px;
            padding: 0 24px;
            line-height: 48px;
        }
    }
`;

const Header = styled.div`
    position: relative;
    flex: 0 0 32px;
    padding: 0 16px;
    line-height: 32px;
    text-align: center;
    background-image: linear-gradient(to bottom, #eeecee, #cfcdcf);

    @media only screen and (min-width: 1920px) {
        & {
            flex: 0 0 48px;
            padding: 0 24px;
            line-height: 48px;
        }
    }
`;

const HeaderButtons = styled.div`
    position: absolute;
    top: 0;
    width: 70px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media only screen and (min-width: 1920px) {
        & {
            width: 90px;
        }
    }
`;

const HeaderButton = styled.div`
    width: 16px;
    height: 16px;
    border: 1px solid #c1c0c1;
    border-radius: 8px;
    box-sizing: border-box;
    background: #d0d0d0;

    @media only screen and (min-width: 1920px) {
        & {
            width: 20px;
            height: 20px;
            border-radius: 10px;
        }
    }
`;

type Props = {
    className?: string,
    header: string | JSX.Element,
    children: JSX.Element | JSX.Element[],
    bodyCss?: Interpolation<Theme>,
};

const FakePopup = ({
    header,
    children,
    className,
    bodyCss,
}: Props): JSX.Element => {
    const popupBodyCss = css`
        flex: 1 1 100%;
        padding: 16px;
    `;

    return (
        <Container className={className}>
            <Header>
                <HeaderButtons>
                    <HeaderButton />
                    <HeaderButton />
                    <HeaderButton />
                </HeaderButtons>
                <span>{header}</span>
            </Header>
            <div css={[popupBodyCss, bodyCss]}>{children}</div>
        </Container>
    );
};

export default FakePopup;
