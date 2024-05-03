import styled from "styled-components";

const Wrapper = styled.main`
  width: var(--view-width);
  max-width: var(--max-width);
  margin: 0 auto;
  min-height: 80vh;
  display: grid;
  place-items: center;
  h4 {
    text-align: center;
    font-weight: 600;
    letter-spacing: 2px;
    margin-bottom: 1rem;
  }
  input {
    outline: none;
  }
`;

export default Wrapper;
