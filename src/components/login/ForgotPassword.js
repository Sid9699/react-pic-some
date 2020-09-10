import React,{useState} from 'react';
import fire from '../../config/fire';
import './ForgotPassword.css';
import cross from "../../images/cross.png";

function ForgotPassword({toggleForget,setToggleForget}){

    const [recoveryEmail, setRecoveryEmail] = useState('');

    const resetPassword = (e) => {
        e.preventDefault();
        fire.auth().sendPasswordResetEmail(recoveryEmail)
            .then(e=>{
                alert('Password reset mail has been sent to your email address.');
                setToggleForget(false)
            })
            .catch(e=>{
                alert('An error occoured while reseting password.');
            })
    }

    return (
        <div style={{ display: toggleForget? "flex":"none"}} className='popup'>
            <div className='popup-content'>
                <img className='cross' src={cross} onClick={()=>{ setToggleForget(false)}} alt='cross' />
                <h2>Forgot Password</h2>
                <form onSubmit={resetPassword}>
                    <input 
                        type='text'
                        name='recoverEmail'
                        placeholder='Email'
                        value={recoveryEmail}
                        onChange={e=>setRecoveryEmail(e.target.value)}
                    /><br/><br/>
                    <button>Continue</button>
                </form>
            </div>
        </div>
    )
}

export default ForgotPassword;