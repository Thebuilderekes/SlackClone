import React from "react";
import styled from "styled-components";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
function Siderbar() {
  return (
    <Container>
      <WorkspaceContainer>
        <Name>BuilderVision</Name>
        <NewMessage>
          <AddCircleOutlineIcon />
        </NewMessage>
      </WorkspaceContainer>
    </Container>
  );
}

export default Siderbar;

const Container = styled.div`
  background-color: #3f0e40;
`;
const WorkspaceContainer = styled.div`
  color: white;
  height: 64px;
  display: flex;
  align-items: center;
  padding-left: 19px;
  justify-content: space-between;
`;
const Name = styled.div``;

const NewMessage = styled.div`
  background-color: white;
  width: 25px;
  height: 25px;
  border: 1px solid white;
  border-radius: 50%;
  fill: #3f0e40;
  color: #3f0e40;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-right: 16px;
`;
