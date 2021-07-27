import P from 'prop-types';

import './styles.css';

import { PostCardComponent } from '../PostCardComponent';

export const PostsComponent = ({ posts = [] }) => (
  <div className="posts">
    {posts.map((post) => (
      <PostCardComponent title={post.title} body={post.body} id={post.id} cover={post.cover} key={post.id} />
    ))}
  </div>
);

PostsComponent.defaultProps = {
  posts: [],
};

PostsComponent.propTypes = {
  posts: P.arrayOf(
    P.shape({
      title: P.string.isRequired,
      cover: P.string.isRequired,
      body: P.string.isRequired,
      id: P.number.isRequired,
    }),
  ),
};
