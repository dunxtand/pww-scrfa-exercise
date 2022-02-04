import React from 'react';
import styled from 'styled-components';
import { sky } from '../style-variables';


const StyledLink = styled.a`
    color: ${sky};
    text-decoration: underline;
    font-size: 20px;
    font-weight: 600;
    &:hover {
        text-decoration: none;
    }
`;


export default function Link(props: {
    href: string;
    children: React.ReactNode;
    className?: string;
}): JSX.Element {
    const {
        href,
        children,
        className = ''
    } = props;

    return (
        <StyledLink
            href={href}
            className={className}
        >
            {children}
        </StyledLink>
    );
}
