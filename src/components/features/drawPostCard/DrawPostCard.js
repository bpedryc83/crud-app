import styles from './DrawPostCard.module.scss'; 
import { Link } from 'react-router-dom';
import dateToStr from '../../../utils/dateToStr';
import { getCategoryById } from '../../../redux/store';
import { useSelector } from 'react-redux';

const DrawPostCard = props => {

  const postCategory = useSelector(state => getCategoryById(state, props.category));

  return (
    <div className={`px-0 mb-4 ${styles.cardWidth}`}>
      <div className="card mb-3 d-flex h-100">
          <div className="card-body text-start position-relative ">
            <p className="fw-semibold fs-5 mb-2">{props.title}</p>
            <p className="fw-bold fs-6 mb-0">Author: <span className="fw-normal">{props.author}</span></p>
            <p className="fw-bold fs-6 mb-0">Published: <span className="fw-normal">{dateToStr(props.publishedDate)}</span></p>
            <p className="fw-bold fs-6 mb-2">Category: <span className="fw-normal">{postCategory.name}</span></p>
            <p className={`fs-6 fw-normal ${styles.marginCard}`}>{props.shortDescription}</p>
            <div className={`d-flex align-content-end position-absolute ${styles.marginButton}`}>
              <Link key={props.id} to={"/post/" + props.id}>
                <button className="btn btn-primary" type="submit">Read more</button>
              </Link>
            </div>
          </div>
      </div>
    </div>
  )
}

export default DrawPostCard;