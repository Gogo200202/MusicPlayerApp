import React from "react";
import { useState } from "react";


function SingUp({forceUpdate}) {

  const [UserEmail,setUserEmail]=useState();
  const [Possword,setPossword]=useState();
  const [SecondPossword,setSecondPossword]=useState();

  const [error,setError]=useState();


function fortData(e){
  e.preventDefault();
  if(Possword!=SecondPossword){
    setError("Passwords are not the same");
  }else{
    setError("");
  }
  localStorage.setItem("UserEmail", UserEmail);
  localStorage.setItem("Possword", Possword);
  forceUpdate();
}
  return (
    <div className="flex justify-center ">
      
      <div className="p-10 px-16 rounded-lg my-16 bg-gray-400">
        
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign up to your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={fortData}>
              <div>
                <label
                  htmlFor="email"
                  className="text-center block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    onChange={(event) =>
                      setUserEmail(event.target.value)
                    }
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="text-center block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>

                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    onChange={(event) =>
                      setPossword(event.target.value)
                    }
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="text-center block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>

                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    onChange={(event) =>
                      setSecondPossword(event.target.value)
                    }
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
              <div  className="text-center block text-sm font-medium leading-6 text-gray-900">{error}</div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingUp;
