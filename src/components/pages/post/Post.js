import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPostbyId } from "../../../redux/store";
import { getCategoryById } from "../../../redux/store";
import { Link } from "react-router-dom";
import styles from './Post.module.scss';
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deletePost } from "../../../redux/postsRedux";
import dateToStr from "../../../utils/dateToStr";

const Post = () => {

  const [show, setShow] = useState(false);

  const postParams = useParams();
  const postData = useSelector(state => getPostbyId(state, postParams.id));
  const postCategory = useSelector(state => getCategoryById(state, postData.category));

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true); 

  const dispatch = useDispatch();

  const deleteAction = (e) => {
    e.preventDefault();
    const id = postData.id;
    dispatch(deletePost( { id }));
    handleClose();
  }

  if(!postData) return <Navigate to="/" />
  else {

    return (
      <Container className="col-md-8">
        <div className={`row ${styles.paddingPageTitle}`}>
          <div className="px-0 col-md-8 col-6">
            <h2 className="mb-4">{postData.title}</h2>
          </div>
          <div className="pe-0 col-md-4 col-6 text-end">
            <Link to={"/post/edit/" + postData.id} className="pe-2">
              <button type="button" className="btn btn-outline-info">Edit</button>
            </Link>
            <button type="button" className="btn btn-outline-danger" onClick={handleShow}>Delete</button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Are you sure?</Modal.Title>
              </Modal.Header>
              <Modal.Body>This operation will completely remove this post from the app. <br />Are you sure you want to do that?</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Cancel
                </Button>
                <Button variant="danger" onClick={e => deleteAction(e)}>
                  Remove
                </Button>
              </Modal.Footer>
            </Modal>

          </div>
        </div>
        <div className="px-0 mb-4">
          <p className="fw-bold fs-6 mb-0">Author: <span className="fw-normal">{postData.author}</span></p>
          <p className="fw-bold fs-6 mb-0">Published: <span className="fw-normal">{dateToStr(postData.publishedDate)}</span></p>
          <p className="fw-bold fs-6 mb-2">Category: <span className="fw-normal">{postCategory.name}</span></p>
          <p className="fs-6 fw-normal" dangerouslySetInnerHTML={{ __html: postData.content }} />
        </div>
      </Container>
    )
  }
}

export default Post;