import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { FcGoogle } from "react-icons/fc";

export default function SignUp({ isOpen, setIsOpen }) {
  
  function closeModal() {
    setIsOpen(false)
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl border-2 border-blue-50">
                <div className="mt-2 w-full">
                  <button className="w-full py-2 flex items-center bg-gray-100 text-md font-regular justify-center gap-2 border border-gray-400 rounded-md bg-white">
                    SignUp with Google <FcGoogle />
                  </button>
                  <div className="flex items-center justify-center mt-4">
                    <div className="border-b border-gray-200 mt-6 w-60"/>
                    <span>or</span>
                    <div className="border-b border-gray-200 mt-6 w-60"/>
                  </div>
                  <form className="my-2 pt-4 flex flex-col gap-3">
                    <div className="flex flex-col gap-2 w-full">
                      <lable htmlFor="fullname" className="text-lg font-semibold leading-6">Fullname</lable>
                      <input
                      type="text" 
                      id="fullname" 
                      placeholder="jack sparrow"
                      className="w-full px-3 py-1 border border-transparent rounded-md focus:outline-none focus:border-zred-200 border-blue-400"/>
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                      <lable htmlFor="email" className="text-lg font-semibold leading-6">Email</lable>
                      <input
                      type="email" 
                      id="emial" 
                      placeholder="demo123@gmail.com"
                      className="w-full px-3 py-1 border border-transparent rounded-md focus:outline-none focus:border-zred-200 border-blue-400"/>
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                      <lable htmlFor="password" className="text-lg font-semibold leading-6">password</lable>
                      <input
                      type="password" 
                      id="password" 
                      placeholder="********"
                      className="w-full px-3 py-1 border border-transparent rounded-md focus:outline-none focus:border-zred-200 border-blue-400"/>
                    </div> 
                    <div className="w-full bg-red-500  py-2 text-white text-center rounded-md">
                      Sign Up
                    </div>
                  </form>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
