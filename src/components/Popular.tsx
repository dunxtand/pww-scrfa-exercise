import Link from './Link';
import { useData } from '../hooks';


export default function Popular(): JSX.Element {
    const popularData = useData('popular');
    const pages = useData('pages');

    return (
        <section className="w-full">
            <h2
                className="w-full"
                dangerouslySetInnerHTML={{ __html: popularData?.title ?? '' }}
            />
            <div className="flex flex-wrap">
                {popularData?.links?.pages.map((pageId: number, index: number) => {
                    const page: Page = pages?.find((p: Page) => p.id === pageId);

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
