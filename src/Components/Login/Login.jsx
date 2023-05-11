import React, { useContext, useState } from 'react';
import loginPicture from '../../../public/assets/images/login/login.svg'
import { UserContext } from '../../UserProvider/UserProvider';

const Login = () => {

    let {signIn} = useContext(UserContext)
    let [err, setErr] = useState(null)

    let login = event =>{
        event.preventDefault();
        let email = event.target.email.value;
        let password = event.target.password.value;
        console.log(email,password);
        setErr(null)
        signIn(email, password)
        .then(user=>{
            let getUser = user.user;
            console.log(getUser);
        })
        .catch(err=>{
            setErr(err.message)
        })
    }
    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row gap-24">
                    <div className="text-center lg:text-left w-1/2">
                        <img src={loginPicture} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={login}>
                            <div className="card-body">
                                <h1 className='text-4xl text-center font-semibold'>Login</h1>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                    <label className="label">
                                        <p className='text-error'>{err}</p>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                 
                                    <input type="submit" className='btn btn-error' value='Login' />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;