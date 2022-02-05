import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import HeroLink from './HeroLink';
import { useData } from '../hooks';
import { steel } from '../style-variables';


const Wrapper = styled.div`
    padding-top: 100px;
    img {
        width: 100%;
    }
    h1 {
        font-size: 30px;
        max-width: 725px;
        margin: 0 auto;
    }
`;

const LinkWrapper = styled.div`
    background-color: ${steel};
    height: 100%;
    width: 100%;
`;


export default function Hero(): JSX.Element {
    const heroData = useData('hero');
    const pages = useData('pages');

    return (
        <Wrapper className="w-full relative">
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
                        dangerouslySetInnerHTML={{ __html: heroData?.text ?? '' }}
                        className="text-white font-bold text-center"
                    />
                </div>
                <img
                    src="/images/hero.jpg"
                    alt=""
                    className="object-cover"
                />
            </div>
            
            <LinkWrapper className="w-full flex flex-wrap justify-center lg:justify-between py-12 px-10 sm:px-16 md:px-20 lg:px-32">
                {heroData?.links?.pages?.map((pageId: number, index: number) => {
                    const page: Page = pages?.find((p: Page) => p.id === pageId);

                    return (
                        <div
                            key={index}
                            className="w-full md:w-1/2 lg:w-1/4 p-2 lg:-mx-8"
                        >
                            <HeroLink
                                key={index}
                                page={page}
                                className="mx-auto"
                            />
                        </div>
                    );
                })}
            </LinkWrapper>
        </Wrapper>
    )
}
