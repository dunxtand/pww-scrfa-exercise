import PostCard from './PostCard';
import { posts } from '../data';


export default function Posts(props: {
    className?: string;
}): JSX.Element {
    const {
        className = ''
    } = props;

    return (
        <div className={`flex flex-col ${className}`}>
            {posts.map((post: Post, index) => (
                <PostCard
                    key={index}
                    post={post}
                />
            ))}
        </div>
    )
}
