import { saveReport} from '@/lib/reports';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { report, chartId } = body;
    await saveReport(report, chartId)

    return new NextResponse('Report saved')
  } catch (error) {
    console.log('PlanetScale error', error);
    return new NextResponse('Internal error with request to save report ', {
      status: 500,
    });
  }
}
