import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import MenuHamburger from './MenuHamburger';
import SearchIcon from './SearchIcon';
import Button from './Button';
import { useData } from '../hooks';
import { ocean, stone, river, $lg } from '../style-variables';


export const DK_MENU_HIDDEN_CLASS = 'fold-up';

const FOLD_DURATION = 400;
const MENU_DURATION = 300;


function getScrollPos () {
  return Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
}

const DELTA = 50;


const Wrapper = styled.header<{
    color: string;
    bgColor: string;
    atTop: boolean;
}>`
  z-index: 100;
  color: ${props => props.color};
  background-color: ${props => props.bgColor};
  transition: transform ${FOLD_DURATION}ms, box-shadow .2s, background-color ${MENU_DURATION}ms, color ${MENU_DURATION}ms;
  svg path {
    transition: fill ${MENU_DURATION}ms, stroke ${MENU_DURATION}ms;
  }
  &.${DK_MENU_HIDDEN_CLASS} {
    @media (min-width: ${$lg}) {
      transform: translateY(-105%); // 105% to hide drop shadow
    }
  }
`;


const LogoImage = styled.img`
    width: 90px;
    height: 90px;
`;


const SearchButton = styled.a<{
  searchOpen: boolean;
}>`
  border: 2px solid ${river};
  background-color: ${props => props.searchOpen ? river : '#fff'};
`;


const SearchBar = styled.form`
  background-color: ${river};
  width: 100%;
  color: #fff;
  position: absolute;
  top: 53px;
`;


export default function DesktopMenu(props: {
  searchOpen: boolean;
  setSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}): JSX.Element {
  const {
    searchOpen,
    setSearchOpen,
    menuOpen,
    setMenuOpen
  } = props;

  const headerRef = useRef(null);

  const [show, setShow] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [atTop, setAtTop] = useState(true);

  const headerData = useData('header');
  const pages = useData('pages');

  const [searchQuery, setSearchQuery] = useState('');

  // initial load: set scroll listener
  useEffect(() => {
    setAtTop(document.documentElement.scrollTop === 0);

    function handleScroll () {
      setPrevScrollPos( getScrollPos() );
      setAtTop(document.documentElement.scrollTop === 0);
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  // every time a user scrolls
  useEffect(() => {
    const st = getScrollPos();

    if (Math.abs(lastScrollTop - st) <= DELTA) {
      return;
    }

    const isAtTop = prevScrollPos < 175 || prevScrollPos === 0;
    // @ts-ignore
    const isScrollingDown = st > lastScrollTop && st > (headerRef.current?.clientHeight ?? 0);

    setShow(isAtTop || !isScrollingDown);
    setLastScrollTop(st);
  }, [prevScrollPos]);

  useEffect(() => {
    if (!show) {
      setSearchOpen(false);
      setMenuOpen(false);
    }
  }, [show]);


  return (
    <Wrapper
      color={'#fff'}
      bgColor={'#fff'}
      atTop={atTop}
      className={`fixed top-0 w-full shadow-md ${(!atTop && !searchOpen && !menuOpen) ? 'shadow-md' : ''} ${!show ? DK_MENU_HIDDEN_CLASS : ''}`}
      ref={headerRef}
    >
      <div className="w-full flex justify-between items-center">
        <div className="flex">
            <MenuHamburger
                open={menuOpen}
                toggleOpen={() => {
                  setMenuOpen(!menuOpen);
                  if (searchOpen) {
                    setSearchOpen(false);
                  }
                }}
            />

            <a
                href="/"
                className="flex"
                onClick={() => {
                    setSearchOpen(false);
                    setMenuOpen(false);
                }}
            >
                <LogoImage
                    src="/images/RFA Logo Final.png"
                    alt="SCRFA seal"
                    className="m-4"
                />
                <div className="flex flex-col justify-center text-black">
                    <h2
                      dangerouslySetInnerHTML={{ __html: headerData?.title ?? '' }}
                      className="font-bold uppercase leading-tight"
                      style={{
                        color: ocean,
                        fontSize: 20
                      }}
                    />
                    <span
                        className="italic font-semibold"
                        dangerouslySetInnerHTML={{ __html: headerData?.subtitle ?? '' }}
                        style={{
                          color: stone,
                          fontSize: 15
                        }}
                    />
                </div>
            </a>
        </div>

        <div className="relative flex items-center mx-4">
            <div className="hidden lg:flex mr-4">
                {headerData?.menu?.pages.map((pageId: number, index: number) => {
                    const page: Page = pages?.find((p: Page) => p.id === pageId);

                    return !page ? null : (
                        <a
                            key={index}
                            href={page?.link}
                            className="mr-6 uppercase"
                            style={{ color: ocean }}
                        >
                            {page?.title}
                        </a>
                    );
                })}
            </div>

            <SearchButton
                href="#"
                onClick={e => {
                    e.preventDefault();
                    setSearchOpen(!searchOpen);
                    if (menuOpen) {
                      setMenuOpen(false);
                    }
                }}
                className="p-3"
                searchOpen={searchOpen}
            >
                <SearchIcon color={searchOpen ? '#fff' : river}/>
            </SearchButton>

            {searchOpen && (
              <SearchBar className="p-6 flex justify-between">
                <input
                  type="text"
                  placeholder="Enter search term"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full mr-2 pl-4 text-black"
                />
                <Button
                  href={`/search?q=${searchQuery}`}
                  type="invertedStroke"
                  color={river}
                >
                  Search
                </Button>
              </SearchBar>
            )}
        </div>
      </div>
    </Wrapper>
  );
}
