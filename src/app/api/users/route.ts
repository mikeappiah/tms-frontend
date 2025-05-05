import axios from "axios";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const apiResponse = await axios.get(
      "https://fbldxvs4r5.execute-api.eu-central-1.amazonaws.com/prod/users",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return NextResponse.json(apiResponse.data, {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
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

export async function POST(request: Request) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    const { name, email } = await request.json();

    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const apiResponse = await axios.post(
      `https://fbldxvs4r5.execute-api.eu-central-1.amazonaws.com/prod/users/`,
      { name, email, role: "member" },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

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

export async function DELETE(request: Request) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    const { userId } = await request.json();

    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const apiResponse = await axios.delete(
      `https://fbldxvs4r5.execute-api.eu-central-1.amazonaws.com/prod/users/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

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
