import styled from "styled-components";

const Wrapper = styled.footer`
  background: var(--primary-900);
  height: 2rem;
  .footer-center {
    width: var(--view-width);
    max-width: var(--max-width);
    margin: 0 auto;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 0.5rem;
  }
  .copy {
    color: var(--white);
    font-weight: 700;
  }
`;

export default Wrapper;
