import { getCountryCodeByName, getIndicatorCodeByName } from '@/lib/utils';
import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { inputs } = body;

    let countryCode = getCountryCodeByName(inputs.country);
    let indicatorCode = getIndicatorCodeByName(inputs.indicator);
    let fromYear = inputs.fromYear;
    let toYear = inputs.toYear;

    const url = `http://api.worldbank.org/v2/country/${countryCode}/indicator/${indicatorCode}?&format=json&date=${fromYear}:${toYear}&per_page=2000`;

    const response = await axios.get(url);


		console.log(response.data)

    return NextResponse.json(response.data);
  } catch (error) {
    // console.log('[VISUALIZER_ERROR]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
