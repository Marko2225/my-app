import styled from "styled-components"

export const StyledLoginInput = styled.div `
box-shadow: 0px 3px 7px #353535;
//border:none;
border:1px solid white;
p:hover {
  color:white;
}
.btn-login {
   // border:1px solid white;
    background-color: rgb(131, 174, 175);
     display:flex;
     margin-top: 15px;
     padding: 8px 20px;
     margin-left: 5px;
     border-radius: 5px;
     outline: none;
     color: black;
     letter-spacing: 2px;
     font-weight:600;
     &:hover {
      background-color: #f8f8ff;
      color:#212121;
     }
    
 }
 .not-registered {
    position: absolute;
    left: 52%;
    text-decoration: none;
    color:black;
    letter-spacing: 1.5px;
    font-size: 20px;
    font-weight: 600;
    &:hover {
      color:#f8f8ff;
     }
  }
  
`











