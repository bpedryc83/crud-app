import styles from './Home.module.scss'
import DrawAllPosts from "../../features/drawAllPosts/DrawAllPosts";
import { Container } from "react-bootstrap";
import { Link } from 'react-router-dom';

const Home = () => <Container className="px-0">
    <div className={`row ${styles.paddingPageTitle}`}>
      <div className="px-0 col-6">
        <h2 className="mb-4">All posts</h2>
      </div>
      <div className="pe-0 col-6 text-end">
        <Link to={"/post/add"}>
          <button type="button" className="btn btn-outline-info">Add post</button>
        </Link>
      </div>
    </div>
    <div className="px-0 d-flex justify-content-between">
      <DrawAllPosts />
    </div>
  </Container>

export default Home;