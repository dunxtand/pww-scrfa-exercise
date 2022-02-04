import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import MenuHamburger from './MenuHamburger';
import { useData } from '../hooks';
import { $md, $lg } from '../style-variables';


export const DK_MENU_ID = 'dk-menu';
export const DK_MENU_HIDDEN_CLASS = 'fold-up';

export const FOLD_DURATION = 400;
export const MENU_DURATION = 300;


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


const SearchButton = styled.a<{
  color: string;
}>`
  color: ${props => props.color};
  transition: color ${MENU_DURATION}ms;
  width: 60px;
  @media (min-width: ${$md}) {
    width: 75px;
  }
`;


const MenuButton = styled.a<{  
  color: string;
}>`
  color: ${props => props.color};
  border-style: solid;
  border-color: ${props => props.color};
  border-width: 1px;
  @media (min-width: ${$md}) {
    border-width: 2px;
  }
  border-radius: 50%;
  transition: color ${MENU_DURATION}ms, border ${MENU_DURATION}ms;
  width: 60px;
  @media (min-width: ${$md}) {
    width: 75px;
  }
`;


const LogoImage = styled.img`
    width: 100px;
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
      id={DK_MENU_ID}
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
                toggleOpen={() => setMenuOpen(!menuOpen)}
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
                />
                <div className="flex flex-col text-black">
                    <h2 dangerouslySetInnerHTML={{ __html: headerData?.title ?? '' }}/>
                    <span
                        className="italic"
                        dangerouslySetInnerHTML={{ __html: headerData?.subtitle ?? '' }}
                    />
                </div>
            </a>
        </div>

        <div className="flex">
            <div className="flex text-black">
                {headerData?.menu?.pages.map((pageId: number, index: number) => {
                    const page: Page = pages?.find((p: Page) => p.id === pageId);

                    return !page ? null : (
                        <a
                            key={index}
                            href={page?.link}
                            className="mx-4"
                        >
                            {page?.title}
                        </a>
                    );
                })}
            </div>
            <a
                href="#"
                onClick={e => {
                    e.preventDefault();
                    setMenuOpen(false);
                    setSearchOpen(true);
                }}
            >
                &#x1F50D;
            </a>
        </div>
      </div>
    </Wrapper>
  );
}
