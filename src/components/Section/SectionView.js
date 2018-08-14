// @flow
import React from 'react';
import type { Node } from 'react';
import './Section.scss';

type Props = {
    id: string,
    children: Node,
};

const Section = ({ id, children }: Props) => (
    <section className="Section" id={id}>
        {children}
    </section>
);

export default Section;
