import styled from "styled-components";

const Wrapper = styled.section`
  .section-center {
    /* background: red; */
    width: var(--view-width);
    max-width: var(--max-width);
    margin: 0 auto;
    margin-top: 3rem;
    letter-spacing: 1px;
    line-height: 2;
  }
  article h4 {
    font-weight: bold;
    line-height: 1.5;
    margin-bottom: 1rem;
    /* text-align: center; */
  }
  .form {
    margin-top: 2rem;
  }
  input,
  textarea {
    outline-color: var(--primary-200);
  }
  @media (min-width: 768px) {
    .section-center {
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 8rem;
    }
    article {
      margin: 5rem;
    }
  }
`;

export default Wrapper;
