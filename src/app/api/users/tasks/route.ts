import axios from "axios";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { comment, taskId } = body;

    console.log("Comment:", comment);
    console.log("Task ID:", taskId);

    if (typeof comment !== "string") {
      return NextResponse.json(
        { error: 'Invalid "pass" value' },
        { status: 400 }
      );
    }

    const apiResponse = await axios.put(
      `https://fbldxvs4r5.execute-api.eu-central-1.amazonaws.com/prod/tasks/${taskId}`,
      { userComment: comment }, // payload
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    return NextResponse.json(apiResponse.data, {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("PUT API error:", error);
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

export async function PUT(request: Request) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { taskId } = body;
    const status = "completed";

    const apiResponse = await axios.put(
      `https://fbldxvs4r5.execute-api.eu-central-1.amazonaws.com/prod/tasks/${taskId}`,
      { status }, // payload
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    return NextResponse.json(apiResponse.data, {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("PUT API error:", error);
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
