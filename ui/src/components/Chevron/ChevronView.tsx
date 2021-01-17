import styled from '@emotion/styled';

const Chevron = styled.div`
    position: relative;
    width: 44px;
    height: 12px;

    &::before,
    &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        margin: auto;
        width: 24px;
        height: 2px;
        background: ${({ theme }) => theme.color.black};
        border-radius: 2px;
    }

    &::before {
        transform: rotate3d(0, 0, 1, 25deg) translate3d(-48%, 0, 0);
    }

    &::after {
        transform: rotate3d(0, 0, 1, -25deg) translate3d(48%, 0, 0);
    }

    @media only screen and (min-width: 1920px) {
        & {
            width: 58px;
            height: 16px;
        }

        &::before,
        &::after {
            width: 32px;
            height: 3px;
            border-radius: 3px;
        }
    }
`;

export default Chevron;
