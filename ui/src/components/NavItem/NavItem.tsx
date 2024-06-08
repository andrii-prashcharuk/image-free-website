import React, { JSX } from 'react';
import { useLocation } from 'react-router';
import styled from '@emotion/styled';
import { NavLink } from '../NavLink';

const StyledNavLink = styled(NavLink)`
    display: block;
    padding: 4px 12px;
    border-radius: 16px;

    @media only screen and (max-width: 600px) {
        & {
            padding: 18px 0;
            border-radius: 0;
            font-size: 24px;
        }
    }

    @media only screen and (min-width: 1920px) {
        & {
            padding: 6px 16px;
            border-radius: 22px;
        }
    }
`;

const LogoPlaceholder = styled.li`
    width: 152px;

    @media only screen and (max-width: 600px) {
        & {
            display: none;
        }
    }
`;

const LI = styled.li`
    @media only screen and (max-width: 600px) {
        width: 100%;
        text-align: center;
    }
`;

type Props = {
    id: string,
    label?: string,
    onClick?: (offsetTop: number) => any,
};

export function NavItem({ onClick, id, label }: Props): JSX.Element {
    const location = useLocation();

    return (label ? (
        <LI key={id}>
            <StyledNavLink
                to={id}
                onClick={onClick}
                active={location.hash === `#${id}`}
            >
                {label}
            </StyledNavLink>
        </LI>
    ) : (
        <LogoPlaceholder key="placeholder" />
    ));
}
