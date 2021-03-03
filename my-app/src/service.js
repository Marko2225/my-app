//service.js
// host through github 'https://my-json-server.typicode.com/Marko2225/users-api/users

import axios from 'axios'

//If you use this on localhost  use this to get full functionality of register form
//export const getAllUsers = () => axios.get('http://localhost:3005/users')

//use this json server when you host on GitHub your app through gh-pages ,
//but you can't add or delete users, you could just log in to play the game
export const getAllUsers = () => axios.get('https://my-json-server.typicode.com/Marko2225/users-api/users')


export const registerUser = (username,email,password) => axios.post('http://localhost:3005/users',{username,email,password})
