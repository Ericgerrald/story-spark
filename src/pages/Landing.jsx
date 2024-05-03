import { useLoaderData } from "react-router-dom";
import BookList from "../components/BookList";
import Hero from "../components/Hero";
import SearchForm from "../components/SearchForm";
import axios from "axios";
const booksUrl = "https://story-spark-api.onrender.com/api/v1/books?title=";

export const loader = async () => {
  const searchTerm = "";
  const response = await axios.get(`${booksUrl}${searchTerm}`);
  return { books: response.data.books, searchTerm };
};

const Landing = () => {
  const { books, searchTerm } = useLoaderData();

  return (
    <>
      <Hero />
      <section className="page">
        <SearchForm />
        <BookList books={books} />
      </section>
    </>
  );
};

export default Landing;
