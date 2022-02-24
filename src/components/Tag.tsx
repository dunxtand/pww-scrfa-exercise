import { honey, slate, colorKey } from '../style-variables';


export default function Tag(props: {
    tag: Tag;
    bgColor?: string;
    className?: string;
}) {
    const {
        tag,
        bgColor,
        className = ''
    } = props;

    const backgroundColor = colorKey[bgColor ?? tag.color ?? 'sidewalk'];
    const color = ({
        [honey]: slate
    } as any)[backgroundColor] ?? '#fff';

    return (
        <div
            style={{
                backgroundColor,
                color,
                fontSize: 12
            }}
            className={`py-1 px-2 rounded-md font-semibold ${className}`}
        >
            {tag.title}
        </div>
    );
}
