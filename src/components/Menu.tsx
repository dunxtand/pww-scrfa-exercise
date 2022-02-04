import styled from 'styled-components';
import NewsTitle from './NewsTitle';
import { useData } from '../hooks';
import { platinum, tunnel, steel } from '../style-variables';


const Wrapper = styled.div<{
    open: boolean;
}>`
    position: fixed;
    top: 0;
    left: 0;
    transform: translateY(${props => props.open ? '100px' : '-100%'});
    transition: transform .3s;
    width: 100%;
    background-color: #fff;
    z-index: 99;
    .child-item:hover {
        text-decoration: underline;
    }
`;


const SidebarItem = styled.div`
    color: ${tunnel};
    border-bottom: 2px solid ${steel};
`;


export default function Menu(props: {
    open: boolean;
}): JSX.Element {
    const { open } = props;

    const headerData = useData('header');
    const pages = useData('pages');

    return (
        <Wrapper
            open={open}
            className="w-full flex shadow-md"
        >
            <div
                className="w-full lg:w-1/4 pt-4"
                style={{ backgroundColor: platinum }}
            >
                {headerData?.submenu?.sidebar?.pages?.map((pageId: number, index: number) => {
                    const page: Page = pages?.find((p: Page) => p.id === pageId);

                    return !page ? null : (
                        <a href={page.link}>
                            <SidebarItem
                                key={index}
                                className="mx-10 py-4 text-center font-bold"
                            >
                                {page.title}
                            </SidebarItem>
                        </a>
                    );
                })}
            </div>
            
            <div className="w-full lg:w-3/4 flex flex-wrap pt-6 pb-10">
                {headerData?.submenu?.expanded?.pages?.map((pageId: number, index: number) => {
                    const page = pages?.find((p: Page) => p.id === pageId);
                    const children = pages?.filter((p: Page) => p.parentId === pageId);

                    return !page ? null : (
                        <div
                            key={index}
                            className="flex flex-col px-10 mb-6 w-full lg:w-1/3"
                        >
                            <a
                                href={page.link}
                                className="mb-4"
                            >
                                <NewsTitle fontSize={20}>
                                    {page.title}
                                </NewsTitle>
                            </a>
                            
                            {children?.map((child: Page, index: number) => (
                                <a
                                    key={index}
                                    href={child.link}
                                    className="child-item my-1"
                                >
                                    {child.title}
                                </a>
                            ))}
                        </div>
                    );
                })}
            </div>
        </Wrapper>
    );
}