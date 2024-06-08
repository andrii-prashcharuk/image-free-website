import React, { JSX } from 'react';
import classnames from 'classnames';
import styled from '@emotion/styled';
import { CodeBackground } from '../CodeBackground';
import { DisplayStand } from '../DisplayStand';
import { useIsMobileView } from '../../hooks';
import { useProgress, useIsVertical } from './hooks';
import { getProgressValue } from './utils';

const DisplayBackgroundContainer = styled.div`
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    transform: scale3d(0.35, 0.35, 1) translate3d(21.43 vw, - 190 px, 0);
    transform-origin: left center;
    transition: transform 300ms;

    @media only screen and (max-width: 600px) {
        & {
            transform-origin: bottom center;
        }
    }
`;

const StyledDisplayStand = styled(DisplayStand)`
    margin-top: -5px;

    .vertical &,
    .fullSize & {
        display: none;
    }
`;

const StyledCodeBackground = styled(CodeBackground)`
    position: relative;
    margin-top: -25px;
    margin-left: -25px;
    border: 25px solid ${({ theme }) => theme.color.black};
    border-bottom-width: 50px;
    border-radius: 40px;
    transition: border-radius 300ms;

    &::after {
        content: '';
        position: absolute;
        width: 24px;
        height: 24px;
        border-radius: 12px;
        background: ${({ theme }) => theme.color.darkGray};
        bottom: -37px;
        left: 0;
        right: 0;
        margin: auto;
    }

    .fullSize &::after {
        display: none;
    }
`;

export function DisplayBackground(): JSX.Element {
    const vertical = useIsVertical();
    const progress = useProgress();
    const isMobile = useIsMobileView();
    const scale = getProgressValue(0.35, 1, progress);
    const x = isMobile ? 0 : getProgressValue(21.43, 0, progress);
    const y = getProgressValue(-190, 0, progress);
    const transformValue = `scale3d(${scale}, ${scale}, 1) translate3d(${x}vw, ${y}px, 0)`;

    return (
        <DisplayBackgroundContainer
            className={classnames({ vertical, fullSize: progress === 1 })}
            style={{
                WebkitTransform: transformValue,
                msTransform: transformValue,
                transform: transformValue,
            }}
        >
            <StyledCodeBackground blur={progress > 0.75} />
            <StyledDisplayStand />
        </DisplayBackgroundContainer>
    );
}
