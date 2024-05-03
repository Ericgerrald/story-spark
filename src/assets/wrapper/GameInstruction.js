import styled from "styled-components";

const Wrapper = styled.main`
  width: var(--view-width);
  max-width: var(--max-width);
  margin: 0 auto;
  min-height: 80vh;
  display: grid;
  place-items: center;
  h5 {
    margin-bottom: 1rem;
  }
  .name {
    text-align: center;
    letter-spacing: 1px;
    font-weight: 600;
  }
  .user-name {
    color: var(--primary-500);
    /* color: #ff6f61; */
    font-weight: 700;
  }
  .rules {
    text-align: center;
    font-weight: 700;
  }
  .underline {
    background: var(--primary-200);
    height: 2px;
    margin-bottom: 1rem;
  }
  .btn-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .btn-link {
    animation: bounce 10s ease-in-out infinite;
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
