"use client";
import React, { useState } from "react";
import Link from "next/link";
// Removed Firebase imports and authentication functions
// import { authTable, firestoreDB } from "../utils/firebase";
// import { collection, getDocs, query, where } from "firebase/firestore";
import { useRouter } from "next/navigation";

export default function Login(props) {
  // states
  const [error, setError] = useState("");
  const Router = useRouter();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const loginHandler = async (event) => {
    event.preventDefault();

    // checking for null fields
    if (!email || !password) {
      setError("Kindly fill the required details");
      return;
    }

    // Simple session handling without authentication
    try {
      // Dummy session management
      props.set(true); // You can modify this based on your needs

      if (typeof window !== "undefined") {
        if (email === "gourav.goyal@gmail.com") {
          sessionStorage.setItem("admin", "true");
        } else {
          sessionStorage.setItem("employee", "true");
        }
      }

      // Redirecting to the dashboard
      Router.push("/dashboard");
    } catch (error) {
      console.error('Error handling login:', error);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            {/* heading of the page */}
            <h1 className="text-xl font-bold leading-tight tracking-tight text-secondary-blue md:text-2xl">
              Sign in to your account
            </h1>

            {/* form for the login */}
            <form className="space-y-4 md:space-y-6">
              {/* email section */}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your email
                </label>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  placeholder="name@company.com"
                  required=""
                />
              </div>

              {/* section for the password */}
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  required=""
                />
              </div>

              {/* forgot & error */}
              <div className="flex items-center justify-between">
                {/* conditionally rendering error section */}
                {error && (
                  <div className="flex items-start">
                    <div className="ml-3 text-sm text-red-700">{`*${error}`}</div>
                  </div>
                )}

                {/* forgot-password section */}
                <Link
                  href="#"
                  className="text-sm font-medium text-secondary-blue hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              {/* sign in button */}
              <button
                onClick={loginHandler}
                className="w-full text-white bg-secondary-blue hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}