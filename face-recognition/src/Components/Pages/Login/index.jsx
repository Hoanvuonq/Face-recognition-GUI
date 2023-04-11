import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderHome from '../../Layouts/Header';

import Google from '../../../Assets/img/google.png';
import Facebook from '../../../Assets/img/facebook.png';
import Twitter from '../../../Assets/img/twitter.png';

function Login() {
    const [isChecked, setIsChecked] = useState(false);

    function handleCheckboxChange() {
        setIsChecked(!isChecked);
    }
    return (
        <>
            <HeaderHome />
            <section className="login-page">
                {/* <div className="bg-gra" /> */}
                <div className="login">
                    <div className="content-login">
                        <div className="content-center">
                            <h1>Sign In Now</h1>
                            <p className="title-note-login">Login to your account for a faster checkout.</p>
                            <div className="logo-content-login">
                                <button className="btn-logo-login">
                                    <img src={Google} alt="Google" />
                                </button>
                                <button className="btn-logo-login">
                                    <img src={Facebook} alt="Facebook" />
                                </button>
                                <button className="btn-logo-login">
                                    <img src={Twitter} alt="Twitter" />
                                </button>
                            </div>
                            <div className="title-sig-gmail">
                                <span></span>
                                <p className="title-p">Or, sign in with your email</p>
                            </div>
                            <form>
                                <div className="cont-log email-login">
                                    <label htmlFor="email">Email</label>
                                    <input className="input-email" type="email" name="email" id="email" placeholder="Enter your email" />
                                </div>
                                <div className="cont-log password-login">
                                    <label htmlFor="password">Password</label>
                                    <input className="input-password" type="password" name="password" id="password" placeholder="Enter your password" />
                                </div>

                                <div className="cont-forgot">
                                    <div className="btn-checkout">
                                        <label htmlFor="checkboxLabelOne" className="lab-checkout">
                                            <div className="relative">
                                                <input className="input-checkout" type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
                                            </div>
                                            Keep me signed in
                                        </label>
                                    </div>
                                    <Link to={'vascript:void(0)'} className="link-forgot">
                                        Forgot Password?
                                    </Link>
                                </div>

                                <Link className="link-btn-sig" to={'/Home'}>
                                    <button className="btn-submit">Sign in</button>
                                </Link>
                            </form>

                            <p className="title-footer">
                                Don't you have an account?
                                <Link to={'/Register'} className="link-sign-up">
                                    Sign up
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Login;
