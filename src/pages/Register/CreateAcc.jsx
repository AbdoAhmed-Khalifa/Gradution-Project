import React, { useState } from 'react';
import NeedHelp from '../SignIn/NeedHelp';
import { useForm } from 'react-hook-form';
import { Toaster, toast } from 'sonner';
import { createUSer } from '../../firestore/firestore';
import { useNavigate } from 'react-router-dom';

export default function Register() {

  const navigate = useNavigate();
  const [working, setWorking] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const toggleWorking = () => {
    setWorking(!working);
  };

  // this is only a test try again mr:abdo


  const onSubmit = async (data) => {
    if (data !== 0) {
      try {
        const userCredential = await createUSer(data.emailOrPhone, data.ConfirmPassword); 
        toast.success('Sign In Successful');
        navigate('/login');
        console.log(userCredential);
      } catch (error) {

        if (error.code) {
          const errorMessage = handleFirebaseError(error.code);
          toast.error(errorMessage);
        } else {

          toast.error('An error occurred. Please try again later.');
        }
      }
    }
  };

  function handleFirebaseError(errorCode) {
    switch (errorCode) {
      case 'auth/weak-password':
        return 'Password is too weak. Please choose a stronger password.';
      case 'auth/email-already-in-use':
        return 'The email address is already in use by another account.';
     
      default:
        return 'An unknown error occurred.';
    }
  }


  const PasswordValidation = ConfirmPassword => {
    console.log(ConfirmPassword);
    const firstPass = getValues('Password');
    console.log(firstPass);

    if (firstPass !== ConfirmPassword) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <section className="flex flex-col items-center ">
          {/* Amazon Logo */}
          <img
            src="amazon-icon/Amazon_logo_dark.webp"
            className="mt-5 w-28"
            alt="Amazon Logo"
          />

          {/* Form Container */}

          <div className="flex flex-col border border-slate border-0.5 rounded-md p-10 max-w-xs mt-8 w-full ">
            <h1 className="mb-5 text-2xl font-semibold">Create Account</h1>
            {/* UserName */}
            <label htmlFor="UserName" className="mb-2">
              Your Name
            </label>
            <input
              {...register('UserName', {
                required: true,
                pattern: /([a-zA-Z]+\s*)+/,
                minLength: {
                  value: 5,  
                },
              })}
              id="UserName"
              name="UserName"
              type="text"
              className="w-full px-2 py-1 mb-4 border rounded-md outline-none border-slate-500 focus:ring-blue-700 focus:ring-1"
              placeholder="Email or mobile phone number"
            />
            {errors.UserName && errors.UserName.type === 'required' && (
              <p className="text-xs italic text-red-500">
                Please fill out this field.
              </p>
            )}
            {errors.UserName && errors.UserName.type === 'minLength' && (
              <p className="text-xs italic text-red-500">
                The Min Length is 10....
              </p>
            )}
            <Toaster position="top-center" richColors />

            {/* Email or Phone Input */}

            <label htmlFor="emailOrPhone" className="mb-2">
              Email or mobile phone number
            </label>
            <input
              {...register('emailOrPhone', {
                required: true,
                pattern: /^\S+@\S+$/i,
              })}
              id="emailOrPhone"
              name="emailOrPhone"
              type="text"
              className="w-full px-2 py-1 mb-4 border rounded-md outline-none border-slate-500 focus:ring-blue-700 focus:ring-1"
              placeholder="Email or mobile phone number"
            />
            {errors.emailOrPhone && errors.emailOrPhone.type === 'required' && (
              <p className="text-xs italic text-red-500">This is Required</p>
            )}
            {errors.emailOrPhone && errors.emailOrPhone.type === 'pattern' && (
              <p className="text-xs italic text-red-500">
                It Must contains @ character ....
              </p>
            )}

            {/*  */}

            <label htmlFor="Password" className="mb-2">
              Password
            </label>
            <input
              {...register('Password', {
                required: true,
                pattern: /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*$/,
              })}
              id="Password"
              name="Password"
              type="password"
              className="w-full px-2 py-1 mb-4 border rounded-md outline-none border-slate-500 focus:ring-blue-700 focus:ring-1"
              placeholder="Password"
            />
            {errors.Password && errors.Password.type === 'required' && (
              <p className="text-xs italic text-red-500">
                Please fill out this field.
              </p>
            )}
            {errors.Password && errors.Password.type === 'validate' && (
              <p className="text-xs italic text-red-500">
                Password Must Match Contains 8 Characters And One Special
                Character
              </p>
            )}

            {/* ReEnter Password */}

            <label htmlFor="ConfirmPassword" className="mb-2">
              {' '}
              Re-Enter Password
            </label>
            <input
              {...register('ConfirmPassword', {
                required: true,
                validate: PasswordValidation,
              })}
              id="ConfirmPassword"
              name="ConfirmPassword"
              type="password"
              className="w-full px-2 py-1 mb-4 border rounded-md outline-none border-slate-500 focus:ring-blue-700 focus:ring-1"
              placeholder="Password"
            />
            {errors.ConfirmPassword &&
              errors.ConfirmPassword.type === 'required' && (
                <p className="text-xs italic text-red-500">
                  Please fill out this field.
                </p>
              )}
            {errors.ConfirmPassword &&
              errors.ConfirmPassword.type === 'validate' && (
                <p className="text-xs italic text-red-500">
                  Password Must Match The Password U Provide
                </p>
              )}

            <button
              className="bg-[#ffd814]   hover:bg-[#ffc300] px-20
            border-none mb-4
            "
            >
              Continue
            </button>

            {/* Additional Options */}
            <div className="text-xs">
              <p className="text-xs font-200">
                By continuing, you agree to Amazon's{' '}
                <a
                  href="https://www.amazon.com/conditions"
                  target="_blank"
                  className="Links"
                >
                  Conditions of Use
                </a>{' '}
                and{' '}
                <a
                  href="https://www.amazon.com/privacy"
                  target="_blank"
                  className="Links"
                >
                  Privacy Notice
                </a>
                .
              </p>

              {/* Need Help Section */}
              <NeedHelp working={working} toggleWorking={toggleWorking} />

              <hr className="my-4" />

              {/* Buying for Work Section */}
              <div>
                <h5 className="font-semibold ">Buying for work?</h5>
                <p>
                  <a
                    href="https://www.amazon.com/business"
                    target="_blank"
                    className="Links"
                  >
                    Shop on Amazon Business
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="flex flex-col items-center mt-5">
          <Toaster position="top-center" richColors />
        </section> */}
      </form>
    </>
  );
}
