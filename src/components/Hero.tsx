import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import HeroLink from './HeroLink';
import { hero, pages } from '../data';


const Wrapper = styled.div`
    padding-top: 100px;
    img {
        width: 100%;
    }
`;


export default function Hero(): JSX.Element {
    return (
        <Wrapper className="h-screen w-full relative">
            <div className="relative flex justify-center items-center">
                <div
                    style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: '50%',
                        transform: 'translateY(-50%)'
                    }}
                    className="relative flex justify-center items-center"
                >
                    <h1
                        dangerouslySetInnerHTML={{ __html: hero.text }}
                        className="text-white"
                    />
                </div>
                <img
                    src="/images/hero.jpg"
                    alt=""
                    className="object-cover"
                />
            </div>
            
            <div className="w-full flex justify-between mx-4">
                {hero.links.pages.map((pageId, index) => {
                    const page = pages.find(page => page.id === pageId);

                    return (
                        <HeroLink
                            key={index}
                            page={page}
                        />
                    );
                })}
            </div>
        </Wrapper>
    )
}
