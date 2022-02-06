import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import { ocean } from '../style-variables'


const Wrapper = styled.a`
    background-color: #fff;
    border-width: 2px;
    border-color: #fff;
    width: 250px;
    height: 250px;
    color: ${ocean};
    &:hover {
        border-color: ${ocean};
    }
`;


export default function HeroLink(props: {
    page: Page;
    className?: string;
}): JSX.Element | null {
    const {
        page,
        className = ''
    } = props;

    return !page ? null : (
        <Wrapper
            href={page?.link}
            className={`p-10 shadow-md flex flex-col items-center ${className}`}
        >
            <SVG
                src={`/icons/${page?.icon}.svg`}
                width={100}
            />
            <div className="uppercase pt-6 text-center font-bold tracking-wider">
                {page?.title}
            </div>
        </Wrapper>
    );
}
