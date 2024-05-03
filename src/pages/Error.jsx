import { Link, useRouteError } from "react-router-dom";
import Wrapper from "../assets/wrapper/Error";
import img from "../assets/404.svg";

const Error = () => {
  const error = useRouteError();
  console.log(error);

  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="404" />
          <h3>Ohh!!</h3>
          <p>Page not found</p>
          <Link to={"/"}>back home</Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div>
        <h3>Something went wrong</h3>
      </div>
    </Wrapper>
  );
};

export default Error;
