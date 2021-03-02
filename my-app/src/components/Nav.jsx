
import StyledHeader from '../styledComponents/StyledHeader'
import {  Link } from "react-router-dom"

const Nav = ({ user, setUser}) => {
    return (
        <>
              
        {/* <Link to="/Home">Home</Link> */}
        {user ?
        <StyledHeader>
          <div className="container">
            <Link to="/Game">Game</Link>
            <span>Username: {user.username}</span>
            <button onClick={() => setUser(null)}>LOGOUT</button>
           
          </div>
          </StyledHeader>
          :
          <StyledHeader>
          < div className="container">
            <Link to="/Login">Login</Link>
            <Link to="/Register">Register</Link>
          </div>
          </StyledHeader>
        }
    
         
        </>
    )
}

export default Nav