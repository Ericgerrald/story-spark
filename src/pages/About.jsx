import { Form, redirect } from "react-router-dom";
import Wrapper from "../assets/wrapper/About";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const messageCollectionRef = collection(db, "users-messages");

  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const { name, email, message } = data;

  try {
    await addDoc(messageCollectionRef, {
      name,
      email,
      message,
    });
    toast.success("message sent");
  } catch (error) {
    console.log(error);
  }

  // console.log(name);
  // console.log(response);

  // setTimeout(() => {

  // }, 3000);

  return redirect("/");
};

const About = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <article>
          <h4>Welcome to StorySpark, where imagination knows no bounds!</h4>
          <p>
            At StorySpark, we believe in the power of storytelling to ignite
            creativity, inspire curiosity, and foster a lifelong love of
            learning in children. Our platform is a magical gateway to a world
            of enchanting tales, where every page is filled with wonder and
            adventure.
          </p>
        </article>
        <div>
          <Form className="form" method="POST">
            <h4
              style={{
                textAlign: "center",
                fontWeight: "bold",
                marginBottom: "2rem",
                color: "var(--primary-500)",
              }}
            >
              Contact Us
            </h4>
            {/*  Nmae*/}
            <div className="form-row">
              <input
                type="text"
                className="form-input"
                name="name"
                id="name"
                placeholder="name"
                required
              />
            </div>
            <div className="form-row">
              <input
                type="email"
                className="form-input"
                name="email"
                id="email"
                placeholder="email"
                required
              />
            </div>
            <div className="form-row">
              <textarea
                className="form-textarea"
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="message"
                required
              />
            </div>
            <button type="submit" className="btn btn-block">
              submit
            </button>
          </Form>
        </div>
      </div>
    </Wrapper>
  );
};

export default About;
