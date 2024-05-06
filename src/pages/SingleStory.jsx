import { useEffect, useState } from "react";
import Wrapper from "../assets/wrapper/SingleStory";
import story from "../data";
import { IoPlay } from "react-icons/io5";
import { GrGamepad } from "react-icons/gr";
import { Link, useLoaderData } from "react-router-dom";
import axios from "axios";

const url = "https://story-spark-api.onrender.com/api/v1/books/";

export const loader = async ({ params }) => {
  const { id } = params;
  const { data } = await axios.get(`${url}${id}`);
  // console.log(data.book.texts);
  return { id, data };
};

const SingleStory = () => {
  const { id, data } = useLoaderData();
  const [isTextReading, setIsTextReading] = useState(false);
  const [index, setIndex] = useState(0);
  const { text } = data.book.texts[index];
  const [page, setPage] = useState(1);
  // const history = useHistory();

  const nextTest = () => {
    window.speechSynthesis.cancel();
    setIndex((currentIndex) => {
      setIsTextReading(false);
      const newIndex = currentIndex + 1;
      setPage(page + 1);
      return newIndex;
    });
  };
  const prevTest = () => {
    window.speechSynthesis.cancel();
    setIndex((currentIndex) => {
      setIsTextReading(false);
      setPage(page - 1);
      const newIndex = currentIndex - 1;
      return newIndex;
    });
  };
  //   const newDis = setIsTextReading(true);
  const disable = index === 0;
  const newDisable = index === data.book.texts.length - 1;

  //   read text

  let speech;

  const readText = () => {
    if (isTextReading) {
      // If text is already playing, stop it
      window.speechSynthesis.cancel();
      setIsTextReading(false);
    } else {
      // If text is not playing, start reading
      speech = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech);
      setIsTextReading(true);
    }
  };

  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel(); // Clean up speech synthesis when component unmounts
    };
  }, []);

  // useEffect(() => {
  //   const unlisten = history.listen(() => {
  //     window.speechSynthesis.cancel(); // Stop speech synthesis when navigating to another page
  //   });
  //   return () => {
  //     unlisten(); // Clean up listener
  //   };
  // }, [history]);

  return (
    <Wrapper>
      <article>
        <div className="head">
          <div className="header">
            <h2>{data.book.title}</h2>
            <button
              disabled={index !== data.book.texts.length - 1}
              className={
                index !== data.book.texts.length - 1
                  ? "play playPad"
                  : "play playPad showPad"
              }
            >
              <Link to={`/gamelogin/${id}`}>
                <GrGamepad className="pad" />
              </Link>
            </button>
            <button onClick={readText} className="play">
              <IoPlay className={isTextReading === true ? "iconT" : "icon"} />
            </button>
          </div>
          <div className="underline"></div>
        </div>
        <div>
          <p>{text}</p>
          <div className="underline"></div>
        </div>
        <div className="btn-container">
          <button
            className={disable ? "prev-btn btn disable" : "prev-btn btn"}
            onClick={prevTest}
            disabled={disable}
          >
            prev
          </button>
          <h5>Page : {page}</h5>
          <button
            disabled={newDisable}
            className={newDisable ? "next-btn btn disable" : "next-btn btn"}
            onClick={nextTest}
          >
            next
          </button>
        </div>
      </article>
    </Wrapper>
  );
};

export default SingleStory;
