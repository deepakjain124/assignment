import React, { useState, useEffect } from 'react'
import './main.css'
import { Input } from 'antd'
import { Checkbox } from 'antd'

const Main = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const InputEvent = (e) => {
        setEmail(e.target.value)
    }
    const InputEvent2 = (e) => {
        setPassword(e.target.value)
    }

    console.log(password)
        //   const post = (e) => {
        //     e.preventDefault();
        //     if (email && Password) {
        //       const responce = fetch("https://reqres.in/api/login", {
        //         method: "POST",
        //         headers: {
        //           "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify({
        //           email,
        //           Password,
        //         }),
        //       });
        //       if (responce) {
        //         alert("data stored successfully");
        //         setEmail("");
        //         setPassword("");
        //       }
        //     } else {
        //       alert("Missing Password");
        //       setEmail("");
        //       setPassword("");
        //     }
        //   };

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    }

    const post = (e) => {
        e.preventDefault()
        if (email && password) {
            fetch('https://reqres.in/api/login', requestOptions)
                .then((response) => {
                    return response.json()
                })
                .then((data) => {
                    console.log(data)
                    if (data.token) {
                        setEmail('')
                        setPassword('')
                        alert('user login succesfully')
                    } else {
                        alert('User not found')
                    }
                })
                .catch((error) => {
                    console.log(error)
                    alert('Api is not vallid')
                })
        } else {
            alert('Fill details properly')
        }
    }

    // useEffect(() =>{
    //     fetch("https://reqres.in/api/login", requestOptions)
    //     .then(response => {
    //         return response.json()
    //     }).then(data => console.log(data));
    // }, []);

    // useEffect(() => {
    //     fetch("https://reqres.in/api/login")
    //     .then(response => {
    //         return response.json();
    //     }).then((data) => data.data.map(value => console.log(value.name)));
    // }, [])
    return ( <
        >
        <
        div className = "circle" > < /div>{' '} <
        div className = "navbar" >
        <
        div className = "left" >
        <
        h1 > ATools < /h1>{' '} <
        /div>{' '} <
        div className = "right" >
        <
        button > Start Free Trial < /button>{' '} <
        button className = "second" > Login < /button>{' '} <
        /div>{' '} <
        /div>{' '} <
        div className = " form" >
        <
        h1 > Welcom Back < /h1> <p> Sub - title text goes here </p > { ' ' } <
        Input placeholder = "Email Address*"
        size = "large"
        onChange = { InputEvent }
        value = { email }
        />{' '} <
        br / >
        <
        Input placeholder = "Password*"
        size = "small"
        onChange = { InputEvent2 }
        value = { password }
        />{' '} <
        br / >
        <
        button onClick = { post } > Login < /button>{' '} <
        div className = "checking" >
        <
        p > Remember Password < /p> <p> Forgot Password ? </p > { ' ' } <
        /div>{' '} <
        /div>{' '} <
        />
    )
}
export default Main