import axios from 'axios';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET() {
	try {
		const cookieStore = await cookies();
		const token = cookieStore.get('token')?.value;

		if (!token) {
			return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
		}

		const apiResponse = await axios.get(
			'https://9buy272svi.execute-api.eu-central-1.amazonaws.com/test/tasks',
			{
				headers: {
					Authorization: `Bearer ${token}`
				}
			}
		);

		return NextResponse.json(apiResponse.data, {
			status: 200,
			headers: { 'Content-Type': 'application/json' }
		});
	} catch (error) {
		console.error('API error:', error);
		const errorMessage =
			error instanceof Error ? error.message : 'An unknown error occurred';
		const errorStatus =
			axios.isAxiosError(error) && error.response ? error.response.status : 500;
		return NextResponse.json(
			{ error: errorMessage },
			{
				status: errorStatus,
				headers: { 'Content-Type': 'application/json' }
			}
		);
	}
}
