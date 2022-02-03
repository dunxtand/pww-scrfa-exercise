import React from 'react';
import styled from 'styled-components';


type ButtonTypes = 'stroke' | 'solid';


const StyledButton = styled.a<{
    type: ButtonTypes;
    disabled: boolean;
}>`

`;


export default function Button (props: {
    type: ButtonTypes;
    href: string;
    disabled?: boolean;
    children: React.ReactNode;
}): JSX.Element {
    const {
        type = 'stroke',
        disabled = false,
        children
    } = props;

    return (
        <StyledButton
            type={type}
            disabled={disabled}
        >
            {children}
        </StyledButton>
    );
}
