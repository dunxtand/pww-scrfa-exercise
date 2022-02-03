import React from 'react';
import styled from 'styled-components';


type ButtonTypes = 'stroke' | 'solid';

interface Props {
    type: ButtonTypes;
    disabled?: boolean;
    children: React.ReactNode;
}


const StyledButton = styled.a<{
    type: ButtonTypes;
    disabled: boolean;
}>`

`;


export default function Button (props: Props): JSX.Element {
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
