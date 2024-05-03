import Wrapper from "../assets/wrapper/BookCard";
import { Link } from "react-router-dom";

const BookCard = ({ _id, title, image }) => {
  return (
    <Wrapper>
      <div className="img-container">
        <img src={image} className="img" alt={title} />
      </div>
      <div className="footer">
        <h3>{title}</h3>
        <Link to={`/singlestory/${_id}`} className="btn btn-block">
          Read
        </Link>
      </div>
    </Wrapper>
  );
};

export default BookCard;
