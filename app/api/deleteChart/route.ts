import { deleteChart } from "@/lib/charts";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
		const body = await req.json();
    const { chartId } = body;
		await deleteChart(chartId)

    return new NextResponse('Chart deleted')
  } catch (error) {
    console.log('PlanetScale error', error);
    return new NextResponse('Internal error with request to delete chart', {
      status: 500,
    });
  }
}