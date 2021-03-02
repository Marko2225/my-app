

import { useState } from "react"

import { registerUser } from "../service"
import { useRegister } from "../useRegister"
import { getAllUsers } from '../service'
import { useHistory } from 'react-router-dom'

const Error = ({ error, setError }) => {
    setTimeout(() =>
        setError(''), 5000)
    return (
        <div>
            <p>{error}</p>
        </div>
    )
}


const validPassword = (password) => password.length >= 8
    && password.split('').some(char => !isNaN(Number(char)))
    && password.split('').some(char => (char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z'))


const Register = () => {
    const [username, setUsername, email, setEmail, password, setPassword] = useRegister()
    const [error, setError] = useState('')
    const history = useHistory()

    const reset = () => {
        setPassword('')
        setUsername('')
        setEmail('')
        return
    }


    return (
        <form onSubmit={e => {
            e.preventDefault()
            if (username.length < 4) {
                setError('Username is too short')

            } else if (!validPassword(password)) {
                setError(` password 8 characters,\n  one letter, one number`)

            } else if (email === "") {
                setError('Email is invalid')

            } else {
                getAllUsers().then(res => {
                    if (!res.data.some(user => user.username === username && user.email === email)) {
                        registerUser(username, email, password).then(res => {
                            history.push('/Login')
                        })
                    } else {
                        setError('User already exists')
                        reset()
                    }
                })
            }
        }}>
            <div className='div-input'>
                <input className='input' value={username} type="text" placeholder="username..." onChange={e => setUsername(e.target.value)} />
                <input className='input' value={email} type="email" placeholder="email..." onChange={e => setEmail(e.target.value)} />
                <input className='input' value={password} type="password" placeholder="password..." onChange={e => setPassword(e.target.value)} />
                <input className='input' type="submit" value="Register" />
            </div>
            {/* <h4 style={{fontSize:'17px',color:'#ff0505'} }>{error}</h4> */}
            <div style={{ fontSize: '17px', color: '#ff0505' }}>
                <Error error={error} setError={setError} />
            </div>
        </form>

    )
}

export default Register