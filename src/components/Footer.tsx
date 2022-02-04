import styled from 'styled-components';
import { ocean } from '../style-variables';
import { useData } from '../hooks';


const Wrapper = styled.div`
    background-color: ${ocean};
    color: #fff;
`;


export default function Footer(): JSX.Element {
    const footerData = useData('footer');
    const pages = useData('pages');

    return (
        <Wrapper className="p-4 flex justify-between">
            <div className="w-1/3 flex flex-col">
                <h4 dangerouslySetInnerHTML={{ __html: footerData?.title ?? '' }}/>
                {/** logo image goes here */}
            </div>

            <div className="w-1/3 flex flex-col">
                {footerData?.pages?.map((pageId: number, index: number) => {
                    const page = pages?.find((p: Page) => p.id === pageId);

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
                {footerData?.addresses?.map((address: any, index: number) => (
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
