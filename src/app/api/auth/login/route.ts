import { NextResponse } from "next/server";
import axios from "axios";

import { LoginCredentials, LoginResponse } from "@/interfaces/auth";

export async function POST(request: Request) {
  try {
    const body: LoginCredentials = await request.json();
    const { username, password } = body;

    if (!username || !password) {
      return NextResponse.json(
        { error: "Please fill in all fields." },
        { status: 400 }
      );
    }

    const apiUrl =
      "https://fbldxvs4r5.execute-api.eu-central-1.amazonaws.com/prod/signin";

    const lambdaResponse = await axios.post<LoginResponse>(
      apiUrl,
      { username, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = lambdaResponse.data;
    const headers = new Headers();
    headers.set("Content-Type", "application/json");

    if (data.token) {
      headers.set(
        "Set-Cookie",
        `token=${data.token}; Path=/; HttpOnly; Secure; SameSite=Strict`
      );

      return NextResponse.json({ user: data.user }, { status: 200, headers });
    }

    if (data.challenge === "NEW_PASSWORD_REQUIRED") {
      if (data.session) {
        headers.set(
          "Set-Cookie",
          `session=${data.session}; Path=/; HttpOnly; Secure; SameSite=Strict` // Adjust as needed
        );
      }
      return NextResponse.json(
        {
          challenge: data.challenge,
          message: "New password required",
          session: data.session,
        },
        { status: 200, headers }
      );
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
