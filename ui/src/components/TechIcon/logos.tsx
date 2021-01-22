import { ComponentType } from 'react';
import {
    ReactIcon,
    EmotionIcon,
    ReduxIcon,
    HTML5Icon,
    CSS3Icon,
    TSIcon,
    WebpackIcon,
    DockerIcon,
    GitIcon,
    JestIcon,
} from './icons';

export type LogoDef = {
    title: string,
    Component: ComponentType,
};

export type LogoType =
    'react' |
    'redux' |
    'html5' |
    'css3' |
    'ts' |
    'webpack' |
    'docker' |
    'git' |
    'jest' |
    'emotion';

const LOGOS: Record<LogoType, LogoDef> = {
    react: {
        title: 'React',
        Component: ReactIcon,
    },
    emotion: {
        title: 'Emotion',
        Component: EmotionIcon,
    },
    redux: {
        title: 'Redux',
        Component: ReduxIcon,
    },
    html5: {
        title: 'HTML5',
        Component: HTML5Icon,
    },
    css3: {
        title: 'CSS3',
        Component: CSS3Icon,
    },
    ts: {
        title: 'TypeScript',
        Component: TSIcon,
    },
    webpack: {
        title: 'webpack',
        Component: WebpackIcon,
    },
    docker: {
        title: 'Docker',
        Component: DockerIcon,
    },
    git: {
        title: 'Git',
        Component: GitIcon,
    },
    jest: {
        title: 'Jest',
        Component: JestIcon,
    },
};

export default LOGOS;
