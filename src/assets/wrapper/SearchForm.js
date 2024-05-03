import styled from "styled-components";

const Wrapper = styled.div`
  .form {
    display: grid;
    grid-template-columns: 1fr auto;
    background: #ff6f61;
  }
  .form-input {
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
  }
  .btn {
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
  }
`;

export default Wrapper;
