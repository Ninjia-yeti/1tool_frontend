"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { X, Loader2, Mail, Lock } from "lucide-react";
import { FaGoogle } from "react-icons/fa";
import Link from "next/link";

export default function SignInPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    // Simulating an API call
    setTimeout(() => {
      setIsLoading(false);
      console.log("Sign in attempt with:", email, password);
    }, 2000);
  }

  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center shadow-lg">
      <Card className="w-[350px]">
        <CardHeader className="space-y-1">
          <div className="flex justify-between items-center">
            <CardTitle className="text-2xl">Sign in</CardTitle>
            <Button variant="ghost" size="icon" asChild>
              <Link href="/">
                <X className="h-6 w-6 font-bold" />
              </Link>
            </Button>
          </div>
          <CardDescription>
            Enter your email and password to sign in
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <form onSubmit={onSubmit}>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-gray-300 focus:border-violet-500 focus:ring-violet-500"
                required
              />
            </div>
            <div className="grid gap-2 mt-4">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-gray-300 focus:border-violet-500 focus:ring-violet-500"
                required
              />
            </div>
            <div className="flex items-center space-x-2 mt-4">
              <Checkbox id="remember" />
              <label
                htmlFor="remember"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Remember me
              </label>
            </div>
            <Button
              className="w-full mt-6 bg-violet-600 hover:bg-violet-700"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Mail className="mr-2 h-4 w-4" />
              )}
              Sign In
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col">
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <Button variant="outline" type="button" className="w-full">
            <FaGoogle className="mr-2 h-4 w-4 text-violet-600" />
            Google
          </Button>
          <p className="mt-4 text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link
              href="/auth/signup"
              className="text-violet-600 hover:underline"
            >
              Sign up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
