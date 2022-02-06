import styled from 'styled-components';
import { ocean } from '../style-variables';
import { useData } from '../hooks';
import { aluminum, tin } from '../style-variables';


const Wrapper = styled.div`
    background-color: ${ocean};
    color: ${aluminum};
`;


export default function Footer(): JSX.Element {
    const footerData = useData('footer');
    const pages = useData('pages');

    return (
        <Wrapper className="px-10 sm:px-16 md:px-20 lg:px-32 py-10 flex flex-wrap justify-between">
            <div className="w-full lg:w-1/3 my-6 lg:my-0 flex flex-col">
                <h4
                    dangerouslySetInnerHTML={{ __html: footerData?.title ?? '' }}
                    className="font-bold mb-6 tracking-wider"
                    style={{ fontSize: 20 }}
                />
                <img
                    src="https://rfa.sc.gov/themes/custom/scrfa_theme/logo-footer.png"
                    alt="SCRFA seal"
                    style={{ width: 150, height: 150 }}
                />
            </div>

            <div className="w-full lg:w-1/3 my-6 lg:my-0 flex flex-col">
                {footerData?.pages?.map((pageId: number, index: number) => {
                    const page = pages?.find((p: Page) => p.id === pageId);

                    return !page ? null : (
                        <a
                            key={index}
                            href={page.link}
                            className="my-1"
                        >
                            {page.title}
                        </a>
                    );
                })}
            </div>

            <div className="w-full lg:w-1/3 my-6 lg:my-0">
                {footerData?.addresses?.map((address: any, index: number) => (
                    <a
                        key={index}
                        href={`https://maps.google.com?q=${encodeURIComponent(`${address.line1} ${address.line2}`)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="flex flex-col mb-4"
                    >
                        <div
                            className="uppercase mb-1 font-bold"
                            style={{ color: tin }}
                        >
                            {address.title}
                        </div>
                        <p>
                            <span>{address.line1}</span>
                            <br/>
                            <span>{address.line2}</span>
                        </p>
                    </a>
                ))}
            </div>
        </Wrapper>
    );
}
