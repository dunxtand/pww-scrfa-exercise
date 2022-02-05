import { river } from '../style-variables';


export default function SearchIcon(props: {
    color?: string;
    size?: number;
}): JSX.Element {
    const {
        color = river,
        size = 25
    } = props;

    return (
        <svg
            version="1.1" id="Layer_1"
            xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px" y="0px"
            fill={color}
            width={size}
            height={size}
            viewBox="0 0 20.8 20.8"
            // style="enable-background:new 0 0 20.8 20.8;"
            xmlSpace="preserve"
        >
            <path d="M20.4,17.7l-5.5-5.5c0.8-1.2,1.2-2.7,1.2-4.2c0-2.1-0.8-4.2-2.4-5.7C12.2,0.8,10.2,0,8,0C5.9,0,3.9,0.8,2.4,2.4
                C0.8,3.9,0,5.9,0,8c0,2.1,0.8,4.2,2.4,5.7c1.5,1.5,3.5,2.4,5.7,2.4c1.5,0,2.9-0.4,4.2-1.2l5.5,5.5c0.2,0.2,0.5,0.3,0.8,0.3
                s0.6-0.1,0.8-0.3l1-1c0.2-0.2,0.3-0.5,0.3-0.8S20.6,17.9,20.4,17.7z M8,12.3c-1.1,0-2.2-0.4-3-1.2c-0.8-0.8-1.2-1.9-1.2-3
                c0-1.1,0.4-2.2,1.2-3c0.8-0.8,1.9-1.2,3-1.2c1.1,0,2.2,0.4,3,1.2c0.8,0.8,1.2,1.9,1.2,3c0,1.1-0.4,2.2-1.2,3
                C10.2,11.8,9.2,12.3,8,12.3z"
            />
        </svg>
    );
}
