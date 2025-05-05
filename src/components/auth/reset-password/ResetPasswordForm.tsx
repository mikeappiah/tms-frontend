"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import FormGroup from "@/components/FormGroup";

import { LoginCredentials, LoginResponse } from "@/interfaces/auth";

const inputClasses =
  "rounded-[2px] shadow-none px-3 py-2 text-[#232526] focus-visible:border-0 focus-visible:ring-[#5153FF] focus-visible:ring-2";

const buttonClasses =
  "w-full bg-[#5153FF] hover:bg-[#4649db] rounded-[2px] cursor-pointer";

const passwordPolicyRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&()[\]{}#^+=<>\\|/~`_\-])[A-Za-z\d@$!%*?&()[\]{}#^+=<>\\|/~`_\-]{8,}$/;

export default function ResetPasswordForm() {
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const email = searchParams.get("email");
  const session = searchParams.get("session");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");
    setIsLoading(true);

    if (!confirmPassword || !password) {
      setErrorMessage("Please fill in all fields.");
      setIsLoading(false);
      return;
    }

    if (!passwordPolicyRegex.test(password)) {
      setErrorMessage(
        "Password must be at least 8 characters long, include uppercase and lowercase letters, a number, and a special character."
      );
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        "/api/auth/reset-password",
        JSON.stringify({
          username: email,
          newPassword: password,
          session,
        } as LoginCredentials)
      );

      const data: LoginResponse = response.data;
      console.log("Response data:", data);

      if (data.token) {
        switch (data.user?.role) {
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
      } else {
        setErrorMessage("Password reset failed.");
      }
    } catch (error) {
      console.error("Password reset error:", error);
      setErrorMessage("An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      {errorMessage && <div className="text-red-500">{errorMessage}</div>}
      <FormGroup label=" New password" htmlFor="password">
        <Input
          id="password"
          name="password"
          className={inputClasses}
          type="password"
          placeholder="New password"
          disabled={isLoading}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {password && !passwordPolicyRegex.test(password) && (
          <p className="text-red-500 text-xs mt-1">
            Must be 8+ characters, include uppercase, lowercase, number, and
            special character.
          </p>
        )}
      </FormGroup>
      <FormGroup label="Confirm Password" htmlFor="confirm-password">
        <Input
          id="confirm-password"
          name="confirm-password"
          className={inputClasses}
          type="password"
          placeholder="Confirm password"
          disabled={isLoading}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {confirmPassword && password !== confirmPassword && (
          <p className="text-red-500 text-xs mt-1">Passwords do not match.</p>
        )}
      </FormGroup>

      <Button
        className={buttonClasses}
        type="submit"
        disabled={
          isLoading ||
          !password ||
          !confirmPassword ||
          password !== confirmPassword ||
          !passwordPolicyRegex.test(password)
        }
      >
        {isLoading ? "Resetting" : "Reset"}
      </Button>
    </form>
  );
}
