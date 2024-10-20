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
      Router.push("/");
    } catch (error) {
      console.error('Error handling login:', error);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-center text-blue-600 mb-4">Welcome to HRMS!</h1>
            <p className="text-lg text-gray-700 text-center mb-6">
                Your one-stop solution for all your human resource management needs.
            </p>
            <button 
            onClick={loginHandler}
            className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition duration-300">
                Start Managing
            </button>
           
        </div>
  );
}