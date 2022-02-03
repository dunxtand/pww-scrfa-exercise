import { colorKey } from '../style-variables';


export default function Tag(props: {
    tag: Tag;
    bgColor?: string;
}) {
    const {
        tag,
        bgColor
    } = props;

    const backgroundColor = colorKey[bgColor ?? tag.color ?? 'sidewalk'];

    return (
        <div style={{ backgroundColor }}>
            {tag.title}
        </div>
    );
}
