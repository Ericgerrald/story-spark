import { Form, redirect, useNavigation } from "react-router-dom";
import Wrapper from "../assets/wrapper/GameLogin";

export const action = async ({ request, params }) => {
  const { id } = params;
  // console.log(id);
  // const { id, data } = useLoaderData();
  const formData = await request.formData();
  const { name } = Object.fromEntries(formData);
  localStorage.setItem("name", `${name}`);
  return redirect(`/gameinstruction/${id}`);
};

const GameLogin = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Wrapper>
      <Form className="form" method="POST">
        <h4>StorySpark Trivia</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input type="text" name="name" required className="form-input" />
        </div>
        <div className="form-row">
          <button type="submit" className="btn btn-block">
            {isSubmitting ? "submitting..." : "submit"}
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};

export default GameLogin;
