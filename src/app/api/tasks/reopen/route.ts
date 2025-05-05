import axios from "axios";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    const body = await request.json();
    const { taskId } = body;

    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const apiResponse = await axios.post(
      `https://fbldxvs4r5.execute-api.eu-central-1.amazonaws.com/prod/tasks/${taskId}/reopen`,
      body,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("API response:", apiResponse.data);
    console.log("API status:", apiResponse.status);

    return NextResponse.json(apiResponse.data, { status: apiResponse.status });
  } catch (error) {
    console.error("API error:", error);
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    const errorStatus =
      axios.isAxiosError(error) && error.response ? error.response.status : 500;
    return NextResponse.json(
      { error: errorMessage },
      {
        status: errorStatus,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
