"use client";

import { Container } from "@/components";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Replace this with your actual authentication check
    const checkAuthStatus = async () => {
      // Example: Check local storage, cookies, or make an API call
      const token = localStorage.getItem("authToken");
      setIsLoggedIn(!!token);
    };

    checkAuthStatus();
  }, []);

  return (
    <header className="px-4 h-14 sticky top-0 inset-x-0 w-full bg-background/40 backdrop-blur-lg border-b border-border z-50">
      <Container reverse>
        <div className="flex items-center justify-between h-full mx-auto md:max-w-screen-xl">
          <div className="flex items-start">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-lg font-medium">1Tool</span>
            </Link>
          </div>
          <nav className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <ul className="flex items-center justify-center gap-8">
              <Link href="#about" className="hover:text-foreground/80 text-sm">
                About
              </Link>
              <Link
                href="#features"
                className="hover:text-foreground/80 text-sm"
              >
                Features
              </Link>
              <Link
                href="#pricing"
                className="hover:text-foreground/80 text-sm"
              >
                Pricing
              </Link>
              <Link href="#blog" className="hover:text-foreground/80 text-sm">
                Blog
              </Link>
            </ul>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            {isLoggedIn ? (
              <button
                onClick={() => {
                  /* Implement logout logic */
                }}
                className={buttonVariants({ size: "sm" })}
              >
                Logout
              </button>
            ) : (
              <div className="flex items-center gap-4">
                <Link
                  href="/sign-in"
                  className={buttonVariants({ size: "sm", variant: "ghost" })}
                >
                  Login
                </Link>
                <Link
                  href="/sign-up"
                  className={buttonVariants({
                    size: "sm",
                    className: "hidden md:flex",
                  })}
                >
                  Start free trial
                </Link>
              </div>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
