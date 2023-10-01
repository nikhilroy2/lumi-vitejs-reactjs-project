import React, { useState, useEffect } from 'react';
import { FormInputField } from '../../components/FormInputField';
// icon
import QsIcon from '../../assets/icons/qs.svg';
import EnvelopIcon from '../../assets/icons/envelop.svg';
import PasswordShowIcon from '../../assets/icons/passwordShow.svg';
import EditIcon from '../../assets/icons/edit.svg';
import KeyIcon from '../../assets/icons/key.svg';
import SmallLogoIcon from '../../assets/icons/lumi-h-2.svg'
import BarIcon from '../../assets/icons/bar.svg';
import PhoneIcon from '../../assets/icons/phone.svg';
import CheckWhiteIcon from '../../assets/icons/check_white.svg';

function SignupForm(props) {


    // ............FirstName Control...........
    const [isFirstNameLabel, setIsFirstNameLabel] = useState(false)
    const handleFirstNameFocus = () => {
        setIsFirstNameLabel(true)
    }
    const handleFirstNameBlur = (e) => {
        if (String(e.target.value).length < 1) {
            setIsFirstNameLabel(false);
        }
    }



    // ............LastName Control...........
    const [isLastNameLabel, setIsLastNameLabel] = useState(false)
    const handleLastNameFocus = () => {
        setIsLastNameLabel(true)
    }
    const handleLastNameBlur = (e) => {
        if (String(e.target.value).length < 1) {
            setIsLastNameLabel(false);
        }
    }


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


    // ............Phone Control...........
    const [isPhoneLabel, setIsPhoneLabel] = useState(false)
    const handlePhoneFocus = () => {
        setIsPhoneLabel(true)
    }
    const handlePhoneBlur = (e) => {
        if (String(e.target.value).length < 1) {
            setIsPhoneLabel(false);
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


    const [isTerm, setIsTerm] = useState(false);
    const termHandle = (e) => {
        setIsTerm(e.target.checked)
    }

    return (
        <React.Fragment>
            <div className="container_wrapper container_padding pt-8">
                <div className="max-w-[490px] mx-auto">

                    <div className="content_header text-center">
                        <h2 className="font-bold text-base-blue text-mobile-heading-two mobile-leading-heading-two sm:text-heading-two sm:leading-heading-two leading-8 md:text-2xl select-auto">
                            About you
                        </h2>
                    </div>

                    <div className="content_body bg-white max-w-[490px] shadow-card rounded-3xl sm:p-10 p-8 md:w-[490px] min-h-[410px] mt-8">

                        <form action="">

                            <h6 className='text-copy  mb-[.75em]'>
                                Personal details
                            </h6>


                            <div className="flex items-center gap-4">
                                <FormInputField isLabelActive={isFirstNameLabel}
                                    handleFocus={handleFirstNameFocus}
                                    handleBlur={handleFirstNameBlur}
                                    HelperIcon={BarIcon}
                                    groupClass="mb-[1rem]"
                                    labelName="Your first name"
                                    inputType="text"
                                ></FormInputField>

                                <FormInputField isLabelActive={isLastNameLabel}
                                    handleFocus={handleLastNameFocus}
                                    handleBlur={handleLastNameBlur}
                                    HelperIcon={BarIcon}
                                    groupClass="mb-[1rem]"
                                    labelName="Your last name"
                                    inputType="text"
                                ></FormInputField>
                            </div>

                            <FormInputField isLabelActive={isEmailLabel}
                                handleFocus={handleEmailFocus}
                                handleBlur={handleEmailBlur}
                                HelperIcon={EnvelopIcon}
                                groupClass="mb-[1rem]"
                                labelName="Your email address"
                                inputType="email"
                            ></FormInputField>


                            <FormInputField isLabelActive={isPhoneLabel}
                                handleFocus={handlePhoneFocus}
                                handleBlur={handlePhoneBlur}
                                HelperIcon={PhoneIcon}
                                groupClass="mb-[1rem]"
                                labelName="Your phone number"
                                inputType="number"
                                inputClass="hide_arrow"
                            ></FormInputField>


                            <FormInputField isLabelActive={isPasswordLabel}
                                handleFocus={handlePasswordFocus}
                                handleBlur={handlePasswordBlur}
                                HelperIcon={PasswordShowIcon}
                                groupClass="mb-[1rem]"
                                labelName="Your password"
                                inputType="password"
                            ></FormInputField>


                            <div className="term_wrapper py-3">
                                <div className="flex ">
                                    <input onChange={termHandle} type="checkbox" name="term_agree" id="term_agree" className='hidden' />
                                    {/* custom checkbox */}

                                    <label htmlFor='term_agree' className={`min-w-[1.75rem] h-[1.75rem] flex justify-center items-center bg-opacity-50 ${isTerm ? 'bg-base-blue' : 'hover:bg-gray-200'} mr-[1rem] border cursor-pointer rounded`}>
                                        <img src={CheckWhiteIcon} className={`h-[0.75rem] w-[1rem] ${isTerm ? '' : 'hidden'}`} alt="icon" />
                                    </label>


                                    <label htmlFor="term_agree" className='text-sm text-copy cursor-pointer'>
                                        <span>I have read and agree to the Lumi Funding </span>
                                        &nbsp;
                                        <a href="/tos">
                                            Terms of Service
                                        </a>&nbsp;

                                        <span>. All information that I provide is current and accurate and I have authority to provide these details. I understand that Lumi Funding collects and will handle my personal information in accordance with its

                                        </span>
                                        &nbsp;


                                        <a href="https://www.lumi.com.au/privacy_policy" target="_blank" className="font-demi text-base-blue" rel="noreferrer">Privacy Policy</a>

                                    </label>
                                </div>
                            </div>


                            <div className="form_footer">
                                <button className="bg-lu-primary-2 hover:bg-lu-primary text-lu-white outline-none focus:outline-none leading-sm flex justify-center items-center relative bg-base-pink text-white focus-yellow active:shadow-button-active  active:bg-pink-600  px-10 py-4 text-xl w-full rounded-full">
                                    <span className>Continue</span>
                                </button>
                            </div>

                        </form>
                    </div>
                </div>

            </div>

        </React.Fragment>
    );
}

export default SignupForm;