import axios from "axios";
const registerNewUser=()=>dispatch=>{
    dispatch({type:"USER_REGISTER_REQUEST"}) ;
    axios
      .post("api/user/register")
      .then(res =>{
        dispatch({type:"USER_REGISTER_SUCCESS"}) ;
        console.log(res.data)

      } )
      .catch(err =>  dispatch({type:"USER_REGISTER_FAILED"}) );
}


const loginUser=()=>dispatch=>{
    dispatch({type:"USER_LOGIN_REQUEST"}) ;
    axios
      .post("api/user/login")
      .then(res =>{
        dispatch({type:"USER_LOGIN_SUCCESS"}) ;
        console.log(res.data)

      } )
      .catch(err =>  dispatch({type:"USER_LOGIN_FAILED"}) );
}