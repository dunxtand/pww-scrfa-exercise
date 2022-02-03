import React from 'react';
import styled from 'styled-components';


interface Props {
    href: string;
    children: React.ReactNode;
}


const StyledLink = styled.a`

`;


export default function Link(props: Props): JSX.Element {
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
