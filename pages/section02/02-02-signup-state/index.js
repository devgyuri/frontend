import {useState} from 'react';

export default function SignUpStatePage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("valid email")

    function onChangeEmail(event) {
        setEmail(event.target.value)
    }

    function onChangePassword(event) {
        setPassword(event.target.value)
    }

    function onClickSignUp() {
        if(email.includes("@") === false) {
            // alert("invalid email address")
            // document.getElementById("myError").innerText = "invalid email address!"
            setEmailError("ERROR: invalid Email Address")
        } else {
            alert("Congratulation!")
        }
    }

    return (
        <div>
            email: <input type="text" onChange={onChangeEmail}/>
            <div id="myError">{emailError}</div>
            password: <input type="password" onChange={onChangePassword}/>
            <div></div>
            <button onClick={onClickSignUp}>sign up</button>
        </div>
    )

}