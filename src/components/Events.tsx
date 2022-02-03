import EventCard from './EventCard';
import { events } from '../data';


interface Props {
    className?: string;
}


export default function Events(props: Props): JSX.Element {
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
