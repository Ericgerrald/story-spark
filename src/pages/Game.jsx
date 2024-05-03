import { useEffect, useState } from "react";
import Wrapper from "../assets/wrapper/Game";
import question2 from "../question2";
import useSound from "use-sound";
import startSound from "../assets/18 Let's Play $4,000.mp3";
import correctSound from "../assets/17 $2,000 Win.mp3";
import wrongSound from "../assets/31 $16,000 Lose.mp3";
import endSound from "../assets/07 Fastest Finger First.mp3";
import { Link, useLoaderData } from "react-router-dom";
import axios from "axios";
// import { useHistory } from "react-router-dom";

const url = "https://story-spark-api.onrender.com/api/v1/books/";

export const loader = async ({ params }) => {
  const { id } = params;
  const { data } = await axios.get(`${url}${id}`);
  // console.log(data.book.texts);
  return { id, data };
};

const Game = () => {
  const { id, data } = useLoaderData();
  // const history = useHistory();
  const [play] = useSound(startSound);
  const [correct] = useSound(correctSound);
  const [wrong] = useSound(wrongSound);
  const [end, { stop }] = useSound(endSound);

  useEffect(() => {
    play();
    return () => {
      stop();
    };
  }, [play, stop]);

  const showAnswer = document.querySelector(".showAnswer");
  const showHostAnswer = document.querySelector(".showHostAnswer");
  const [stops, setStops] = useState(false);
  const [friendChoice, setFriendChoice] = useState(null);
  const [friendAnswer, setFriendAnswer] = useState(false);

  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const [timer, setTimer] = useState(120);

  const [point, setPoint] = useState(0);

  const [questionIndex, setQuestionIndex] = useState(0);
  const [question, setQuestion] = useState(null);
  const [fiftyFiftyUsed, setFiftyFiftyUsed] = useState(false);
  const tellAnswer = document.querySelector(".tell");
  // const [updateShowAnswer, setUpdateShowAnswer] = useState(null);

  useEffect(() => {
    if (stops === true) {
      end();
    }
  }, [end, stops]);
  const maxQuestion = 10;

  function selectRandomQuestion(arr, count) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.slice(0, count);
  }

  useEffect(() => {
    const answerContainers = document.querySelectorAll(".answerContainer");

    answerContainers.forEach((answerContainer) => {
      answerContainer.addEventListener("click", handleSelection);
    });

    return () => {
      answerContainers.forEach((answerContainer) => {
        answerContainer.removeEventListener("click", handleSelection);
      });
    };
  }, [question, questionIndex]);

  const delay = (duration, callBack) => {
    setTimeout(() => {
      callBack();
    }, duration);
  };

  const handleSelection = (event) => {
    const answerContainers = document.querySelectorAll(".answerContainer");
    answerContainers.forEach((container) => {
      container.classList.remove("active");
    });

    event.currentTarget.classList.add("active");

    setSelectedAnswer(event.currentTarget);
    const answer =
      event.currentTarget.querySelector(".choiceText").dataset.number;
    const numberAnswer = Number(answer);

    const currentTarget = event.currentTarget;

    delay(2000, () => {
      if (question?.answer === numberAnswer) {
        currentTarget.classList.add("correct");
      } else {
        currentTarget.classList.add("incorrect");
      }
    });
    delay(5000, () => {
      if (question?.answer === numberAnswer) {
        correct();
        delay(6500, () => {
          currentTarget.classList.remove("active");
          currentTarget.classList.remove("correct");
          currentTarget.classList.remove("incorrect");
          setQuestionIndex((current) => current + 1);
          play();
          setFriendChoice(null);
          setFriendAnswer(null);
          showHostAnswer.classList.add("hidden");
          setPoint((current) => current + 10);
        });
      } else {
        wrong();
        showAnswer.classList.remove("hidden");
        if (question?.answer === 1) {
          tellAnswer.innerText = "A";
        }
        if (question?.answer === 2) {
          tellAnswer.innerText = "B";
        }
        if (question?.answer === 3) {
          tellAnswer.innerText = "C";
        }
        if (question?.answer === 4) {
          tellAnswer.innerText = "D";
        }

        delay(4000, () => {
          setStops(true);
        });
      }
    });
  };

  useEffect(() => {
    if (maxQuestion === questionIndex) {
      return setStops(true);
    }
  }, [maxQuestion, questionIndex]);

  useEffect(() => {
    if (selectedAnswer) {
      return;
    }
    if (timer === 0) return setStops(true);
    const interval = setInterval(() => {
      setTimer((current) => current - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [setStops, timer]);

  useEffect(() => {
    // console.log(data);
    setQuestion(selectRandomQuestion(data.book.questions, 15)[questionIndex]);
  }, [questionIndex]);

  useEffect(() => {
    setTimer(120);
    setSelectedAnswer(null);
  }, [questionIndex]);

  // 50/50

  useEffect(() => {
    const answerContainers = document.querySelectorAll(".answerContainer");
    answerContainers.forEach((container) => {
      container.style.display = "block"; // Reset display to "block" when new question loads
    });

    answerContainers.forEach((answerContainer) => {
      answerContainer.addEventListener("click", handleSelection);
    });

    return () => {
      answerContainers.forEach((answerContainer) => {
        answerContainer.removeEventListener("click", handleSelection);
      });
    };
  }, [question, questionIndex]);

  // pppppppppppppppppp
  const handleFiftyFifty = () => {
    if (fiftyFiftyUsed) return; // If already used, return early

    const correctAnswerIndex = question.answer - 1;
    const incorrectAnswers = [0, 1, 2, 3].filter(
      (i) => i !== correctAnswerIndex
    );
    const randomIncorrectIndex =
      incorrectAnswers[Math.floor(Math.random() * 3)];

    const answerContainers = document.querySelectorAll(".answerContainer");
    answerContainers.forEach((container, index) => {
      if (index === correctAnswerIndex || index === randomIncorrectIndex) {
        container.style.display = "block";
      } else {
        container.style.display = "none";
      }
    });

    setFiftyFiftyUsed(true);
  };

  // console.log(showHostAnswer);

  // =============================================
  const tellAnswer1 = document.querySelector(".tell1");

  const [hostUsed, setHostUsed] = useState(false);
  const handleHost = () => {
    showHostAnswer.classList.remove("hidden");

    if (hostUsed) return;

    delay(3000, () => {
      if (question?.answer == 1) {
        tellAnswer1.innerText = "A 😀";
      }
      if (question?.answer == 2) {
        tellAnswer1.innerText = "B 😀";
      }
      if (question?.answer == 3) {
        tellAnswer1.innerText = "C 😀";
      }
      if (question?.answer == 4) {
        tellAnswer1.innerText = "D 😀";
      }
    });
    setHostUsed(true);
  };

  // Getting User
  const user = localStorage.getItem("name");
  const [callFriend, setCallFriendUsed] = useState(false);
  const [friend, setFriend] = useState(null);
  const [dot, setDot] = useState(null);
  const [calling, SetCalling] = useState(false);
  const [isGreetVisible, setIsGreetVisible] = useState(false);
  const [askQuestion, setAskQuestion] = useState(false);
  const [ringing, setRinging] = useState(false);
  const [thinking, setThinking] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [ifeanyiAnswer, setIfeanyiAnswer] = useState(null);
  const [ucheAnswer, setUcheAnswer] = useState(null);

  useEffect(() => {
    const answerIndex = question?.answer;
    const getCorrectAnswer = () => {
      if (answerIndex == 1) {
        setCorrectAnswer("A");
      }
      if (answerIndex == 2) {
        setCorrectAnswer("B");
      }
      if (answerIndex == 3) {
        setCorrectAnswer("C");
      }
      if (answerIndex == 4) {
        setCorrectAnswer("D");
      }
    };
    getCorrectAnswer();
  }, [setCorrectAnswer, question]);

  useEffect(() => {
    let myArray = [];

    const correctAnswerIndex = question?.answer;
    const incorrectAnswers = [1, 2, 3, 4].filter(
      (i) => i !== correctAnswerIndex
    );
    const randomIncorrectIndex =
      incorrectAnswers[Math.floor(Math.random() * 3)];

    myArray.push(correctAnswerIndex);
    myArray.push(randomIncorrectIndex);

    const randomMyArray = myArray[Math.floor(Math.random() * myArray.length)];

    if (randomMyArray === 1) {
      setIfeanyiAnswer("A");
    }
    if (randomMyArray === 2) {
      setIfeanyiAnswer("B");
    }
    if (randomMyArray === 3) {
      setIfeanyiAnswer("C");
    }
    if (randomMyArray === 4) {
      setIfeanyiAnswer("D");
    }
  }, [setIfeanyiAnswer, question]);

  useEffect(() => {
    const array = ["A", "B", "C", "D"];
    const randomArray = array[Math.floor(Math.random() * array.length)];
    setUcheAnswer(randomArray);
  }, []);

  // ===Phone Friend =======
  const handleCallFriend = () => {
    if (callFriend) return;

    const friends = ["Uche", "Ifeoma", "Ifeanyi"];

    const randomFriend = friends[Math.floor(Math.random() * friends.length)];

    setFriend(randomFriend);

    if (randomFriend === "Uche") {
      SetCalling(true);

      delay(1000, () => {
        setDot(".");
      });
      delay(2000, () => {
        setDot("..");
      });
      delay(3000, () => {
        setDot("...");
      });
      delay(4000, () => {
        setDot("");
      });
      delay(5000, () => {
        SetCalling(false);
      });
      delay(5000, () => {
        setRinging(true);
      });
      delay(6000, () => {
        setDot(".");
      });
      delay(7000, () => {
        setDot("..");
      });
      delay(8000, () => {
        setDot("...");
      });
      delay(9000, () => {
        setDot("");
      });
      delay(10000, () => {
        setDot(".");
      });
      delay(11000, () => {
        setDot("..");
      });
      delay(12000, () => {
        setDot("...");
      });
      delay(13000, () => {
        setRinging(false);
      });
      delay(14000, () => {
        setIsGreetVisible(true);
      });
      delay(15000, () => {
        setIsGreetVisible(false);
      });
      delay(15000, () => {
        setAskQuestion(true);
      });
      delay(16000, () => {
        setDot(".");
      });
      delay(17000, () => {
        setDot("..");
      });
      delay(18000, () => {
        setDot("...");
      });
      delay(19000, () => {
        setDot("");
      });
      delay(20000, () => {
        setDot(".");
      });
      delay(21000, () => {
        setDot("..");
      });
      delay(22000, () => {
        setDot("...");
      });
      delay(22000, () => {
        setDot("");
      });
      delay(23000, () => {
        setAskQuestion(false);
      });
      delay(23000, () => {
        setThinking(true);
      });
      delay(24000, () => {
        setThinking(true);
      });
      delay(25000, () => {
        setDot(".");
      });
      delay(26000, () => {
        setDot("..");
      });
      delay(27000, () => {
        setDot("...");
      });
      delay(28000, () => {
        setDot("");
      });
      delay(29000, () => {
        setDot(".");
      });
      delay(30000, () => {
        setDot("..");
      });
      delay(31000, () => {
        setDot("...");
      });
      delay(31000, () => {
        setThinking(false);
      });
      delay(31000, () => {
        setFriendAnswer(true);
      });
      delay(32000, () => {
        setFriendChoice(ucheAnswer);
      });
    }
    setCallFriendUsed(true);
    if (randomFriend === "Ifeanyi") {
      SetCalling(true);

      delay(1000, () => {
        setDot(".");
      });
      delay(2000, () => {
        setDot("..");
      });
      delay(3000, () => {
        setDot("...");
      });
      delay(4000, () => {
        setDot("");
      });
      delay(5000, () => {
        SetCalling(false);
      });
      delay(5000, () => {
        setRinging(true);
      });
      delay(6000, () => {
        setDot(".");
      });
      delay(7000, () => {
        setDot("..");
      });
      delay(8000, () => {
        setDot("...");
      });
      delay(9000, () => {
        setDot("");
      });
      delay(10000, () => {
        setDot(".");
      });
      delay(11000, () => {
        setDot("..");
      });
      delay(12000, () => {
        setDot("...");
      });
      delay(13000, () => {
        setRinging(false);
      });
      delay(14000, () => {
        setIsGreetVisible(true);
      });
      delay(15000, () => {
        setIsGreetVisible(false);
      });
      delay(15000, () => {
        setAskQuestion(true);
      });
      delay(16000, () => {
        setDot(".");
      });
      delay(17000, () => {
        setDot("..");
      });
      delay(18000, () => {
        setDot("...");
      });
      delay(19000, () => {
        setDot("");
      });
      delay(20000, () => {
        setDot(".");
      });
      delay(21000, () => {
        setDot("..");
      });
      delay(22000, () => {
        setDot("...");
      });
      delay(22000, () => {
        setDot("");
      });
      delay(23000, () => {
        setAskQuestion(false);
      });
      delay(23000, () => {
        setThinking(true);
      });
      delay(24000, () => {
        setThinking(true);
      });
      delay(25000, () => {
        setDot(".");
      });
      delay(26000, () => {
        setDot("..");
      });
      delay(27000, () => {
        setDot("...");
      });
      delay(28000, () => {
        setDot("");
      });
      delay(29000, () => {
        setDot(".");
      });
      delay(30000, () => {
        setDot("..");
      });
      delay(31000, () => {
        setDot("...");
      });
      delay(31000, () => {
        setThinking(false);
      });
      delay(31000, () => {
        setFriendAnswer(true);
      });
      delay(32000, () => {
        setFriendChoice(ifeanyiAnswer);
      });
    }
    setCallFriendUsed(true);
    if (randomFriend === "Ifeoma") {
      SetCalling(true);

      delay(1000, () => {
        setDot(".");
      });
      delay(2000, () => {
        setDot("..");
      });
      delay(3000, () => {
        setDot("...");
      });
      delay(4000, () => {
        setDot("");
      });
      delay(5000, () => {
        SetCalling(false);
      });
      delay(5000, () => {
        setRinging(true);
      });
      delay(6000, () => {
        setDot(".");
      });
      delay(7000, () => {
        setDot("..");
      });
      delay(8000, () => {
        setDot("...");
      });
      delay(9000, () => {
        setDot("");
      });
      delay(10000, () => {
        setDot(".");
      });
      delay(11000, () => {
        setDot("..");
      });
      delay(12000, () => {
        setDot("...");
      });
      delay(13000, () => {
        setRinging(false);
      });
      delay(14000, () => {
        setIsGreetVisible(true);
      });
      delay(15000, () => {
        setIsGreetVisible(false);
      });
      delay(15000, () => {
        setAskQuestion(true);
      });
      delay(16000, () => {
        setDot(".");
      });
      delay(17000, () => {
        setDot("..");
      });
      delay(18000, () => {
        setDot("...");
      });
      delay(19000, () => {
        setDot("");
      });
      delay(20000, () => {
        setDot(".");
      });
      delay(21000, () => {
        setDot("..");
      });
      delay(22000, () => {
        setDot("...");
      });
      delay(22000, () => {
        setDot("");
      });
      delay(23000, () => {
        setAskQuestion(false);
      });
      delay(23000, () => {
        setThinking(true);
      });
      delay(24000, () => {
        setThinking(true);
      });
      delay(25000, () => {
        setDot(".");
      });
      delay(26000, () => {
        setDot("..");
      });
      delay(27000, () => {
        setDot("...");
      });
      delay(28000, () => {
        setDot("");
      });
      delay(29000, () => {
        setDot(".");
      });
      delay(30000, () => {
        setDot("..");
      });
      delay(31000, () => {
        setDot("...");
      });
      delay(31000, () => {
        setThinking(false);
      });
      delay(31000, () => {
        setFriendAnswer(true);
      });
      delay(32000, () => {
        setFriendChoice(correctAnswer);
      });
      setCallFriendUsed(true);
    }
  };

  return (
    <Wrapper>
      <div className="form ">
        {stops ? (
          <div className="ended">
            <h3 className="useP">
              Hi!! <span className="pUse">{user}</span>
            </h3>
            <br />
            {point < 100 ? (
              <h4 className="youLost ">
                😒 <span className="lose">You Lost !!!</span>
              </h4>
            ) : (
              <h4 className="youWon ">
                😀 <span className="won"> You Won !!!</span>
              </h4>
            )}

            <h3>
              You score:{" "}
              <span className="pUse" id="userScore">
                {point}
              </span>
              {point === 0 ? " Point" : " Points"}
            </h3>
            <Link
              to={`/gameinstruction/${id}`}
              style={{ marginTop: "1.5rem" }}
              className="btn btn-link"
            >
              Play Again
            </Link>
          </div>
        ) : (
          <>
            {/* Start of Header */}
            <div className="header">
              {/* Score Container */}
              <div className="scoreContainer">
                <div className="score">
                  <div className="valueContainer">
                    <span className="scoreSpan">{point}</span>
                  </div>
                </div>
                <h5>Points</h5>
              </div>
              {/* Time Container */}
              <div className="timeContainer">
                <div className="timeSpinner">
                  <div className="valueContainer">
                    <span className="timeSpan">{timer}</span>
                  </div>
                </div>
                <h5>Time</h5>
              </div>
            </div>
            {/* end of header */}
            {/* Start of Game Article */}
            <article className="gameArticle">
              <div className="hostContainer">
                <h5 className="showAnswer hidden">
                  The answer is... <span className="tell"></span>
                </h5>
                <h5 className="showHostAnswer hidden">
                  The answer is...<span className="tell1"></span>
                </h5>
              </div>
              {/* Start Phone Friend */}
              <div className="friendContainer">
                <>
                  {calling ? (
                    <h5 className="calling ">
                      Calling <span className="call">{friend}</span>
                      <span className="dot">{dot}</span>
                    </h5>
                  ) : (
                    ""
                  )}
                  {ringing ? (
                    <h5 className="ringing">
                      Ringing<span className="ring">{dot}</span>
                    </h5>
                  ) : (
                    ""
                  )}
                  {isGreetVisible === true ? (
                    <h5 className="greet">Hello! {user}</h5>
                  ) : (
                    ""
                  )}
                  {askQuestion ? (
                    <h5 className="askQuestion">
                      Reading question <span className="dot">{dot}</span>
                    </h5>
                  ) : (
                    ""
                  )}
                  {thinking ? (
                    <h5 className="thinking">
                      Thinking<span className="think">{dot}</span>
                    </h5>
                  ) : (
                    ""
                  )}
                  {friendAnswer ? (
                    <h5 className="friendAnswer">
                      The answer is....
                      <span className="friendChoice">{friendChoice}</span>
                    </h5>
                  ) : (
                    ""
                  )}
                </>
              </div>
              {/* End Phone Friend */}
              {/* Game Info Container */}
              <div className="gameInfoContainer">
                {/* Question Container */}
                <div className="questionContainer">
                  <h5 id="question">{question?.question}</h5>
                </div>
                {/* choice Container */}
                <div className="choiceContainer">
                  <div className="cell cells cell-1 answer " id="1" data-c="1">
                    <p className="answerContainer">
                      <span className="choicePrefix">.A:</span>
                      <span className="choiceText" data-number="1">
                        {question?.choice1}
                      </span>
                    </p>
                  </div>
                  <div className="cell cells cell-2" id="2" data-c="2">
                    <p className="answerContainer">
                      <span className="choicePrefix">.B:</span>
                      <span className="choiceText" data-number="2">
                        {question?.choice2}
                      </span>
                    </p>
                  </div>
                  <div className="cell cells cell-3" id="3" data-c="3">
                    <p className="answerContainer">
                      <span className="choicePrefix">.C:</span>
                      <span className="choiceText" data-number="3">
                        {question?.choice3}
                      </span>
                    </p>
                  </div>
                  <div className="cell cells cell-4" id="4" data-c="4">
                    <p className="answerContainer">
                      <span className="choicePrefix">.D:</span>
                      <span className="choiceText" data-number="4">
                        {question?.choice4}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </article>
            <footer className="gameFooter">
              <button
                onClick={handleFiftyFifty}
                className={
                  fiftyFiftyUsed === true
                    ? "btn footerBtn line fifty-fifty btn-block lineUse"
                    : "btn footerBtn line fifty-fifty btn-block"
                }
              >
                50 / 50
              </button>
              <button
                onClick={handleHost}
                className={
                  hostUsed === true
                    ? "btn footerBtn line hosts btn-block lineUse"
                    : "btn footerBtn line hosts btn-block"
                }
              >
                Ask Host
              </button>
              <button
                onClick={handleCallFriend}
                className={
                  callFriend === true
                    ? "btn footerBtn line friend btn-block lineUse"
                    : "btn footerBtn line friend btn-block"
                }
              >
                Call friend
              </button>
            </footer>
          </>
        )}
      </div>
    </Wrapper>
  );
};

export default Game;
