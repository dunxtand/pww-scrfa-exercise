import React from 'react';
import SVG from 'react-inlinesvg';


interface Props {
    page?: Page;
}


export default function HeroLink(props: Props): JSX.Element | null {
    const { page = null } = props;

    return !page ? null : (
        <a
            href={page?.link}
        >
            <SVG
                src={`/icons/${page?.icon}.svg`}
                width={200}
            />
            <div>
                {page?.title}
            </div>
        </a>
    );
}
