"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, useRef, useEffect } from "react";

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [isLogin, setIsLogin] = useState(true);
  const divRef = useRef(null);

  useEffect(() => {
    if (divRef.current) {
      divRef.current.scrollIntoView();
    }
  }, [isLogin]);

  return (
    <>
      <div
        className={cn(
          `flex flex-col gap-6 transition-all duration-500`,
          className,
          isLogin ? "mr-10" : "ml-10",
        )}
        {...props}
      >
        <Card
          className={`transition-all duration-500 ${isLogin ? "rounded-r-none" : "rounded-l-none"}`}
        >
          <CardHeader>
            <CardTitle className="text-2xl">
              {isLogin ? "Login" : "Sign Up"}
            </CardTitle>
            <CardDescription>
              {isLogin
                ? "Enter your email below to login to your account"
                : "Enter your information to create a new account"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex flex-col gap-6">
                {!isLogin && (
                  <div className="grid gap-2">
                    <Label htmlFor="username">Username</Label>
                    <Input
                      id="username"
                      type="text"
                      placeholder="a80lfazl"
                      required
                    />
                  </div>
                )}
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    {/* TODO: */}
                    {/* <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a> */}
                  </div>
                  <Input id="password" type="password" required />
                </div>
                <Button type="submit" className="w-full">
                  {isLogin ? "Login" : "Sign Up"}
                </Button>
                {/* TODO: */}
                {/* <Button variant="outline" className="w-full">
                Continue with Google
              </Button> */}
              </div>
              <div className="mt-4 text-center text-sm">
                {isLogin ? (
                  <>Don&apos;t have an account?</>
                ) : (
                  "have an account?"
                )}{" "}
                <Button
                  type="button"
                  className="px-2 py-1"
                  onClick={() => {
                    setIsLogin((prev) => !prev);
                  }}
                >
                  {!isLogin ? "login" : "sign up"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
      <div ref={divRef} />
    </>
  );
}
