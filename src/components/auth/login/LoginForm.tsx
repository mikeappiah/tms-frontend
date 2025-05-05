"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import FormGroup from "@/components/FormGroup";
import { LoginCredentials } from "@/interfaces/auth";
import axios from "axios";

const inputClasses =
  "rounded-[2px] shadow-none px-3 py-2 text-[#232526] focus-visible:border-0 focus-visible:ring-[#5153FF] focus-visible:ring-2";

const buttonClasses =
  "w-full bg-[#5153FF] hover:bg-[#4649db] rounded-[2px] cursor-pointer";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");
    setIsLoading(true);

    if (!email || !password) {
      setErrorMessage("Please fill in all fields.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        "/api/auth/login",
        { username: email, password } as LoginCredentials,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      const data = response.data;

      if (data.user?.role) {
        switch (data.user.role) {
          case "admin":
            router.push("/admin");
            break;
          case "member":
            router.push("/user");
            break;
          default:
            setErrorMessage("Invalid user role.");
            return;
        }
      } else if (data.challenge === "NEW_PASSWORD_REQUIRED") {
        router.push(
          `/auth/reset-password?email=${encodeURIComponent(
            email
          )}&session=${encodeURIComponent(data.session)}`
        );
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage("An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      {errorMessage && <div className="text-red-600">{errorMessage}</div>}
      <FormGroup label="Email address" htmlFor="email">
        <Input
          id="email"
          className={inputClasses}
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
      </FormGroup>
      <FormGroup label="Password" htmlFor="password">
        <Input
          id="password"
          className={inputClasses}
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
      </FormGroup>
      <Button className={buttonClasses} type="submit" disabled={isLoading}>
        {isLoading ? "Logging in..." : "Login"}
      </Button>
    </form>
  );
}
