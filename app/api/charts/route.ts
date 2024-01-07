import { getCharts, storeChart } from '@/lib/charts';
import { getReports } from '@/lib/reports';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { chart, report } = body;
    await storeChart(chart, report)

    return new NextResponse('Chart saved')
  } catch (error) {
    console.log('PlanetScale error', error);
    return new NextResponse('Internal error with request to get charts', {
      status: 500,
    });
  }
}

export async function GET(req: Request) {
  try {
    const charts = await getCharts()

    return NextResponse.json(charts)
  } catch (error) {
    console.log('PlanetScale error', error);
    return new NextResponse('Internal error with request to get charts', {
      status: 500,
    });
  }
}
