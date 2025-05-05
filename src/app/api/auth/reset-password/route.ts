import { NextResponse } from "next/server";
import axios from "axios";

import { LoginCredentials, LoginResponse } from "@/interfaces/auth";

export async function POST(request: Request) {
  try {
    const body: LoginCredentials = await request.json();

    const apiUrl =
      "https://fbldxvs4r5.execute-api.eu-central-1.amazonaws.com/prod/reset-password";

    const res = await axios.post<LoginResponse>(apiUrl, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = res.data;
    console.log("Response data:", data);
    const headers = new Headers();
    headers.set("Content-Type", "application/json");

    if (data.token) {
      headers.set(
        "Set-Cookie",
        `token=${data.token}; Path=/; HttpOnly; Secure; SameSite=Strict`
      );

      return NextResponse.json({ ...data }, { status: 200, headers });
    }
  } catch (error) {
    console.error("Login error:", error);
    if (axios.isAxiosError(error) && error.response) {
      return NextResponse.json(
        { error: error.response.data?.error || "Login failed" },
        { status: error.response.status }
      );
    }
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
