import React from 'react';
import './Section.scss';

type Props = {
    id: string,
    className?: string,
    children: JSX.Element | JSX.Element[],
};

const Section = ({ id, className, children }: Props): JSX.Element => (
    <section className={`Section ${className}`} id={id}>
        {children}
    </section>
);

Section.defaultProps = {
    className: '',
};

export default Section;
