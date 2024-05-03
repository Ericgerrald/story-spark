import Wrapper from "../assets/wrapper/BookList";
import BookCard from "./BookCard";

const BookList = ({ books }) => {
  if (!books) {
    return <h4>Sorry! no book found</h4>;
  }
  return (
    <Wrapper>
      <div className="header">
        <h2 style={{ textAlign: "center", fontWeight: 700 }}>Stories</h2>
        <div className="title-underline "></div>
      </div>
      <div className="cards">
        {books.map((book) => {
          return <BookCard key={book._id} {...book} />;
        })}
      </div>
    </Wrapper>
  );
};

export default BookList;
