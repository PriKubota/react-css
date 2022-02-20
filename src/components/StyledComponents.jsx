import styled from "styled-components";
export const StyledComponents = () => {
  return (
    <SC>
      <p>-StyledComponents-</p>
      <button>FIGHT!!!</button>
    </SC>
  );
};

const SC = styled.div`
  border: solid 2px #392eff;
  border-radius: 20px;
  padding: 8px;
`;
