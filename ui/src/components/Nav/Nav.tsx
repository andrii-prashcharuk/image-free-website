import React, { JSX } from 'react';
import styled from '@emotion/styled';
import { NAV_ITEMS } from './utils';
import { useHistoryUpdate } from './hooks';
import { NavItem } from '../NavItem';

const Container = styled.nav`
    width: 100%;
    max-width: 800px;

    @media only screen and (min-width: 1920px) {
        & {
            max-width: 1000px;
        }
    }
`;

const UL = styled.ul`
    display: flex;
    justify-content: space-around;
    margin: 0;
    padding: 0;
    list-style: none;
    align-items: center;

    @media only screen and (max-width: 600px) {
        & {
            flex-direction: column;
        }
    }
`;

type Props = {
    onClick?: (offsetTop: number) => any,
}

export function Nav({ onClick }: Props): JSX.Element {
    useHistoryUpdate();

    return (
        <Container>
            <UL>
                {NAV_ITEMS.map(({ id, label }) => (
                    <NavItem
                        key={id}
                        id={id}
                        label={label}
                        onClick={onClick}
                    />
                ))}
            </UL>
        </Container>
    );
}
