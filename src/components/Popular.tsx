import styled from 'styled-components';
import Link from './Link';
import { useData } from '../hooks';
import { ocean } from '../style-variables'


const Title = styled.h2`
    color: ${ocean};
    border-bottom: 12px solid ${ocean};
    font-size: 40px;
`;


export default function Popular(): JSX.Element {
    const popularData = useData('popular');
    const pages = useData('pages');

    return (
        <section className="w-full px-10 sm:px-16 md:px-20 lg:px-32 py-12">
            <Title
                className="w-full font-black"
                dangerouslySetInnerHTML={{ __html: popularData?.title ?? '' }}
            />
            <div className="flex flex-wrap my-10">
                {popularData?.links?.pages.map((pageId: number, index: number) => {
                    const page: Page = pages?.find((p: Page) => p.id === pageId);

                    return !page ? null : (
                        <Link
                            key={index}
                            href={page.link}
                            className="w-full md:w-1/2 lg:w-1/3 pr-12 mb-6"
                        >
                            {page.title}
                        </Link>
                    );
                })}
            </div>
        </section>
    )
}
