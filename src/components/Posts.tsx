import PostCard from './PostCard';
import { useData } from '../hooks';


export default function Posts(props: {
    className?: string;
}): JSX.Element {
    const {
        className = ''
    } = props;

    const posts = useData('posts');

    return (
        <div className={`flex flex-col ${className}`}>
            {posts?.map((post: Post, index: number) => (
                <PostCard
                    key={index}
                    post={post}
                />
            ))}
        </div>
    )
}
