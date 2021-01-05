// @flow
import React from 'react';
import type { Node } from 'react';
import './Section.scss';

type Props = {
    id: string,
    className?: string,
    children: Node,
};

const Section = ({ id, className = '', children }: Props): Node => (
    <section className={`Section ${className}`} id={id}>
        {children}
    </section>
);

export default Section;
