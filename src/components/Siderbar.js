import React from "react";
import styled from "styled-components";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import  {sidebarItemsData} from "../Data/SidebarData.js";
import AddIcon from '@material-ui/icons/Add';
function Siderbar() {
  return (
    <Container>
      <WorkspaceContainer>
        <Name>BuilderVision</Name>
        <NewMessage>
          <AddCircleOutlineIcon />
        </NewMessage>
      </WorkspaceContainer>
      <MainChannels>
      {
        sidebarItemsData.map(item => (
          <MainChannelItem> 
         
            {item.icon}
            {item.text}
          </MainChannelItem>

         
        ))
        
        }
    </MainChannels>

<ChannelsContainer>

  <NewChannelContainer>

    <div>
      Channels
    </div>
  <AddIcon/>

  </NewChannelContainer>


</ChannelsContainer>



 <ChannelsList>

   <Channel>

     # Channel 1
   </Channel>

   <Channel>

     # Channel 2
   </Channel>
 </ChannelsList>
    </Container>


  );
}

export default Siderbar;

const Container = styled.div`
  background-color: #3f0e40;


`
const WorkspaceContainer = styled.div`
  color: white;
  height: 64px;
  display: flex;
  align-items: center;
  padding-left: 19px;
  justify-content: space-between;
  border-bottom: 1px solid #532753;
`;
const Name = styled.div`

`;

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


const MainChannels = styled.div`
padding-top: 20px;

`;

const MainChannelItem = styled.div`


display:grid;
grid-template-columns: 15% auto;

padding-left:
margin-top: 10px;
color: rgb(188, 171, 188);
cursor: pointer;
padding-left: 19px;
:hover {
  background-color: #350d36;
}
`;


const ChannelsContainer = styled.div `
margin-top: 10px;
color: rgb(188, 171, 188);
`

const NewChannelContainer = styled.div `
display:flex;
justify-content: space-between;
align-items: center;
height: 28px;
padding-left: 19px;
padding-right: 12px;
`


const ChannelsList = styled.div `
color: rgb(188, 171, 188);
`

const Channel = styled.div `
height: 28px;
display: flex;
align-items: center;
padding-left: 19px;
cursor: pointer;
:hover {
  background-color: #350d36;
}
`