import Link from './Link';
import Tag from './Tag';
import { tags } from '../data';


export default function PostCard(props: {
    post: Post;
}): JSX.Element {
    const { post } = props;

    const date = new Date(post.published);
    const formattedDate = date.toLocaleString('default', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });

    return (
        <div className="flex flex-col">
            <Link href={post.link}>
                {post.title}
            </Link>
            {post.text && (
                <div dangerouslySetInnerHTML={{ __html: post.text }}/>
            )}
            <div className="flex">
                <div>
                    <span className="text-bold">Published:</span>
                    <span>{formattedDate}</span>
                </div>
                {post.tags.map((tagId, index) => {
                    const tag = tags.find(tag => tag.id === tagId);

                    return !tag ? null : (
                        <Tag
                            key={index}
                            tag={tag}
                            bgColor='sidewalk'
                        />
                    );
                })}
            </div>
        </div>
    );
}
