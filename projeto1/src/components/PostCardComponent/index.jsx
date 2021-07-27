import P from 'prop-types';
import './styles.css';

export const PostCardComponent = ({ title, body, id, cover }) => (
  <div className="post">
    <img src={cover} alt={title} key={id} />
    <div className="post-content">
      <h2>{title} </h2>
      <p>{body}</p>
    </div>
  </div>
);

PostCardComponent.propTypes = {
  title: P.string.isRequired,
  cover: P.string.isRequired,
  body: P.string.isRequired,
  id: P.number.isRequired,
};
