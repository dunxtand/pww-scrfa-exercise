import PostCard from './PostCard';
import { posts } from '../data';


interface Props {
    className?: string;
}


export default function Posts(props: Props): JSX.Element {
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
