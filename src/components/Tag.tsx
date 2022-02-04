import { colorKey } from '../style-variables';


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

    return (
        <div
            style={{
                backgroundColor,
                fontSize: 12
            }}
            className={`py-1 px-2 rounded-md text-white ${className}`}
        >
            {tag.title}
        </div>
    );
}
