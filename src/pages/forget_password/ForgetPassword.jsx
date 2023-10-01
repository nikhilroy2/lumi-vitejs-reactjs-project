import React, { useState, useEffect } from 'react';
import '../../styles/_FormStyle.scss';
import { FormInputField } from '../../components/FormInputField';
import { Link } from 'react-router-dom';

// icon
import QsIcon from '../../assets/icons/qs.svg';
import EnvelopIcon from '../../assets/icons/envelop.svg';
import PasswordShowIcon from '../../assets/icons/passwordShow.svg';
import EditIcon from '../../assets/icons/edit.svg';
import KeyIcon from '../../assets/icons/key.svg';
import SmallLogoIcon from '../../assets/icons/lumi-h-2.svg'

function ForgetPassword(props) {

    // ............Email Control...........
    const [isEmailLabel, setIsEmailLabel] = useState(false)
    const handleEmailFocus = () => {
        setIsEmailLabel(true)
    }
    const handleEmailBlur = (e) => {
        if (String(e.target.value).length < 1) {
            setIsEmailLabel(false);
        }
    }



    // ............Password Control...........
    const [isPasswordLabel, setIsPasswordLabel] = useState(false)
    const handlePasswordFocus = () => {
        setIsPasswordLabel(true)
    }
    const handlePasswordBlur = (e) => {
        if (String(e.target.value).length < 1) {
            setIsPasswordLabel(false);
        }
    }


    return (
        <div className='min-h-[100vh] flex items-center justify-center'>
            <div className="container_wrapper container_padding">
                {/* <h1>
                    Logim
                </h1> */}
                <div className="my-8 flex justify-center">
                    <img src={SmallLogoIcon} className='h-20' alt="" />
                </div>
                <div className="w-full h-full max-w-[530px] lg:!w-[530px] min-h-[502px] shadow-card rounded-3xl mx-auto my-5 sm:p-10 p-8">
                    <form autoComplete='off' action="#" className="login_wrapper mb-8">
                        <div className="form_header text-center mb-8">
                            <p className='tracking-[.25rem] text-subheading text-xxs text-lu-dark-4 sm:text-xs font-demi uppercase leading-4 font-bold'>
                                CUSTOMER LOGIN
                            </p>
                            <h2 className='text-[2.25rem] text-lu-dark-2 font-bold'>
                                Forgotten Password
                            </h2>
                        </div>
                        <div className="form_body mb-8">
                            <FormInputField isLabelActive={isEmailLabel}
                                handleFocus={handleEmailFocus}
                                handleBlur={handleEmailBlur}
                                HelperIcon={EnvelopIcon}
                                groupClass="mb-[1rem]"
                                labelName="Your email address"
                                inputType="email"
                            ></FormInputField>

                        </div>
                        <div className="form_footer">
                            <button className="bg-lu-primary-2 hover:bg-lu-primary text-lu-white outline-none focus:outline-none leading-sm flex justify-center items-center relative bg-base-pink text-white focus-yellow active:shadow-button-active  active:bg-pink-600  px-10 py-4 text-xl w-full rounded-full">
                                <span className>Reset Password</span>
                            </button>
                        </div>
                    </form>

                    <hr className="shadow-lg box-content border-base-purple bg-base-purple h-px" style={{ width: '100%', borderColor: 'rgb(248, 249, 251)', background: 'rgb(248, 249, 251)' }} />


                    <div className="form_helper mt-12">
                        <div className="flex items-center gap-3 flex-wrap justify-between">
                            <div className="content flex items-center gap-3 text-sm">
                                <img src={QsIcon} alt="" />
                                <Link to="/hub/login">
                                    <b>Back to Login</b>
                                </Link>
                                <svg width={1} height={20} viewBox="0 0 1 20" fill="none"><path opacity="0.5" fill="#8FA6AA" d="M0 0h1v20H0z" /></svg>

                            </div>
                            <div className="content flex items-center text-sm">
                                <img src={EditIcon} alt="" />
                                &nbsp; Not registered? &nbsp;
                                <Link to="/apply">
                                    <b> Sign up now</b>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default ForgetPassword;

