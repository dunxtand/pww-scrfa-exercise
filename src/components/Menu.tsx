import styled from 'styled-components';


const Wrapper = styled.div<{
    open: boolean;
}>`
    position: fixed;
    top: 0;
    left: 0;
    transform: translateY(${props => props.open ? 0 : -100}%);
    transition: transform .3s;
    width: 100%;
    height: 500px;
    background-color: #fff;
    z-index: 99;
`;


export default function Menu(props: {
    open: boolean;
}): JSX.Element {
    const { open } = props;

    return (
        <Wrapper open={open}>
            hello
        </Wrapper>
    );
}