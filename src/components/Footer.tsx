import styled from 'styled-components';
import { footer, pages } from '../data';


const Wrapper = styled.div`
    background-color: #1b3a61;
    color: #fff;
`;


export default function Footer(): JSX.Element {
    return (
        <Wrapper className="p-4 flex justify-between">
            <div className="w-1/3 flex flex-col">
                <h4 dangerouslySetInnerHTML={{ __html: footer.title }}/>
                {/** logo image goes here */}
            </div>

            <div className="w-1/3 flex flex-col">
                {footer.pages.map((pageId, index) => {
                    const page = pages.find(page => page.id === pageId);

                    return !page ? null : (
                        <a
                            key={index}
                            href={page.link}
                        >
                            {page.title}
                        </a>
                    );
                })}
            </div>

            <div className="w-1/3">
                {footer.addresses.map((address, index) => (
                    <div
                        key={index}
                        className="flex flex-col"
                    >
                        <div className="uppercase mb-2">
                            {address.title}
                        </div>
                        <p>
                            <span>{address.line1}</span>
                            <br/>
                            <span>{address.line2}</span>
                        </p>
                    </div>
                ))}
            </div>
        </Wrapper>
    );
}
