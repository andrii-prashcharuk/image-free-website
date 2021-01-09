import React from 'react';
import { RouteComponentProps } from 'react-router';
import { debounce } from 'throttle-debounce';
import styled from '@emotion/styled';
import NavItem from '../NavItem';

const Container = styled.nav`
    width: 100%;
    max-width: 800px;

    @media only screen and (min-width: 1920px) {
        & {
            max-width: 1000px;
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

const StyledNavItem = styled(NavItem)`
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

type NavItemData = {
    id?: string,
    label?: string,
};

const NAV_ITEMS: NavItemData[] = [
    { id: 'intro', label: 'Introduction' },
    { id: 'about-me', label: 'About Me' },
    {},
    { id: 'about-project', label: 'About Project' },
    { id: 'contact', label: 'Contact' },
];

const NAV_ITEMS_REVERSED = [...NAV_ITEMS].reverse();

type MatchParams = Record<string, never>;

interface Props extends RouteComponentProps<MatchParams> {
    onClick?: (offsetTop: number) => any,
}

export default class Nav extends React.Component<Props> {
    handleScrollResize: () => void = debounce(
        300,
        () => {
            const { history } = this.props;

            history.push({
                hash: this.getActiveSection(),
            });
        },
    );

    componentDidMount(): void {
        window.addEventListener('scroll', this.handleScrollResize);
        window.addEventListener('resize', this.handleScrollResize);
    }

    componentWillUnmount(): void {
        window.removeEventListener('scroll', this.handleScrollResize);
        window.removeEventListener('resize', this.handleScrollResize);
    }

    getActiveSection: () => string = () => {
        const { scrollY } = window;
        let activeSection: HTMLElement | null = null;
        let activeSectionDiff: number | undefined;

        NAV_ITEMS_REVERSED.forEach((i: NavItemData) => {
            if (!i.id) {
                return;
            }
            const section = document.getElementById(i.id);

            if (!section) {
                return;
            }

            const diff = Math.abs(section.offsetTop - scrollY);

            if (!activeSection || activeSectionDiff === undefined || diff < activeSectionDiff) {
                activeSection = section;
                activeSectionDiff = diff;
            }
        });

        return (activeSection && (activeSection as HTMLElement).id) || '';
    };

    renderNav = (item: NavItemData): JSX.Element => {
        const { onClick, location } = this.props;

        return ((item.id && item.label) ? (
            <LI key={item.id}>
                <StyledNavItem
                    to={item.id}
                    onClick={onClick}
                    active={location.hash === `#${item.id}`}
                >
                    {item.label}
                </StyledNavItem>
            </LI>
        ) : (
            <LogoPlaceholder key="placeholder" />
        ));
    };

    render = (): JSX.Element => (
        <Container>
            <UL>
                {NAV_ITEMS.map(this.renderNav)}
            </UL>
        </Container>
    );
}
