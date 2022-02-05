import React from 'react';
import styled, { css } from 'styled-components';
import { river, sky, steel } from '../style-variables';


type ButtonTypes = 'solid' | 'stroke' | 'invertedStroke';


const StyledButton = styled.a<{
    type: ButtonTypes;
    disabled: boolean;
    color: string;
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
                background-color: ${props.color};
                cursor: pointer;
                &:hover {
                    background-color: ${river};
                }
            `;

        } else if (props.type === 'stroke') {
            return css`
                color: ${props.color};
                border: 2px solid ${props.color};
                background-color: #fff;
                cursor: pointer;
                &:hover {
                    background-color: ${props.color};
                    color: #fff;
                }
            `;

        } else if (props.type === 'invertedStroke') {
            return css`
                color: #fff;
                border: 2px solid #fff;
                background-color: ${props.color};
                cursor: pointer;
                &:hover {
                    background-color: #fff;
                    color: ${sky};
                }
            `;
        }
    }}
`;


export default function Button (props: {
    type?: ButtonTypes;
    href: string;
    disabled?: boolean;
    color?: string;
    children: React.ReactNode;
}): JSX.Element {
    const {
        type = 'solid',
        href,
        disabled = false,
        color = sky,
        children
    } = props;

    return (
        <StyledButton
            href={href}
            type={type}
            disabled={disabled}
            color={color}
            className="px-5 py-4 font-semibold tracking-wider"
        >
            {children}
        </StyledButton>
    );
}
