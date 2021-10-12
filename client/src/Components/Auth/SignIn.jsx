import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";

//Redux action
import { signIn } from '../../Redux/Reducer/Auth/Auth.action';

export default function SignIn({ isOpen, setIsOpen }) {
  const [userData, setUserData] = useState({
    email: "",
    Password: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => setUserData((prev) =>({
    ...prev, [e.target.name]: e.target.value 
  }));

  function closeModal() {
    setIsOpen(false)
  }

  const submit = () => {
    setUserData({
      email: "",
    Password: "",
    });
    dispatch(signIN(userData))
  };

  const googleSignIn = () => (
    window.location.href = "http://localhost:3000/auth/google"
  );
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
                  <button onClick={googleSignIn} className="w-full py-2 flex items-center bg-gray-100 text-md font-regular justify-center gap-2 border border-gray-400 rounded-md bg-white">
                    Signin with Google <FcGoogle />
                  </button>
                  <form className="my-2 flex flex-col gap-3">
                    <div className="flex flex-col gap-2 w-full">
                      <lable htmlFor="emial" className="text-lg font-semibold leading-6">Email</lable>
                      <input
                      type="email" 
                      id="emial" 
                      name="email"
                      onChange={handleChange}
                      value={userData.email}
                      placeholder="demo123@gmail.com"
                      className="w-full px-3 py-1 border border-transparent rounded-md focus:outline-none focus:border-zred-200 border-blue-400"/>
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                      <lable htmlFor="password" className="text-lg font-semibold leading-6">password</lable>
                      <input
                      type="password" 
                      id="password" 
                      placeholder="********"
                      name="password"
                      onChange={handleChange}
                      value={userData.Password}
                      className="w-full px-3 py-1 border border-transparent rounded-md focus:outline-none focus:border-zred-200 border-blue-400"/>
                    </div> 
                    <div onClick={submit} className="w-full bg-red-500  py-2 text-white text-center rounded-md">
                      Sign in
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
