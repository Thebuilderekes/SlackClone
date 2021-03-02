import React from 'react';
import styled from 'styled-components';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
function Header() {
    return (
        
        <Container>

            <Main>
     <AccessTimeIcon/>
     <SearchContainer>

        <Search>

            <input type = 'text' placeholder = 'Search..' style={{ width:"300px" }}/>

        </Search>

    </SearchContainer>
     <HelpOutlineIcon/>
    
            </Main>

            <UserContainer>
        <Name>
    Ekeopre
        </Name>

        <UserImage>
     <img src =" https://i.imgur.com/6VBx3io.png" alt =''/>

        </UserImage>

            </UserContainer>
        </Container>


    
    )
}

export default Header

const Container = styled.div`
background : #350d36;
color : white;
display: flex;
align-items: center;
justify-content: space-between;
position: relative;
z-idex: 10;
box-shadow: 0 1px 0 0 rgb(55 255 255 / 10%)

`
const Main = styled.div`
margin: 0 16px;
display: flex;


`

const SearchContainer = styled.div`
min-width: 400px;
margin-right: 16px;
margin-left: 16px;
justify-item: center;
`

const Search = styled.div`
box-shadow: inset 0 0 0 1px rgb(104 74 104);
width: 100%;
border-radius: 6px;



input{
    background-color: transparent;
    border: none;
    padding: 4px 8px;
    color: white;

}



input:focus {
  outline: none;

}
`
const UserContainer = styled.div`
 display: flex;
align-items: center;
padding-right: 16px;


`
const Name = styled.div`
padding-right: 16px;


`
const UserImage = styled.div`
width: 28px;
height: 28px;
border: 2px solid white;
border-radius: 3px;

img{
    width  : 100%;
}

`

const img = styled.div`
  color : white;
`