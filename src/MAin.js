import React, { useState } from 'react'
import './main.css'
import { Input } from 'antd'
import { Checkbox } from 'antd'
const Main = () => {
    const [email, setemail] = useState()
    const [Password, setpassword] = useState()
    const InputEvent = (e) => {
        setemail(e.target.value)
    }
    const InputEvent2 = (e) => {
        setpassword(e.target.value)
    }
    const post = (e) => {
        e.preventDefault()
        if (email && Password) {
            const responce = fetch('https://reqres.in/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    Password,
                }),
            })
            if (responce) {
                alert('data stored successfully')
            }
        } else {
            alert('please fill the required data')
        }
    }
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
        value = { Password }
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

// fetch('https://reqres.in/api/login', {
//             method: 'POST',
//             headers: {
//                 Accept: 'applicaton/json',
//                 'content-Type': 'application/Json',
//             },
//             body: JSON.stringify(data),
//         }).then((result) => {
//             console.warn('result', result)
//         })