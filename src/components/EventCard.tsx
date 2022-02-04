import styled from 'styled-components';
import Tag from './Tag';
import { useData } from '../hooks';
import { bark, platinum } from '../style-variables';


const DateBadge = styled.div`
    background-color: ${bark};
    color: #fff;
    .month {
        line-height: 1;
    }
    .day {
        font-size: 30px;
        line-height: 1;
    }
`;


export default function EventCard(props: {
    event: SCRFAEvent;
    className?: string;
}): JSX.Element {
    const {
        event,
        className = ''
    } = props;

    const tags = useData('tags');

    const date = new Date(event.date);
    const month = date.toLocaleString('default', { month: 'short' });
    const day = date.getDate();
    const hour = date.getHours() > 12 ? date.getHours() - 12 : (date.getHours() ?? 12);
    const time = `${hour}:${date.getMinutes()} ${date.getHours() >= 12 ? 'pm' : 'am'}`;

    return (
        <div className={`flex ${className}`}>
            <div className="pr-4">
                <DateBadge className="text-center px-3 py-4">
                    <div className="month uppercase font-semibold">
                        {month}
                    </div>
                    <div className="day font-bold">
                        {day}
                    </div>
                </DateBadge>
            </div>

            <div
                className="flex flex-col pb-4"
                style={{ borderBottom: `2px solid ${platinum}` }}
            >
                <div className="flex mb-2">
                    {event.tags.map((tagId, index) => {
                        const tag: Tag = tags?.find((t: Tag) => t.id === tagId);

                        return !tag ? null : (
                            <Tag
                                key={index}
                                tag={tag}
                                className="mr-2"
                            />
                        );
                    })}
                </div>

                <div className="my-px">
                    {event.location}
                </div>

                <div className="my-px">
                    {time}
                </div>

                {event.phone && (
                    <div className="my-px">
                        {event.phone}
                    </div>
                )}
            </div>
        </div>
    );
}
