import { getReports } from '@/lib/reports';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  try {
    const reports = await getReports();

    return NextResponse.json(reports)
  } catch (error) {
    console.log('PlanetScale error', error);
    return new NextResponse('Internal error with request to get reports', {
      status: 500,
    });
  }
}
