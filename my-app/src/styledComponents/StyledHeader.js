import styled from 'styled-components'
const StyledHeader = styled.div`
    .container{
        padding:30px;
        font-size:2rem;
        display: flex;
        justify-content: space-around;
        font-weight:800
    }
    a{
        color:#74b9ff;
        border-radius:5px;
        text-decoration: none;
    }
    a:hover{
        color: #00B894;
        transition: 0.3s ease; 
    }
   
 button {
   // border:1px solid white;
    background-color: red;
    cursor: pointer;
    &:hover {
      background-color: #f8f8ff;
      color:#212121;
     }
 }
`
export default StyledHeader