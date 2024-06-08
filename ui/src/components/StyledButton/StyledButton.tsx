import styled from '@emotion/styled';

export const StyledButton = styled.button`
    background: ${({ theme }) => theme.color.blue};
    color: ${({ theme }) => theme.color.black};
    padding: 8px 16px;
    border-radius: 20px;
    border: none;
    outline: none;
    transition: background 300ms;
    cursor: pointer;

    &:hover,
    &:focus {
        background: ${({ theme }) => theme.color.lightBlue};
    }

    @media only screen and (min-width: 1920px) {
        & {
            padding: 12px 24px;
            border-radius: 30px;
        }
    }
`;
