import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';


const Login = () => {
    const captchaRef = useRef()
    const [disabled, setDisabled] = useState(true)
    const { user, signIn } = useContext(AuthContext)


    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value;
        const password = form.password.value
        // console.log(email, password)
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })

    }

    const handleCaptcha = () => {
        const result = captchaRef.current.value;
        if (validateCaptcha(result) == true) {
            setDisabled(false)
        }

        else {
            alert('Captcha Does Not Match');
        }
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-center">Login now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input type="password" ref={captchaRef} name="captcha" placeholder="Type the captcha above" className="input input-bordered" required />

                            <button onClick={handleCaptcha} className="btn btn-outline btn-xs mt-2">Validate</button>

                        </div>
                        <div className="form-control mt-6">
                            <input disabled={disabled} className="btn btn-primary text-white" type="submit" value="Login" />
                        </div>
                    </form>

                    <Link to='/signup'>
                       <p className='text-lg font-semibold text-red-600 p-5'>New here!!! Create a new account</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;