import NewsTitle from './NewsTitle';
import PostCard from './PostCard';
import Button from './Button';
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
            <NewsTitle>
                Recent Updates
            </NewsTitle>

            <div className="flex flex-col mt-10 md:pr-10 lg:pr-20">
                {posts?.map((post: Post, index: number) => (
                    <PostCard
                        key={index}
                        post={post}
                        className="my-4"
                    />
                ))}
            </div>

            <div className="mt-10">
                <Button  href="/posts">
                    View More
                </Button>
            </div>
        </div>
    )
}
