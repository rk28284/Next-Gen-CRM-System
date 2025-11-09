import axios from "axios"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./actionTypes"

export const login = (newUser)=>(dispatch) => {
  dispatch({type:LOGIN_REQUEST})

    return axios.post(`http://localhost:8080/api/login`,newUser).then((res)=>{
        dispatch({type:LOGIN_SUCCESS,payload:res.data.token})
       console.log(res.data);
    }).catch((err)=>{
        dispatch({type:LOGIN_FAILURE})
    })
};

export const register = (newUser)=>(dispatch) => {
console.log(newUser,"from newuser 1");

  dispatch({type:REGISTER_REQUEST})
  console.log(newUser,"from newuser 2");
    return axios.post(`http://localhost:8080/api/register`,newUser).then((res)=>{
        dispatch({type:REGISTER_SUCCESS})
       console.log(res.data);
    }).catch((err)=>{
        dispatch({type:REGISTER_FAILURE})
    })
};
