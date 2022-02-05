import React from 'react';
import styled, { css } from 'styled-components'
import { $lg, ocean, lake, river } from '../style-variables'


const Wrapper = styled.div`
    padding: 0;
    text-align: right;
    font-size: 18px;
    color: #fff;
    z-index: 1001;
    width: 65px;
    &:hover {
        .hamburger:before {
            transform: translateY(0);
        }
    }
`

const Hamburger = styled.a<{ open: boolean }>`
    height: 100%;
    cursor: pointer;
    z-index: 101;
    position: relative;
    right: 0;
    top: 0;
    background-color: ${river};
    overflow: hidden;
    padding: 12px;
    transition-duration: 0.15s;
    transition-property: opacity, filter, -webkit-filter;
    transition: all 0.2s ease-in-out;
    &:hover {
        background-color: ${props => props.open ? ocean : lake};
    }
    .box {
        display: inline-block;
        position: relative;
        margin: 0 auto;
        width: 30px;
        height: 26px;
        @media (min-width: ${$lg}) {
            width: 33px;
            height: 29px;
        }
    }
    .inner, .inner:after, .inner:before {
        display: block;
        top: 50%;
        width: 30px;
        height: 2px;
        background-color: #fff;
        border-radius: 4px;
        position: absolute;
        transition-property: transform;
        transition-duration: 0.15s;
        transition-timing-function: ease;
    }
    .inner {
        top: auto;
        bottom: 0;
        transition-duration: 0.15s;
        transition-delay: 0.15s;
        transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    .inner:before, .inner:after {
        content: "";
        display: block;
    }
    .inner:before {
        top: -10px;
    }
    .inner:after {
        top: -20px;
        transition: top 0.3s 0.3s cubic-bezier(0.33333, 0.66667, 0.66667, 1), opacity 0.1s linear;
    }
    ${props => props.open ? css`
        .inner {
            transform: translate3d(0, -10px, 0) rotate(-45deg);
            transition-delay: 0.32s;
            transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        }
        .inner:before {
            top: 0;
            transform: rotate(-90deg);
            transition: top 0.12s 0.18s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.15s 0.42s cubic-bezier(0.215, 0.61, 0.355, 1);
        }
        .inner:after {
            top: 0;
            opacity: 0;
            transition: top 0.3s cubic-bezier(0.33333, 0, 0.66667, 0.33333), opacity 0.1s 0.27s linear;
        }
        ` : ``
    }
`;


export default function MenuHamburger(props: {
    open: boolean
    toggleOpen: () => void;
}): JSX.Element | null {
    const {
        open,
        toggleOpen
    } = props;

    return (
        <Wrapper id="hamburgerWrapper">
            <Hamburger 
                className="hamburger flex flex-col justify-center"
                open={open}
                onClick={toggleOpen}
            >
                <span className="box">
                    <span className="inner"></span>
                </span>
                <div
                    className="uppercase mt-2 tracking-wider font-semibold"
                    style={{ fontSize: 12 }}
                >
                    {open ? 'Close' : 'Menu'}
                </div>
            </Hamburger>
        </Wrapper>
    )
}
