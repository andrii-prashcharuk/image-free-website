import styled from '@emotion/styled';
import { Theme } from '@emotion/react';
import { Link } from 'react-router-dom';

export const StyledA = styled.a`
    transition: color 300ms;

    &, &:visited {
        color: ${({ theme }: { theme: Theme }) => theme.color.red};
    }
    &:active {
        color: ${({ theme }: { theme: Theme }) => theme.color.brightRed};
    }
`;

export const StyledLink = StyledA.withComponent(Link);
