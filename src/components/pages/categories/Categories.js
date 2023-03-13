import { useSelector } from "react-redux";
import { getAllCategories } from "../../../redux/store";
import { Link } from "react-router-dom";

const Categories = () => {

  const categories = useSelector(getAllCategories);
  
  return (
    <div>
      <h2>Categories</h2>
      <div className="d-flex justify-content-center">
        <div className="card mb-3 w-50">
          {categories.map(category => <Link key={category.id} to={"/category/" + category.id}>
            <p className="fs-6 fw-normal text-center">{category.name}</p>
          </Link>)}
        </div>
      </div>
    </div>
  )
}

export default Categories;