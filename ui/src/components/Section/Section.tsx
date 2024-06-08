import styled from '@emotion/styled';

export const Section = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    min-width: 320px;
    min-height: 568px;
    padding: 42px 24px;
    box-sizing: border-box;

    h3 {
        margin-top: 0;
        font-size: 36px;
        margin-bottom: 24px;
    }

    @media only screen and (max-width: 600px) {
        & h3 {
            font-size: 28px;
            margin-bottom: 18px;
        }
    }

    @media only screen and (min-width: 1920px) {
        & h3 {
            font-size: 48px;
            margin-bottom: 36px;
        }
    }
`;
