import React from 'react';
import styled from 'styled-components';


const StyledLink = styled.a`

`;


export default function Link(props: {
    href: string;
    children: React.ReactNode;
}): JSX.Element {
    const {
        href,
        children
    } = props;

    return (
        <StyledLink
            href={href}
        >
            {children}
        </StyledLink>
    );
}
