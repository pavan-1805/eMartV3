import {  Container, makeStyles } from '@material-ui/core'
import React, { useState, useContext } from 'react'
import { Redirect } from 'react-router-dom'
import GoogleLogin from 'react-google-login'
import { useSelector, useDispatch } from 'react-redux';

const useStyles = makeStyles((theme)=>({
    grid : {
        marginTop : 50,
        maxHeight : 500,
        maxWidth : 400,
        backgroundColor : "#F5F5F5"
    },
    media : {
        maxHeight : 200,
        maxWidth : 150,
    },
    loginButton : {
        marginTop : 60,
        display : "flex",
        justifyContent : "center",
        alignItems : "center",
        height : "30em",        
        padding : "10px"
            
    },
   
    
}))
function Login(props) {
    const classes = useStyles()
    const [userLoginStatus, setUserLoginStatus] = useState(false)
    const State = useSelector((state)=>state)
    console.log(State);
    const dispatch= useDispatch();

    const responseGoogle = (response) => {
        const USERDATA = {
            userInfo : response.profileObj,
            firstName : response.profileObj.givenName,
            middleName :response.profileObj.familyName,
            email : response.profileObj.email,
            imageUrl : response.profileObj.imageUrl
        }
        const Data = JSON.stringify(response.profileObj)
        localStorage.setItem("userData",Data)
        setUserLoginStatus(true)    
        dispatch({type:"USER-DATA",payload : {USERDATA}})
        
        
    }
    props.sendData(userLoginStatus)
    return (
        <div>
            
            
            {
                userLoginStatus === false ?
                <Container className={classes.loginButton}>
                <GoogleLogin 
                className={classes.button}
                clientId="878840935706-dilnflg1aa7qk7lb3m30ipngvb954p2l.apps.googleusercontent.com"
                buttonText="login with Google"                
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
                    
                     
            />
            </Container>
            : 
            <Redirect to="/userdetails" />
            
            
            }

                    
        </div>
    )
}

export default Login
