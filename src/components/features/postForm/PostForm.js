import { Button } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import shortid from 'shortid';
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

const PostForm = props => {

  const [title, setTitle] = useState((props.data) ? (props.data.title): '');
  const [author, setAuthor] = useState((props.data) ? (props.data.author): '');
  const [publishedDate, setPublishedDate] = useState((props.data) ? (props.data.publishedDate): '');
  const [shortDescription, setShortDescription] = useState((props.data) ? (props.data.shortDescription): '');
  const [content, setContent] = useState((props.data) ? (props.data.content): '');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = (props.data) ? (props.data.id): shortid();
    dispatch(props.action( { id, title, author, publishedDate, shortDescription, content} ));
    navigate("/");
  }

  return (
    <div>
      <form onSubmit={e => handleSubmit(e)}>
        <label className="col-form-label">Title</label>
        <input type="text" id="inputTitle" value={title} className="form-control w-50 mb-1" placeholder="Enter title" required onChange={e => setTitle(e.target.value)}></input>
        <label className="col-form-label">Author</label>
        <input type="text" id="inputAuthor" value={author} className="form-control w-50 mb-1" placeholder="Enter author" required onChange={e => setAuthor(e.target.value)}></input>
        <label className="col-form-label">Published</label>
        <input type="text" id="inputPublished" value={publishedDate} className="form-control w-50 mb-1" placeholder="Enter date dd-mm-yyyy" required onChange={e => setPublishedDate(e.target.value)}></input>
        <label className="col-form-label">Short description</label>
        <textarea rows="3" id="inputShortDesc" value={shortDescription} className="form-control w-100 mb-1" placeholder="Leave a comment here" required onChange={e => setShortDescription(e.target.value)}></textarea>
        <label className="col-form-label">Main content</label>
        <textarea rows="8" id="content" value={content} className="form-control w-100 mb-3" placeholder="Leave a comment here" required onChange={e => setContent(e.target.value)}></textarea>
        <Button type="submit">{props.buttonText}</Button>
      </form>
    </div>
  )
}

PostForm.propTypes = {
  action: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  data: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    publishedDate: PropTypes.string,
    shortDescription: PropTypes.string,
    content: PropTypes.string,
  }),
};

export default PostForm;