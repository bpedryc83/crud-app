import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPostsByCategory } from "../../../redux/store";
import DrawPostCard from "../../features/drawPostCard/DrawPostCard";
import { Container } from "react-bootstrap";

const Category = () => {

  const { categoryId } = useParams();
  const filteredPosts = useSelector(state => getPostsByCategory(state, categoryId));

  
  if (filteredPosts.length === 0) {
    return (
      <div className="d-flex justify-content-center">
        <div className="card mb-3 w-50">
          <p className="fs-6 fw-normal text-center">No posts in this category.</p>
        </div>
      </div>
    )
  }

  else {
    return (
      <Container>
        <div className="row d-flex justify-content-between">
          {filteredPosts.map(post => 
            <DrawPostCard
            key={post.id}
            {...post}
          />
          )}
        </div>
      </Container>
    )
  }
}

export default Category;