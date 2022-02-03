import React from 'react';
import Link from './Link';
import { popular, pages } from '../data';


export default function Popular(): JSX.Element {
    return (
        <section className="w-full">
            <h2
                className="w-full"
                dangerouslySetInnerHTML={{ __html: popular.title }}
            />
            <div className="flex flex-wrap">
                {popular.links.pages.map((pageId, index) => {
                    const page = pages.find(page => page.id === pageId) ?? null;

                    return !page ? null : (
                        <Link
                            key={index}
                            href={page.link}
                        >
                            {page.title}
                        </Link>
                    );
                })}
            </div>
        </section>
    )
}
