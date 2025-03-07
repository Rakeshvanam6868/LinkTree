import React, { useState } from 'react'

import RightSideImage from '../../assets/regsiter_side_right.png';
import CoreButton from '../../components/CoreButton';
import CoreInput from '../../components/CoreInput';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import ApiService from '../services/ApiService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Register() {

    const navigation = useNavigate()

    const [username, setUsername] = useState<string>('')

    const [email, setEmail] = useState<string>('')

    const [password, setPassword] = useState<string>('')

    const [showPassword, setShowPassword] = useState<boolean>(false)

    const [loading, setLoading] = useState<boolean>(false)

    const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()

        setLoading(true)

        ApiService.post('auth/register', {
            "username": username,
            "email": email,
            "password": password
        })
        .then((response) => {

            setLoading(false)

            toast.success('Account created successfully!', {
                position: toast.POSITION.TOP_RIGHT,
                delay: 3000
            });

            navigation('/login')

        })
        .catch((error) => {

            console.log(error)

            setLoading(false)

            toast.error('Unexpected error occurred, please try again!', {
                position: toast.POSITION.TOP_RIGHT,
                delay: 3000
            });

        })
    }

    return (
        <div className="w-full grid grid-cols-5">

            <div className="col-span-3 order-1">

                <div className='px-10 py-10'>
                    <svg className='w-auto h-6' style={{ display: 'block', width: 'auto' }} role="icon" height="100%" viewBox="0 0 80 17" fill="none" xmlns="http://www.w3.org/2000/svg" aria-labelledby="title desc"><title>Linktree Logo</title><desc>Linktree Logo Symbol and Word Mark</desc><path d="M0 1.72687H2.25964V13.6313H8.50582V15.7244H0V1.72687ZM10.7287 1.72687C10.9121 1.72444 11.0941 1.75816 11.2644 1.82609C11.4348 1.89402 11.59 1.99484 11.7214 2.12278C11.8528 2.25073 11.9576 2.4033 12.03 2.57178C12.1024 2.74026 12.1409 2.92135 12.1433 3.1047C12.1433 3.47987 11.9943 3.83967 11.729 4.10496C11.4637 4.37024 11.1039 4.51928 10.7287 4.51928C10.3536 4.51928 9.99375 4.37024 9.72847 4.10496C9.46318 3.83967 9.31415 3.47987 9.31415 3.1047C9.31491 2.92087 9.3523 2.73903 9.42412 2.56981C9.49594 2.40058 9.60076 2.24736 9.73245 2.11909C9.86414 1.99082 10.0201 1.89008 10.1911 1.82273C10.3622 1.75539 10.5449 1.7228 10.7287 1.72687ZM9.62645 5.63991H11.7942V15.7244H9.62645V5.63991ZM13.0618 5.63991H15.2296V7.03612C15.8714 5.97059 16.9737 5.36435 18.425 5.36435C20.7765 5.36435 22.2462 7.20146 22.2462 10.1225V15.7244H20.0784V10.3062C20.0784 8.41395 19.2517 7.34843 17.7587 7.34843C16.1249 7.34843 15.2247 8.46906 15.2247 10.4899V15.7244H13.057L13.0618 5.63991ZM23.3852 1.72687H25.553V10.5817L29.5946 5.63991H32.3135L27.9963 10.692L32.3135 15.7244H29.5946L25.553 10.8022V15.7244H23.3852V1.72687ZM33.1586 3.07408H35.3631V5.64604H37.9351V7.44641H35.3631V12.6442C35.3631 13.3068 35.7673 13.7109 36.3919 13.7109H37.8445V15.7305H36.098C34.2058 15.7305 33.1586 14.6099 33.1586 12.6271V3.07408ZM38.8904 5.64604H41.0582V6.89527C41.5909 5.93998 42.4911 5.37047 43.5934 5.37047C43.8478 5.35888 44.1024 5.38993 44.3466 5.46233V7.48315C44.0813 7.42486 43.8097 7.40017 43.5383 7.40966C41.94 7.40966 41.0582 8.75688 41.0582 11.0655V15.7305H38.8904V5.64604ZM49.4158 5.37047C51.804 5.37047 54.3944 6.82179 54.3944 10.9185V11.2125H46.6234C46.79 13.0116 47.8359 14.0037 49.5811 14.0037C50.8304 14.0037 51.8959 13.3239 52.1347 12.3882H54.3393C54.1188 14.4078 52.0245 16.0061 49.5811 16.0061C46.4581 16.0061 44.4936 13.9669 44.4936 10.6797C44.4936 7.75259 46.3858 5.36435 49.4158 5.36435V5.37047ZM52.0796 9.41211C51.7673 8.16288 50.7936 7.37292 49.4158 7.37292C48.0931 7.37292 47.1574 8.18125 46.79 9.41211H52.0796ZM60.2731 5.37047C62.6614 5.37047 65.2517 6.82179 65.2517 10.9185V11.2125H57.4807C57.646 13.0116 58.6932 14.0037 60.4385 14.0037C61.6877 14.0037 62.7532 13.3239 62.992 12.3882H65.1966C64.9761 14.4078 62.8818 16.0061 60.4385 16.0061C57.3154 16.0061 55.3497 13.9669 55.3497 10.6797C55.3497 7.75259 57.2419 5.36435 60.2731 5.36435V5.37047ZM62.9369 9.41211C62.6246 8.16288 61.651 7.37292 60.2731 7.37292C58.9504 7.37292 58.0135 8.18125 57.646 9.41211H62.9369Z" fill="#000000"></path><path d="M65.7852 5.33374H69.6615L66.9058 2.70668L68.4306 1.13901L71.0577 3.83956V0H73.3357V3.83956L75.9627 1.14513L77.4863 2.70668L74.7319 5.32762H78.607V7.49541H74.7098L77.4827 10.1898L75.9627 11.7208L72.1967 7.93631L68.4306 11.7208L66.9058 10.196L69.6798 7.50153H65.7852V5.33374ZM71.0515 10.6062H73.3296V15.7502H71.0515V10.6062Z" fill="#43E660"></path></svg>
                </div>

                <form onSubmit={(event) => handleRegister(event)}>

                    {!showPassword && <div className="px-10 py-10 mx-auto max-w-3xl justify-center space-y-6">

                        <h3 className='text-5xl font-bold'>Create your account</h3>

                        <p className='text-gray-500'>Choose your Linktree username. You can always change it later.</p>

                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-gray-500">
                                linktr.ee/
                            </div>
                            <input required={true} value={username} onChange={(e) => setUsername(e.target.value)} placeholder="yourname" type="text" className="bg-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-20 p-4" />
                        </div>

                        <CoreInput
                            required={true}
                            type="email" label="Email" value={email} onChange={(e) => setEmail(e.target.value)}
                        />

                        <p className='text-gray-500'>By clicking <span className='font-medium'>Create account</span>, you agree to Linktree's <span className="underline">Terms and Conditions</span> and confirm you have read our <span className="underline">Privacy Notice</span>. You may receive offers, news and updates from us.</p>

                        <CoreButton
                            text={'Create account'}
                            type={'button'}
                            color={'primary'}
                            loading={false}
                            disabled={username === '' || email === ''}
                            onClick={() => setShowPassword(!showPassword)}
                        />

                        <div className='flex items-center space-x-1 justify-center'>
                            <p className='text-sm'>Already have account?</p>
                            <Link to={'/login'} className='text-purple-600 underline font-normal text-sm'>
                                Login
                            </Link>
                        </div>
                    </div>}

                    {showPassword && <div className="px-10 py-10 mx-auto max-w-3xl justify-center space-y-6">

                        <button onClick={() => setShowPassword(!showPassword)} className='text-purple-600 font-medium flex items-center'>
                            <ChevronLeftIcon className='h-5 w-5 mr-2' />
                            Back
                        </button>

                        <h3 className='text-5xl font-bold'>Enter a password</h3>

                        <p className='text-gray-500'>Choose a strong password with at least 8 characters.</p>

                        <CoreInput
                            required={true}
                            type="password" label="Password" value={password} onChange={(e) => setPassword(e.target.value)}
                        />

                        <CoreButton
                            text={'Create account'}
                            type={'submit'}
                            color={'primary'}
                            loading={loading}
                            disabled={password === ''}
                        />

                    </div>}

                </form>

                <div className="mt-20">
                    <p className="text-sm text-gray-500 text-center">This site is protected by reCAPTCHA and the <span className="underline">Google Privacy Policy</span> and <span className="underline">Terms of Service</span> apply.</p>
                </div>
            </div>

            <div className="w-full col-span-2 order-2 justify-right">
                <img src={RightSideImage} alt="" className="w-full h-screen object-cover justify-end" />
            </div>

        </div>
    )
}
