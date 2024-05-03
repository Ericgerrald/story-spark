import styled from "styled-components";

const Wrapper = styled.main`
  width: var(--view-width);
  max-width: var(--max-width);
  margin: 0 auto;
  min-height: 80vh;
  display: grid;
  place-items: center;
  .form {
    background: #ff6f61;
  }
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .score,
  .timeSpinner {
    position: relative;
    /* background: var(--primary-500); */
    background: green;
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    display: grid;
    place-items: center;
    font-weight: bold;
    transition: var(--transition);
  }
  .score::before,
  .timeSpinner::before {
    content: "";
    position: absolute;
    background: var(--tertiary);
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 50%;
  }
  .valueContainer {
    position: relative;
  }
  .scoreContainer h5,
  .timeContainer h5 {
    font-size: 1rem;
    margin-top: 0.5rem;
  }
  .timeContainer,
  .scoreContainer {
    text-align: center;
  }
  .gameArticle {
    margin-top: 0.5rem;
  }
  .hostContainer h5 {
    letter-spacing: 2px;
    font-weight: bold;
  }
  @media screen and (min-width: 750px) {
    .choiceContainer {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      column-gap: 0.5rem;
      grid-template-areas: "a b" "c d";
    }
    .cell-1 {
      grid-area: a;
    }
    .cell-2 {
      grid-area: b;
    }
    .cell-3 {
      grid-area: c;
    }
    .cell-4 {
      grid-area: d;
    }
  }
  .answer-display {
    display: none;
  }
  .answerContainer {
    display: flex;
    margin-bottom: 0.5rem;
    /* width: 100%; */
    border: 2px solid var(--white);
    background: var(--black);
    color: var(--white);
    border-radius: 25px;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-top: 3px;
    padding-bottom: 3px;
    transition: var(--transition);
    cursor: pointer;
  }

  .answerContainer:hover {
    background: mediumblue;
  }
  .questionContainer {
    /* display: grid; */
    margin-bottom: 0.5rem;
    /* width: 100%; */
    border: 2px solid var(--white);
    background: var(--black);
    color: var(--white);
    border-radius: 25px;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    /* text-align: center; */
    /* align-items: center; */
    padding: 0.5rem;
    text-align: center;
    transition: var(--transition);
    margin-top: 0.5rem;
  }
  .questionContainer h5 {
    margin: 0;
    text-transform: none;
    line-height: 1.5;
    letter-spacing: 1.5px;
    font-weight: bold;
    font-size: 1.3rem;
    /* padding-left: 1rem; */
  }
  .answerContainer p {
    margin: 0;
  }

  .cell button {
    width: 100%;
    text-align: left;
    font-size: 1.1rem;
  }

  .gameFooter {
    /* display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2fr;
  row-gap: 1.5rem; */
    display: flex;
    justify-content: space-evenly;
    margin-top: 1rem;
    gap: 1rem;
  }

  .choicePrefix {
    margin-right: 0.2rem;
    color: var(--primary-500);
    font-weight: 600;
    letter-spacing: var(--letterSpacing);
    transition: var(--transition);
  }

  .choiceText {
    width: 100%;
    transition: var(--transition);
  }
  .host {
    color: green;
    font-weight: 600;
  }
  .footerBtn {
    border-radius: 30px;
    background: var(--primary-500);
  }

  .line {
    background: var(--green-dark);
    /* border: var(--white); */
    border: 2px solid var(--white);
    transition: var(--transition);
  }

  .line:hover {
    background: var(--green-light);
    color: var(--green-dark);
  }

  .lineUse {
    background: var(--red-dark);
  }

  .lineUse:hover {
    background: var(--red-dark);
    color: var(--white);
    cursor: not-allowed;
  }

  .liveLineContainer {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 1rem;
  }

  .active {
    background: mediumblue;
  }

  .correct {
    animation: correct 3s ease forwards;
  }

  @keyframes correct {
    0%,
    22%,
    42% {
      background: mediumblue;
      /* color: var(--primary-900); */
    }
    20%,
    40%,
    60% {
      background: linear-gradient(#0e0124, #22074d);
      /* color: var(--white); */
    }
    62%,
    100% {
      background: var(--green-dark);
    }
  }

  .incorrect {
    animation: incorrect 3s ease forwards;
  }

  @keyframes incorrect {
    0%,
    22%,
    42% {
      background: mediumblue;
      /* color: var(--primary-900); */
    }
    20%,
    40%,
    60% {
      background: linear-gradient(#0e0124, #22074d);
      /* color: var(--white); */
    }
    62%,
    100% {
      background: crimson;
    }
  }

  .introForm {
    max-width: 450px;
  }

  .introForm h4 {
    text-align: center;
    margin-bottom: 0;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--primary-900);
  }

  .introForm .form-row a {
    width: 100%;
  }
  .hidden {
    display: none;
  }
  .show {
    display: inline;
  }
  .lineUse {
    background: #842029;
  }
  .tell,
  .tell1 {
    font-weight: 700;
    color: var(--secondary-none);
  }
  .tell,
  .showHostAnswer {
    animation: sAnswer 3s ease forwards;
  }

  @keyframes sAnswer {
    0%,
    22%,
    42% {
      opacity: 1;
      /* color: var(--primary-900); */
    }
    20%,
    40%,
    60% {
      opacity: 0;
      /* color: var(--white); */
    }
    62%,
    100% {
      opacity: 1;
    }
  }
  .ended {
    text-align: center;
    h3 {
      margin-top: 1rem;
      font-weight: bold;
    }
    .useP {
      font-weight: bold;
    }
    h4 {
      animation: s4 4s ease forwards;
    }
    @keyframes s4 {
      0%,
      22%,
      42% {
        opacity: 1;
        /* color: var(--primary-900); */
      }
      20%,
      40%,
      60% {
        opacity: 0;
        /* color: var(--white); */
      }
      62%,
      100% {
        opacity: 1;
      }
    }
    .pUse {
      color: var(--secondary-none);
    }
  }

  .friendContainer {
    font-weight: bold;
    color: mediumblue;
    .call {
      color: var(--secondary-none);
    }
    .friendChoice {
      color: var(--secondary-none);
    }
  }

  .btn-link {
    animation: bounce 2s ease-in-out infinite;
  }
  @keyframes bounce {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export default Wrapper;
