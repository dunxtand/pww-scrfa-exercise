import { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import HeroLink from './HeroLink';
import SearchIcon from './SearchIcon';
import { useData } from '../hooks';
import { steel } from '../style-variables';


const Wrapper = styled.div`
    padding-top: 100px;
    img {
        width: 100%;
        min-height: 500px;
    }
    .hero-text {
        width: 725px;
        max-width: 90vw;
        margin: 0 auto;
        h1 {
            font-size: 30px;
        }
    }
`;

const LinkWrapper = styled.div`
    background-color: ${steel};
    height: 100%;
    width: 100%;
`;


export default function Hero(): JSX.Element {
    const [searchQuery, setSearchQuery] = useState('');

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
                    className="hero-text relative flex flex-col justify-center items-center mx-4"
                >
                    <h1
                        dangerouslySetInnerHTML={{ __html: heroData?.text ?? '' }}
                        className="text-white font-semibold text-center mb-8"
                    />
                    <form className="w-full flex justify-between">
                        <input
                            type="text"
                            placeholder="Search rfa.sc.gov"
                            value={searchQuery}
                            onChange={e => setSearchQuery(e.target.value)}
                            className="w-full mr-2 pl-4 text-black"
                        />
                        <Button
                            href={`/search?q=${searchQuery}`}
                            className="flex items-center"
                        >
                            <div className="mr-2">
                                Search
                            </div>
                            <SearchIcon
                                color="#fff"
                                size={20}
                            />
                        </Button>
                    </form>
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
