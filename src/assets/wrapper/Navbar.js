import styled from "styled-components";

const Wrapper = styled.nav`
  background: var(--primary-none);
  .nav-center {
    width: var(--view-width);
    max-width: var(--max-width);
    margin: 0 auto;
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
  }
  .logo {
    font-size: clamp(1.5rem, 3vw, 3rem);
    font-weight: 700;
    letter-spacing: 1.5px;
    color: var(--secondary-none);
    /* display: none; */
  }
  .logoIn {
    color: var(--primary-900);
  }

  .sidebar-toggle {
    font-size: 1.4rem;
    background: transparent;
    border-color: transparent;
    margin-top: 0.5rem;
    color: var(--secondary-none);
    cursor: pointer;
  }
  .nav-links {
    display: flex;
    gap: 1rem;
  }
  .nav-link {
    color: var(--grey-900);
    font-size: 1.3rem;
    font-weight: 700;
    padding: 0.5rem 0.5rem 0.5rem 0;
    letter-spacing: 1px;
    transition: var(--transition);
  }
  .nav-link:hover {
    color: var(--secondary-none);
  }
  .active {
    color: var(--secondary-none);
  }
  @media (min-width: 768px) {
    .nav-center {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }

    .nav-links {
      display: flex;
      gap: 0.5rem;
      flex-direction: row;
      margin-top: 0;
    }
    .sidebar-toggle {
      display: none;
    }
  }
`;

export default Wrapper;
