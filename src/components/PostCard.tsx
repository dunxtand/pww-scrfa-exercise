import Link from './Link';
import Tag from './Tag';
import { useData } from '../hooks';


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
                    className="mb-2"
                />
            )}
            <div className="flex">
                <div>
                    <span className="text-bold mr-1">Published:</span>
                    <span>{formattedDate}</span>
                </div>
                {post.tags.map((tagId, index) => {
                    const tag: Tag = tags?.find((t: Tag) => t.id === tagId);

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
