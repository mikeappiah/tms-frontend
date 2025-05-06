import { NextResponse } from "next/server";

import { cookies } from "next/headers";

export async function POST() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    const apiUrl =
      "https://fbldxvs4r5.execute-api.eu-central-1.amazonaws.com/prod/signout";

    const res = await fetch(apiUrl, {
      body: JSON.stringify({ token }),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    cookieStore.delete("token");

    return NextResponse.json(
      { message: "Success", data: res.json() },
      { status: 200 }
    );
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
