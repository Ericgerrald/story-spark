import { Form } from "react-router-dom";
import Wrapper from "../assets/wrapper/SearchForm";

const SearchForm = () => {
  return (
    <Wrapper>
      <Form className="form">
        <input
          type="search"
          className="form-input"
          name="search"
          defaultValue="frog"
        />
        <button type="submit" className="btn">
          search
        </button>
      </Form>
    </Wrapper>
  );
};

export default SearchForm;
