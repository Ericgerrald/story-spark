import styled from "styled-components";

const Wrapper = styled.main`
  min-height: 83.8vh;
  display: grid;
  place-items: center;
  article {
    width: var(--view-width);
    max-width: var(--max-width);
    margin: 0 auto;
    background: var(--white);
    padding: 1.5rem 2rem;
    box-shadow: var(--shadow-1);
    text-align: center;
  }
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .head {
    margin-bottom: 1rem;
  }
  .underline {
    height: 1px;
    background: var(--primary-none);
    margin-top: 5px;
  }
  h2 {
    font-weight: 700;
    letter-spacing: 1px;
  }
  .play {
    background: none;
    border: none;
    padding: 2px;
    display: flex;
    border-color: var(--primary-none);
    cursor: pointer;
  }
  .icon {
    color: red;
    font-size: 1.35rem;
  }
  .iconT {
    color: green;
    font-size: 1.35rem;
  }
  .pad {
    color: var(--primary-900);
    color: green;
    font-size: 1.35rem;
    animation: bounce 2s ease-in-out infinite;
  }

  .playPad {
    display: none;
  }

  .showPad {
    display: inline-block;
  }

  @keyframes bounce {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }

  p {
    margin-bottom: 1rem;
    line-height: 1.8;
    letter-spacing: 0.5px;
    font-size: 1.3rem;
  }
  .btn-container {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .disable {
    background: var(--grey-300);
  }
`;

export default Wrapper;
