import './styles.css';
import { PostCardComponent } from '../PostCardComponent';

export const PostsComponent = ({ posts }) => (
  <div className="posts" >
    {posts.map(post => (
      <PostCardComponent

        title={post.title}
        body={post.body}
        id={post.id}
        cover={post.cover}
        key={post.id}

      />
    ))}
  </div>

);