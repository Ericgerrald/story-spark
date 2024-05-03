import styled from "styled-components";

const Wrapper = styled.div`
  background: var(--primary-none);
  padding-bottom: 3rem;
  min-height: 40vh;
  .hero-center {
    width: var(--view-width);
    max-width: var(--max-width);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }
  article {
    margin-top: 2rem;
  }
  h1 {
    margin-bottom: 1rem;
    font-weight: 700;
    letter-spacing: 2px;
  }
  p {
    letter-spacing: 1px;
    font-weight: 700;
  }
  @media (min-width: 768px) {
    .hero-center {
      display: grid;
      grid-template-columns: auto auto;
    }
    article {
      margin-top: 7rem;
    }
  }
`;

export default Wrapper;
