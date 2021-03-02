//service.js
// host through github 'https://my-json-server.typicode.com/Marko2225/users-api/users

import axios from 'axios'

export const getAllUsers = () => axios.get('https://my-json-server.typicode.com/Marko2225/users-api/users')

export const registerUser = (username,email,password) => axios.post('http://localhost:3005/users',{username,email,password})
