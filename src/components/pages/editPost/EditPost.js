import { Container } from "react-bootstrap";
import PostForm from "../../features/postForm/PostForm";
import { editPost } from '../../../redux/postsRedux';
import { useSelector } from "react-redux";
import { getPostbyId } from "../../../redux/store";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";

const EditPost = () => {

  const postParams = useParams();
  const postData = useSelector(state => getPostbyId(state, postParams.id));

  const buttonText = 'Edit post';
  const action = editPost;

  if(!postData) return <Navigate to="/" />
  else {
    return (
      <Container className="col-md-8">
        <h2 className="mb-4">Edit post</h2>
        <PostForm buttonText={buttonText} action={action} data={postData} />
      </Container>
    );
  }
}

export default EditPost;