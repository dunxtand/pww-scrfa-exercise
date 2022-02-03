import EventCard from './EventCard';
import { events } from '../data';


export default function Events(props: {
    className?: string;
}): JSX.Element {
    const {
        className = ''
    } = props;

    return (
        <div className={`flex flex-col ${className}`}>
            {events.map((event: SCRFAEvent, index) => (
                <EventCard
                    key={index}
                    event={event}
                />
            ))}
        </div>
    )
}
