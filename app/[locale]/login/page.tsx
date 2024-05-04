"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function Login() {
  const router = useRouter();
  const [err, setErr] = useState<Error>();
  const [captcha, setCaptcha] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const email = (target[0] as HTMLInputElement).value;
    const password = (target[1] as HTMLInputElement).value;

    try {
      const res: any = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (!res.ok) {
        throw new Error(res.error);
      }
      if (!captcha) {
        throw new Error("Captcha failed you must be a robot");
      }
      if (res.ok && captcha) {
        alert("Welcome Back");
        router.push("/en/dashboard");
      }
    } catch (error) {
      if (error instanceof Error) {
        // Handle specific errors of type Error
        console.error("An error occurred:", error.message);
        setErr(error);
      } else {
        // Handle other types of errors
        console.error("An unknown error occurred:", error);
      }

      console.log(error);
    }
  };
  return (
    <div className="flex  h-[85vh]  flex-col gap-5 items-center justify-center pt-[110px]">
      <h1 className="text-4xl font-bold">Welcome</h1>
      <form onSubmit={handleSubmit} className="w-[300px] flex flex-col gap-5">
        <input
          type="text"
          placeholder="Email"
          required
          className="p-4 bg-transparent border border-[#bbb] rounded-md text-xl font-bold"
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="p-4 bg-transparent border border-[#bbb] rounded-md text-xl font-bold"
        />
        <ReCAPTCHA
          onChange={() => setCaptcha(true)}
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
          className="mx-auto"
        />
        <button type="submit" className="w-[300px] p-4 bg-[#ec413d] font-bold">
          Login
        </button>
        <h1 className="text-white font-bold text-2xl">
          {err && "failed to login"}{" "}
        </h1>
        <h1>
          Don&apos;t Have Account,{" "}
          <Link className="underline" href="/en/register">
            Register
          </Link>
        </h1>
      </form>
    </div>
  );
}
