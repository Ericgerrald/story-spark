import { Link, useLoaderData } from "react-router-dom";
import Wrapper from "../assets/wrapper/GameInstruction";
import useSound from "use-sound";
import ruleSound from "../assets/01 Main Theme.mp3";
import { useEffect } from "react";
import axios from "axios";

const url = "https://story-spark-api.onrender.com/api/v1/books/";

export const loader = async ({ params }) => {
  const { id } = params;
  const { data } = await axios.get(`${url}${id}`);
  // console.log(data.book.texts);
  return { id, data };
};

const GameInstruction = () => {
  const { id, data } = useLoaderData();
  const user = localStorage.getItem("name");

  const [play, { stop }] = useSound(ruleSound);

  // useEffect(() => {
  //   play();
  //   return () => {
  //     stop();
  // }, [play,stop]);
  useEffect(() => {
    play();

    // Cleanup function to stop the sound when the component is unmounted
    return () => {
      stop();
    };
  }, [play, stop]);

  const handleClick = () => {
    stop();
  };

  return (
    <Wrapper>
      <form className="form">
        <h5 className="name">
          Welcome <span className="user-name">{user}!!</span>
        </h5>
        <h5 className="rules">Game Rules</h5>
        <div className="underline"></div>
        <h5 style={{ textTransform: "none" }}>
          1. You have <span className="user-name">2 minutes </span> per question
        </h5>
        <h5 style={{ textTransform: "none" }}>
          2. Each question has <span className="user-name">10 points </span>
        </h5>
        <h5 style={{ textTransform: "none", lineHeight: 1.5 }}>
          3. You are provided with two life lines
          <span className="user-name">50/50, Ask Host and Phone a Friend</span>
        </h5>
        <h5 style={{ textTransform: "none" }}>
          4. You have to answer
          <span className="user-name"> All </span>
          questions to win the game
        </h5>
        <div className="underline"></div>
        <div onClick={handleClick} className="btn-container">
          <Link to={`/game/${id}`} className="btn btn-link">
            Let's Play
          </Link>
        </div>
      </form>
    </Wrapper>
  );
};

export default GameInstruction;
