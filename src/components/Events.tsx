import EventCard from './EventCard';
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
            {events?.map((event: SCRFAEvent, index: number) => (
                <EventCard
                    key={index}
                    event={event}
                />
            ))}
        </div>
    )
}
