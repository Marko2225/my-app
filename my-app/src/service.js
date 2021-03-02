//service.js
import axios from 'axios'

export const getAllUsers = () => axios.get('http://localhost:3005/users')

export const registerUser = (username,email,password) => axios.post('http://localhost:3005/users',{username,email,password})
