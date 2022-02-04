import styled from 'styled-components';
import { ocean, bark } from '../style-variables';


const Title = styled.h2<{
    fontSize: number;
}>`
    font-size: ${props => props.fontSize}px;
    color: ${ocean};
`;

const Underline = styled.div`
    width: 50px;
    height: 5px;
    background-color: ${bark};
`;


export default function NewsTitle(props: {
    fontSize?: number;
    children: React.ReactNode;
}): JSX.Element {
    const {
        fontSize = 30,
        children
    } = props;

    return (
        <>
            <Title
                fontSize={fontSize}
                className="mb-2 font-black"
            >
                {children}
            </Title>
            <Underline/>
        </>
    )
}
