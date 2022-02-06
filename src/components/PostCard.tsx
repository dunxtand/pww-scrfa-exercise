import Link from './Link';
import Tag from './Tag';
import { useData } from '../hooks';
import { concrete, sidewalk, slate } from '../style-variables';


export default function PostCard(props: {
    post: Post;
    className?: string;
}): JSX.Element {
    const {
        post,
        className = ''
    } = props;

    const tags = useData('tags');

    const date = new Date(post.published);
    const formattedDate = date.toLocaleString('default', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });

    return (
        <div className={`flex flex-col ${className}`}>
            <Link
                href={post.link}
                className="mb-3"
            >
                {post.title}
            </Link>
            {post.text && (
                <div
                    dangerouslySetInnerHTML={{ __html: post.text }}
                    className="mb-2 font-semibold"
                    style={{ color: slate }}
                />
            )}
            <div className="flex">
                <div>
                    <span
                        className="font-bold mr-1"
                        style={{ color: concrete }}
                    >
                        Published:
                    </span>
                    <span
                        className="font-semibold"
                        style={{ color: sidewalk }}
                    >
                        {formattedDate}
                    </span>
                </div>
                {post.tags.map((tagId, index) => {
                    const tag = tags?.find((t: Tag) => t.id === tagId);

                    return !tag ? null : (
                        <Tag
                            key={index}
                            tag={tag}
                            bgColor="sidewalk"
                            className="mx-2"
                        />
                    );
                })}
            </div>
        </div>
    );
}
