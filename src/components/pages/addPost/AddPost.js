import { Container } from "react-bootstrap";
import PostForm from "../../features/postForm/PostForm";
import { addPost } from '../../../redux/postsRedux';

const AddPost = () => {

  const buttonText = 'Add post';
  const action = addPost;

  return (
    <Container className="col-md-8">
      <h2 className="mb-4">Add post</h2>
      <PostForm buttonText={buttonText} action={action}/>
    </Container>
  );
}

export default AddPost;