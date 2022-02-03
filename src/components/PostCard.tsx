import Link from './Link';
import { tags } from '../data';


interface Props {
    post: Post;
}


export default function PostCard(props: Props): JSX.Element {
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
                        <div className="bg-black text-white">
                            {tag.title}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
