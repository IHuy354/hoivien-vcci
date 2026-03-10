"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Mail, Lock } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import useSignInHandler from "@hooks/use-login";

// ─── Types ────────────────────────────────────────────────────────────────────

type LoginFormValues = {
  email: string;
  password: string;
};

// ─── Page ─────────────────────────────────────────────────────────────────────

const LoginPage = () => {
  const router = useRouter();
  const { signInHandler, isPending, defaultValue } = useSignInHandler();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    defaultValues: {
      email: defaultValue.email,
      password: defaultValue.password,
    },
  });

  const onSubmit = async (values: LoginFormValues) => {
    try {
      await signInHandler({ email: values.email, password: values.password });
      router.push("/admin/registration");
    } catch {
      // lỗi đã được toast bên trong signInHandler
    }
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gradient-to-tr from-blue-600 via-indigo-500 to-fuchsia-500 p-4">
      <div className="flex w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl">
        {/* Left Side (Graphics) */}
        <div className="relative hidden w-1/2 items-center justify-center bg-white p-12 md:flex">
          {/* Decorative shapes */}
          <div className="absolute top-1/4 left-1/4 h-3 w-3 rounded-full border-2 border-cyan-400"></div>
          <div className="absolute top-1/3 right-1/4 h-3 w-3 border-b-2 border-l-2 border-transparent border-b-green-400 border-l-green-400 origin-center -rotate-45"></div>
          <div className="absolute bottom-1/4 left-1/3 h-3 w-3 border-2 border-green-400"></div>
          <div className="absolute bottom-1/3 right-1/4 h-3 w-3 rounded-full border-2 border-cyan-400"></div>

          {/* Main graphic circle */}
          <div className="relative flex h-64 w-64 items-center justify-center rounded-full bg-slate-100">
            {/* Laptop graphic */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="flex h-32 w-48 items-center justify-center rounded-t-md border-x-8 border-t-8 border-slate-700 bg-white-600">
              <Image src="/imgs/logo.png" alt="Logo" width={150} height={100} />
              </div>
              <div className="h-3 w-56 rounded-b-md bg-slate-700"></div>
            </div>
            {/* Shadow under laptop */}
            <div className="absolute top-1/2 left-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-200/50"></div>
          </div>
        </div>

        {/* Right Side (Form) */}
        <div className="flex w-full flex-col justify-center p-8 md:w-1/2 md:p-16 relative">
          <div className="mx-auto w-full max-w-sm">
            <h2 className="mb-10 text-center text-3xl font-bold text-slate-800">
              Member Login
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-4">
                {/* Email */}
                <div>
                  <div className="relative flex items-center">
                    <Mail className="absolute left-4 h-5 w-5 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Email"
                      autoComplete="email"
                      disabled={isPending}
                      className="h-12 w-full rounded-full border-none bg-gray-100 pl-12 pr-4 text-sm font-medium text-gray-700 outline-none ring-0 placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0"
                      {...register("email", {
                        required: "Email không được để trống",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Email không hợp lệ",
                        },
                      })}
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 pl-4 text-xs text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Password */}
                <div>
                  <div className="relative flex items-center">
                    <Lock className="absolute left-4 h-5 w-5 text-gray-400" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="Password"
                      autoComplete="current-password"
                      disabled={isPending}
                      className="h-12 w-full rounded-full border-none bg-gray-100 pl-12 pr-4 text-sm font-medium text-gray-700 outline-none ring-0 placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0"
                      {...register("password", {
                        required: "Mật khẩu không được để trống",
                        minLength: {
                          value: 6,
                          message: "Mật khẩu phải có ít nhất 6 ký tự",
                        },
                      })}
                    />
                  </div>
                  {errors.password && (
                    <p className="mt-1 pl-4 text-xs text-red-500">
                      {errors.password.message}
                    </p>
                  )}
                </div>
              </div>

              <Button
                type="submit"
                disabled={isPending}
                className="h-12 w-full rounded-full bg-green-500 text-sm font-bold tracking-wider text-white hover:bg-green-600 focus:bg-green-600 focus:ring-4 focus:ring-green-500/30"
              >
                {isPending ? "ĐANG ĐĂNG NHẬP..." : "LOGIN"}
              </Button>

              {/* <div className="text-center">
                <Link
                  href="/auth/forgot-password"
                  className="text-xs text-gray-400 hover:text-gray-600"
                  prefetch={false}
                >
                  Forgot <span className="font-semibold text-gray-600">Username / Password?</span>
                </Link>
              </div> */}
            </form>
          </div>

          {/* Bottom Link */}
          {/* <div className="absolute bottom-8 right-8 cursor-pointer text-xs font-medium text-gray-500 hover:text-gray-700">
            <Link
              href="/auth/register"
              className="flex items-center gap-2"
              prefetch={false}
            >
              Create your Account <MoveRight className="h-4 w-4" />
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
