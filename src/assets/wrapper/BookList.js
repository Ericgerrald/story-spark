import styled from "styled-components";

const Wrapper = styled.section`
  .header {
    margin-bottom: 2rem;
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
  }
`;

export default Wrapper;
