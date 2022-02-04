import Posts from './Posts';
import Events from './Events';
import BackToTop from './BackToTop';


export default function News(): JSX.Element {
    return (
        <section className="relative w-full flex flex-wrap justify-between px-10 sm:px-16 md:px-20 lg:px-32 pt-16 pb-32">
            <Posts className="w-full md:w-1/2 mb-20 md:mb-0"/>
            <Events className="w-full md:w-1/2"/>
            <BackToTop className="absolute bottom-0 right-0 mr-16 mb-10"/>
        </section>
    );
}
