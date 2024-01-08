import { getCharts, getSingleChart, storeChart } from '@/lib/charts';
import { getReports } from '@/lib/reports';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
		const body = await req.json();
		const { data } = body;

    const chart = await getSingleChart(data)

    return NextResponse.json(chart)
  } catch (error) {
    console.log('PlanetScale error', error);
    return new NextResponse('Internal error with request to get charts', {
      status: 500,
    });
  }
}
