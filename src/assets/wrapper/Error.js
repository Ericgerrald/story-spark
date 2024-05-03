import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 100vh;
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
  h3 {
    margin-bottom: 0.5rem;
  }
  p {
    margin-bottom: 0.5rem;
  }
  a {
    text-transform: capitalize;
    font-weight: bold;
    color: var(--tertiary);
  }
`;

export default Wrapper;
