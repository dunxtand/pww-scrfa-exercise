import React from 'react';
import styled, { css } from 'styled-components';
import { lake, river, sky, steel } from '../style-variables';


type ButtonTypes = 'solid' | 'stroke';


const StyledButton = styled.a<{
    type: ButtonTypes;
    disabled: boolean;
}>`
    transition: all .3s;
    text-transform: uppercase;
    ${props => {
        if (props.disabled) {
            return css`
                color: #fff;
                background-color: ${steel};
                cursor: not-allowed;
                pointer-events: none;
            `;

        } else if (props.type === 'solid') {
            return css`
                color: #fff;
                background-color: ${sky};
                cursor: pointer;
                &:hover {
                    background-color: ${river};
                }
            `;

        } else if (props.type === 'stroke') {
            return css`
                color: ${sky};
                border: 2px solid ${sky};
                background-color: #fff;
                cursor: pointer;
                &:hover {
                    background-color: ${sky};
                    color: #fff;
                }
            `;
        }
    }}
`;


export default function Button (props: {
    type?: ButtonTypes;
    href: string;
    disabled?: boolean;
    children: React.ReactNode;
}): JSX.Element {
    const {
        type = 'solid',
        disabled = false,
        children
    } = props;

    return (
        <StyledButton
            type={type}
            disabled={disabled}
            className="px-5 py-4 font-semibold tracking-wider"
        >
            {children}
        </StyledButton>
    );
}
