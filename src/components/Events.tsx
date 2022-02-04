import NewsTitle from './NewsTitle';
import EventCard from './EventCard';
import Button from './Button';
import { useData } from '../hooks';


export default function Events(props: {
    className?: string;
}): JSX.Element {
    const {
        className = ''
    } = props;

    const events = useData('events');

    return (
        <div className={`flex flex-col ${className}`}>
            <NewsTitle>
                Calendar of Events
            </NewsTitle>

            <div className="flex flex-col mt-10">
                {events?.map((event: SCRFAEvent, index: number) => (
                    <EventCard
                        key={index}
                        event={event}
                        className="my-4"
                    />
                ))}
            </div>

            <div className="mt-10">
                <Button href="/posts">
                    View All Events
                </Button>
            </div>
        </div>
    );
}
