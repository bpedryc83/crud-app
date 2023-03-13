import { Button } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import shortid from 'shortid';
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";


const PostForm = props => {

  const [title, setTitle] = useState((props.data) ? (props.data.title): '');
  const [author, setAuthor] = useState((props.data) ? (props.data.author): '');
  const [publishedDate, setPublishedDate] = useState((props.data) ? (props.data.publishedDate): '');
  const [shortDescription, setShortDescription] = useState((props.data) ? (props.data.shortDescription): '');
  const [content, setContent] = useState((props.data) ? (props.data.content): '');

  const [publishedDateError, setPublishedDateError] = useState(false);
  const [contentError, setContentError] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { register, handleSubmit: validate, formState: { errors } } = useForm();
  
  
  const handleSubmit = () => {
    setPublishedDateError(!publishedDate);
    setContentError(!content);

    if (content && publishedDate) {
      const id = (props.data) ? (props.data.id): shortid();
      dispatch(props.action( { id, title, author, publishedDate, shortDescription, content} ));
      navigate("/");
    }
  }

  return (
    <div>
      <form onSubmit={validate(handleSubmit)}>        
        <label className="col-form-label">Title</label>
        <input {...register("inputTitle", {required: true, minLength: 4})} type="text" value={title} className="form-control w-50 mb-1" placeholder="Enter title" onChange={e => setTitle(e.target.value)}></input>
        {errors.inputTitle && <small className="d-block form-text text-danger mt-2">This field is required (minimum 4 letters)</small>}
        
        <label className="col-form-label">Author</label>
        <input {...register("inputAuthor", {required: true, minLength: 4})} type="text" value={author} className="form-control w-50 mb-1" placeholder="Enter author" onChange={e => setAuthor(e.target.value)}></input>
        {errors.inputAuthor && <small className="d-block form-text text-danger mt-2">This field is required (minimum 4 letters)</small>}

        <label className="col-form-label">Published</label>
        <DatePicker dateFormat="yyyy/MM/dd" selected={publishedDate} onChange={(date) => setPublishedDate(date)} />
        {publishedDateError && <small className="d-block form-text text-danger mt-2">Date is required</small>}

        <label className="col-form-label">Short description</label>
        <textarea rows="3" {...register("inputShortDescription", {required: true, minLength: 20})} value={shortDescription} className="form-control w-100 mb-1" placeholder="Leave a comment here" onChange={e => setShortDescription(e.target.value)}></textarea>
        {errors.inputShortDescription && <small className="d-block form-text text-danger mt-2">This field is required (minimum 20 letters)</small>}
        
        <label className="col-form-label">Main content</label>
        <ReactQuill className="w-100 mb-1" theme="snow" id="content" value={content} onChange={setContent} />
        {contentError && <small className="d-block form-text text-danger mt-2">This field is required</small>}
        <br />
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