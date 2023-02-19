import { Container } from "react-bootstrap";
import AddPostForm from '../../features/addPostForm/AddPostForm'

const AddPost = () => <Container className="col-md-8">
    <h2 className="mb-4">Add post</h2>
    <AddPostForm />
  </Container>

export default AddPost;