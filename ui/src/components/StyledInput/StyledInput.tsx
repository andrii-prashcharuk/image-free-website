import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const error = keyframes`
      0%, 100% {
          transform: translate3d(0, 0, 0);
      }
      10%, 30%, 50%, 70%, 90% {
          transform: translate3d(-6px, 0, 0);
      }
      20%, 40%, 60%, 80% {
          transform: translate3d(6px, 0, 0);
      }
`;

export const BaseInput = styled.input`
    margin-bottom: 24px;
    color: ${({ theme }) => theme.color.black};
    outline: none;
    padding: 8px;
    border: 2px solid ${({ theme }) => theme.color.black};
    transition: border-color 300ms;
    border-radius: 0;
    background: transparent;

    &.form-error {
        border-color: ${({ theme }) => theme.color.brightRed};
        -webkit-animation: ${error} .8s ease;
        -moz-animation: ${error} .8s ease;
        animation: ${error} .8s ease;
    }

    &:focus {
        border-color: ${({ theme }) => theme.color.blue};
    }

    @media only screen and (min-width: 1920px) {
        & {
            padding: 12px;
            margin-bottom: 32px;
        }
    }
`;

export const StyledInput = styled(BaseInput)`
    border-top: none;
    border-left: none;
    border-right: none;
`;
