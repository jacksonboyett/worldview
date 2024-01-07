import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { exampleReport, generate_report } from '@/constants/openai';
import { promptDataFormatter } from '@/lib/utils';
import { checkApiLimit, increaseApiLimit } from '@/lib/apiLimit';
import { storeReport } from '@/lib/reports';

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_SECRET_KEY,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { data } = body;

    const freeTrial = await checkApiLimit();
    if (!freeTrial) {
      return new NextResponse("Free trial has expired", {status: 403})
    }

    let promptData = promptDataFormatter(data)

    const user_prompt = `Write a report as a JSON object of the following data: ${promptData.indicator} of ${promptData.country} from ${promptData.dateRange}: ${promptData.labelValuesArr}. Make sure to include national and global reasons to explain the data. Use the following report as an example: ${exampleReport}`;

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo-1106',
      response_format: { type: 'json_object' },
      messages: [
        {
          role: 'user',
          content: `${user_prompt}`,
        },
      ],
      functions: generate_report,
      function_call: 'auto'
    });

    // const response = {
    //   choices: [
    //     {
    //       message: {
    //         function_call: {
    //           arguments: exampleReport,
    //         },
    //       },
    //     },
    //   ],
    // };

    console.log(response)

    if (!response.choices[0].message.function_call) return
    await storeReport(response.choices[0].message.function_call.arguments)

    await increaseApiLimit();

    return NextResponse.json(response);
  } catch (error) {
    console.log('[OPENAI_ERROR]', error);
    return new NextResponse('Internal Error with OpenAI request', {
      status: 500,
    });
  }
}
