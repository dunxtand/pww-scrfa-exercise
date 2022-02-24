import styled from 'styled-components';
import { sky, stone } from "../style-variables";


const Button = styled.div`
    width: 50px;
    height: 50px;
    color: ${sky};
    background-color: ${stone};
    border-radius: 100%;
    .chevron {
        font-size: 50px;
        transform: rotate(-90deg);
        margin-right: 10px;
    }
`;


export default function BackToTop(props: {
    className?: string;
}): JSX.Element {
    const {
        className = '',
    } = props;

    return (
        <button
            onClick={() => {
                window.scroll({ top: 0, left: 0, behavior: 'smooth' });
            }}
            className={`flex items-center ${className}`}
        >
            <div className="mr-2">
                Back to Top
            </div>
            <Button className="flex justify-center items-center">
                <div className="chevron">
                    &rsaquo;
                </div>
            </Button>
        </button>
    );
}
