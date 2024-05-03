import Wrapper from "../assets/wrapper/SingleError";
import img from "../assets/not-found.svg";
import { useRouteError } from "react-router-dom";

const SingleError = () => {
  const error = useRouteError();
  return (
    <Wrapper>
      <div>
        <img src={img} alt="not-Found" />
        <h2>{error.message}</h2>
      </div>
    </Wrapper>
  );
};

export default SingleError;
