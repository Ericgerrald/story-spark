import styled from "styled-components";

const Wrapper = styled.article`
  background: var(--primary-none);
  box-shadow: var(--shadow-2);
  transition: var(--transition);
  display: grid;
  grid-template-rows: auto 1fr;
  border-radius: var(--borderRadius);
  :hover {
    /* box-shadow: var(--shadow-4); */
  }
  img {
    height: 15rem;
    border-top-right-radius: var(--borderRadius);
    border-top-left-radius: var(--borderRadius);
  }
  .footer {
    padding: 1.5rem;
    text-align: center;
  }
  h3 {
    margin-bottom: 0.5rem;
    text-align: center;
    font-weight: 700;
    letter-spacing: 1px;
  }
  .btn {
    background: #ff6f61;
    color: black;
    font-weight: 700;
  }
`;

export default Wrapper;
