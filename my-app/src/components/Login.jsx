
import { useState } from "react"
import { useHistory } from "react-router"
import { Link } from "react-router-dom"
import { getAllUsers } from "../service"

import {StyledLoginInput} from '../styledComponents/StyledDivInput'

const Login = ({ setUser, user  }) => {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [error, setError] = useState('')

    const history = useHistory()
    
    return (
        <>
        
            <form onSubmit={(e) => {
                e.preventDefault()
                getAllUsers().then(res => {
                    let user = res.data.find(el => (el.username === username ) && el.password === password)
                    if(user){
                        setUser(user)
                        history.push('/Game')
                    }
                    else{
                       console.log('Wrong input data')
                       setError('Wrong input data')
                    }
                })
            }}>
                 <StyledLoginInput className='div-input'>
               
                <input className='input' value={username} type="text" placeholder="Username..." onChange={e => setUsername(e.target.value)}/>
                <input className='input' value={password} type="password" placeholder="Password..." onChange={e => setPassword(e.target.value)}/>
                <input className='btn-login' type="submit" value="Login" />
                
                 <Link className='not-registered' to='/register'>REGISTER HERE</Link>
                </StyledLoginInput>
                <h4 style={{fontSize:'25px',color:'#ff0505'} }>{error}</h4>
            </form>
          
        </>
    )
}

export default Login