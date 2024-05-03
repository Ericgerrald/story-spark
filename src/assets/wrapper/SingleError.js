import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 5rem;
  min-height: 70vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 90vw;
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
    margin-top: -3rem;
  }
  h2 {
    line-height: 1.5;
    color: var(--tertiary);
    font-weight: 700;
  }
`;

export default Wrapper;
