import { colorKey } from '../style-variables';


interface Props {
    tag: Tag;
    bgColor?: string;
}


export default function Tag(props: Props) {
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
