import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import axios from "../../api/axios";
import { getAuth, updateProfile } from "firebase/auth";

const Login = () => {
  const { login, googleLogin } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };

  const [values, setValues] = useState(initialValues);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    console.log("values is ", values);
  };

  const handleGoogleSignIn = () => {
    googleLogin().then((result) => {
      const loggedInUser = result.user;
      console.log(loggedInUser);

      const updateUserProfile = async (photoURL = "candidate") => {
        const auth = getAuth();
        const user = auth.currentUser;

        if (user) {
          await updateProfile(user, {
            photoURL: photoURL,
          });
        } else {
          throw new Error("No user is currently signed in.");
        }
      };
      updateUserProfile();

      if (loggedInUser) {
        navigate("/job-search");
      }
    });
  };

  const handleLogin = async (e) => {
    login(values.email, values.password)
      .then((result) => {
        Swal.fire("Login Successful !");
        console.log(result.user);
        const updateUserProfile = async (photoURL = "candidate") => {
          const auth = getAuth();
          const user = auth.currentUser;

          if (user) {
            await updateProfile(user, {
              photoURL: photoURL,
            });
            navigate("/job-search");
          } else {
            throw new Error("No user is currently signed in.");
          }
        };
        updateUserProfile();
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="max-w-7xl mx-auto ">
      <div class="lg:flex flex-warp mx-auto w-full">
        <div class="w-1/2 hidden lg:h-[600px] md:block">
          <img
            class=" object-cover w-full  "
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>

        <div class="w-full lg:px-8 px-6  py-8 pt-12 lg:ms-8 lg:w-1/2">
          <p class="py-12 md:text-[41px]  text-3xl   font-medium tracking-wide text-center text-blue-700 b:text-slate-200">
            Log into your account !
          </p>

          <div className="md:px-12">
            <a
              onClick={handleGoogleSignIn}
              class="flex mb-6 cursor-pointer items-center justify-center mt-4 text-slate-600 transition-colors duration-300 transform border-2 rounded-lg b:border-slate-700 b:text-slate-200 hover:bg-slate-50 b:hover:bg-slate-600"
            >
              <div class="px-1  py-2">
                <svg class="w-8 h-8 " viewBox="0 0 40 40">
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#FFC107"
                  />
                  <path
                    d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                    fill="#FF3D00"
                  />
                  <path
                    d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                    fill="#4CAF50"
                  />
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#1976D2"
                  />
                </svg>
              </div>

              <span class="w-5/6 text-lg px-4 py-3 font-bold ">
                Sign in with Google
              </span>
            </a>

            <div class="flex items-center justify-between mt-4">
              <span class="w-1/5 border-b-2 b:border-slate-600 lg:w-1/2"></span>

              <a
                href="#"
                class="text-xs px-5 text-center text-slate-500 uppercase b:text-slate-400 hover:underline"
              >
                or
              </a>

              <span class="w-1/5 border-b-2 b:border-slate-400 lg:w-1/2"></span>
            </div>

            <div class="mt-4">
              <label
                class="block mb-2 text-lg font-medium text-slate-600 b:text-slate-200"
                for="LoggingEmailAddress"
              >
                Email
              </label>
              <input
                id="LoggingEmailAddress"
                class="block w-full px-4 py-2 text-slate-700 border-2 border-blue-600 rounded-lg  focus:border-blue-400 focus:ring-opacity-40 b:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
                name="email"
                value={values.email}
                onChange={handleInputChange}
              />
            </div>

            <div class="mt-4">
              <div class="flex justify-between">
                <label
                  class="block mb-2 text-lg font-medium text-slate-600 b:text-slate-200"
                  for="loggingPassword"
                >
                  Password
                </label>
              </div>
              <input
                id="loggingPassword"
                class="block w-full px-4 py-2 text-slate-700  border-2 border-blue-600 rounded-lg focus:border-blue-400 focus:ring-opacity-40 -blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="password"
                name="password"
                value={values.password}
                onChange={handleInputChange}
              />

              <div className="flex items-center justify-between pt-2 pb-2">
                <p className="text-red-600 ">{error}</p>
                <a
                  href="#"
                  class="text-lg text-blue-500 font-medium b:text-slate-300 hover:underline"
                >
                  Forget Password?
                </a>
              </div>
            </div>

            <div class="mt-6">
              <button
                onClick={handleLogin}
                class="w-full px-6 py-3 text-lg font-medium tracking-wide border text-slate-600 capitalize transition-colors duration-300 transform bg-slate-300 rounded-lg hover:bg-slate-200 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-opacity-50"
              >
                Continue
              </button>
            </div>
            <div>
              <p className="text-lg font-medium text-blue-500  b:text-slate-400 hover:underline text-center m-6">
                Login through OTP
              </p>
            </div>
            <div class="text-center">
              <div
                class="text-lg font-medium cursor-pointer text-slate-500 b:text-slate-400 hover:underline"
                onClick={() => navigate("/signup")}
              >
                Don't have an account ?{" "}
                <span className="text-blue-500">Create new account</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
