import { Button } from "react-bootstrap";
import { useState } from "react";
import { addPost } from "../../../redux/postsRedux";
import { useDispatch } from "react-redux";
import shortid from 'shortid';
import { useNavigate } from "react-router-dom";

const AddPostForm = () => {

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [published, setPublished] = useState('');
  const [shortDesc, setShortDesc] = useState('');
  const [content, setContent] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = shortid();
    dispatch(addPost( { id, title, author, publishedDate: published, shortDescription: shortDesc, content} ));
    navigate("/");
  }

  return (
    <div className="">
      <form className="" onSubmit={e => handleSubmit(e)}>
        <label className="col-form-label">Title</label>
        <input type="text" id="inputTitle" value={title} className="form-control w-50 mb-1" placeholder="Enter title" required onChange={e => setTitle(e.target.value)}></input>
        <label className="col-form-label">Author</label>
        <input type="text" id="inputAuthor" value={author} className="form-control w-50 mb-1" placeholder="Enter author" required onChange={e => setAuthor(e.target.value)}></input>
        <label className="col-form-label">Published</label>
        <input type="text" id="inputPublished" value={published} className="form-control w-50 mb-1" placeholder="Enter date dd-mm-yyyy" required onChange={e => setPublished(e.target.value)}></input>
        <label className="col-form-label">Short description</label>
        <textarea rows="3" id="inputShortDesc" value={shortDesc} className="form-control w-100 mb-1" placeholder="Leave a comment here" required onChange={e => setShortDesc(e.target.value)}></textarea>
        <label className="col-form-label">Main content</label>
        <textarea rows="8" id="content" value={content} className="form-control w-100 mb-3" placeholder="Leave a comment here" required onChange={e => setContent(e.target.value)}></textarea>
        <Button type="submit">Add post</Button>
      </form>
    </div>
  )
  }

export default AddPostForm;