"use client";

import { Alert } from "@material-tailwind/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function Register() {
  const [captcha, setCaptcha] = useState(false);
  const router = useRouter();
  const [error, setError] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const name = (target[0] as HTMLInputElement).value;
    const email = (target[1] as HTMLInputElement).value;
    const password = (target[2] as HTMLInputElement).value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      if (res.status === 201 && captcha) {
        alert("Registration completed Successfully");
        router.push("/en/login");
      }
    } catch (error) {
      if (error instanceof Error) {
        // Handle specific errors of type Error
        console.error("Registration Failed:", error.message);
      } else {
        // Handle other types of errors
        console.error("An unknown error occurred:", error);
      }
    }
  };
  return (
    <div className=" h-[85vh]  flex flex-col gap-5  items-center justify-center mt-8">
      <div className=" p-4 rounded-md">
        <h1 className="text-4xl font-bold">Create an Account</h1>
        <form onSubmit={handleSubmit} className="w-[300px] flex flex-col gap-5">
          <input
            type="text"
            placeholder="name"
            required
            className="p-4 bg-transparent border border-[#bbb]  rounded-md text-xl font-bold"
          />
          <input
            type="text"
            placeholder="Email"
            required
            className="p-4 bg-transparent border border-[#bbb]  rounded-md text-xl font-bold"
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="p-4 bg-transparent border border-[#bbb]  rounded-md text-xl font-bold"
          />
          <ReCAPTCHA
            onChange={() => setCaptcha(true)}
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
            className="mx-auto"
          />
          <button
            type="submit"
            className="w-[300px] p-4 text-white bg-[#ec413d] font-bold"
          >
            Register
          </button>
          <h1 className="text-red-500 font-bold text-2xl">
            {error && "failed to register"}{" "}
          </h1>
        </form>
        <span className="">- OR -</span>
        <h1>
          Already Have Account
          <Link className="underline ml-4" href="/en/login">
            Login
          </Link>
        </h1>
      </div>
    </div>
  );
}
