import SVG from 'react-inlinesvg';


export default function HeroLink(props: {
    page?: Page;
}): JSX.Element | null {
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
