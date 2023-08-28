import NewPost from "./NewPost";
import Post from "./Post";
import classes from './PostList.module.css';

function PostList() {
  return (
    <>
    <NewPost/>
    <ul className={classes.posts}>
      <Post author="Maximilian" body="React.js is awesome" />
      <Post author="Manual" body="Check out this" />
    </ul>
    </>
  );
}

export default PostList;
