import React,{ useState} from 'react';
import fire from "../../config/fire"
import './SignIn.css'
import ForgotPassword from "./ForgotPassword";

function SignIn(props){
    const [existingUser, setExistingUser] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] =  useState('');
    const [contactNo, setContactNo] = useState('');
    const [toggleForget, setToggleForget] = useState(false);

    const login = (e) => {
    e.preventDefault();
    fire
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((e) => {})
        .catch((e) => {
        console.log(e);
        });
    };
    
    const signUp = (e) => {
    e.preventDefault();
    fire
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((e) => {
            fire.firestore().collection('Users').doc(fire.auth().currentUser.uid).set({
                name,
                email,
                contactNo,
            })
        })
        .catch((e) => {
        console.log(e);
        });
    };
    
    const toggleSignIn = () => {
        setExistingUser(prevUser=>!prevUser);
    };
    
    return (
        <>
        <div className='sign-in'>
            <div className='form'>
                <h1 className='login-heading'>
                    {existingUser? "Login":"Sign Up"}
                </h1>
                <form className='login-form' onSubmit={existingUser? login: signUp}>
                    <input 
                        className='login-input'
                        type='text'
                        name='email'
                        placeholder='Email'
                        value={email}
                        onChange={e=>setEmail(e.target.value)}
                    />
                    <input 
                        className='login-input'
                        type='password'
                        name='password'
                        placeholder='Password'
                        value={password}
                        onChange={e=>setPassword(e.target.value)}
                    />

                    {
                        !existingUser? 
                        (
                            <>
                                <input
                                    className='login-input'
                                    type='text'
                                    name='name'
                                    placeholder='Name'
                                    value={name}
                                    onChange={e=>setName(e.target.value)}
                                />
                                <input 
                                    className='login-input'
                                    type='number'
                                    name='contactNo'
                                    placeholder='Mobile No'
                                    value={contactNo}
                                    onChange={e=>setContactNo(e.target.value)}
                                />
                            </>
                        ):
                        <a href='#' className='forgot-password-text' onClick={()=>{setToggleForget(true)}}>Forgot Password?</a>
                    }
                    
                    <p className='login-toggle-text'>
                        {existingUser? 'Not a user? ' : 'Already a user? '}
                        <a 
                            className='toggle-sign-in'
                            href='#'
                            onClick={toggleSignIn}
                        >
                            {existingUser?"Sign Up": "Log In"}
                        </a>
                    </p>
                    <button className='login-button'>
                        {existingUser? "Login" : "Sign Up"}
                    </button>
                </form>
            </div>
        </div>
        <ForgotPassword toggleForget={toggleForget} setToggleForget={setToggleForget} />
        </>
    )
}

export default SignIn;