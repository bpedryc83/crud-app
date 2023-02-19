import { Container } from "react-bootstrap"
import { getAllPosts } from "../../../redux/store";
import { useSelector } from "react-redux";
import DrawPostCard from "../drawPostCard/DrawPostCard";

const DrawAllPosts = () => {

  const posts = useSelector(getAllPosts);

  return (
    <Container>
        <div className="row d-flex justify-content-between">
          {posts.map(post => 
            <DrawPostCard
              key={post.id}
              {...post}
            />
          )}
        </div>
    </Container>
  )
}

export default DrawAllPosts;