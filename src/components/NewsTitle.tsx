import styled from 'styled-components';
import { ocean, bark } from '../style-variables';


const Title = styled.h2`
    font-size: 30px;
    color: ${ocean};
`;

const Underline = styled.div`
    width: 50px;
    height: 5px;
    background-color: ${bark};
`;


export default function NewsTitle(props: {
    children: React.ReactNode;
}): JSX.Element {
    const { children } = props;

    return (
        <>
            <Title className="mb-2 font-black">
                {children}
            </Title>
            <Underline/>
        </>
    )
}
