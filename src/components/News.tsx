import Posts from './Posts';
import Events from './Events';


export default function News(): JSX.Element {
    return (
        <section className="w-full flex flex-wrap justify-between px-32 py-16">
            <Posts className="w-full md:w-1/2 mb-20 md:mb-0"/>
            <Events className="w-full md:w-1/2"/>
        </section>
    );
}
