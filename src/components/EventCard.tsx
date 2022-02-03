import Tag from './Tag';
import { tags } from '../data';


interface Props {
    event: SCRFAEvent;
}


export default function EventCard(props: Props): JSX.Element {
    const {
        event
    } = props;

    const date = new Date(event.date);
    const month = date.toLocaleString('default', { month: 'short' });
    const day = date.getDate();
    const time = `${date.getHours()}:${date.getMinutes()}`;

    return (
        <div className="flex">
            <div className="bg-black text-white flex flex-col">
                <div>
                    {month}
                </div>
                <div>
                    {day}
                </div>
            </div>

            <div className="flex flex-col">
                <div className="flex">
                    {event.tags.map((tagId, index) => {
                        const tag = tags.find(tag => tag.id === tagId);

                        return !tag ? null : (
                            <Tag
                                key={index}
                                tag={tag}
                            />
                        );
                    })}
                </div>

                <div>
                    {event.location}
                </div>

                <div>
                    {time}
                </div>

                {event.phone && (
                    <div>
                        {event.phone}
                    </div>
                )}
            </div>
        </div>
    );
}
