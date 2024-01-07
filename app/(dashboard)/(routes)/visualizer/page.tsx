'use client';

import InputButton from '@/components/InputButton';
import { useState } from 'react';
import Chart from '@/components/Chart';
import { formatData } from '@/lib/utils';
import { Inputs, Report } from '@/types/Types';
import { ChartInputs } from '@/types/Types';
import ReportButton from '@/components/ReportButton';
import axios from 'axios';
import { toast, useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';

function Visualizer() {
  const { toast } = useToast();
  const [inputs, setInputs] = useState<Inputs>({
    country: 'Austria',
    indicator: 'GDP',
    fromYear: 2015,
    toYear: 2020,
  });
  const [data, setData] = useState<ChartInputs>({
    country: '',
    indicator: '',
    labels: ['Year', '', '', ''],
    label: 'World Development Indicator, Country',
    data: [null, null, null, null],
  });
  // const [data, setData] = useState<ChartInputs>();
  const [report, setReport] = useState<Report | undefined>();
  const [isLoading, setIsLoading] = useState(false);
  const [haveData, setHaveData] = useState(false);

  function updateInputs(key: string, value: string | number) {
    setInputs((prevState) => {
      return {
        ...prevState,
        [key]: value,
      };
    });
  }

  async function updateData() {
    const response = await axios.post('/api/worldbank', {
      inputs: inputs,
    });
    // console.log(response.data);
    let formattedData = formatData(response.data);
    setData(formattedData);
    setHaveData(true);
  }

  async function saveChart() {
    try {
      const response = await axios.post('/api/charts', {
        chart: data,
        report: report
      });
      setHaveData(false);
      toast({
        title: 'Chart Saved!',
        description: 'You can view your saved charts on the dashboard!',
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function generateReport() {
    setIsLoading(true);
    if (report) return;
    try {
      const response = await axios.post('/api/openai', {
        data: data,
      });
      console.log(response.data);
      const reportFromResponse =
        response.data.choices[0].message.function_call.arguments;
      let reportJSON = JSON.parse(reportFromResponse);
      console.log(reportJSON)
      setReport(reportJSON);
      // setReport(response.data.choices[0].message.function_call.arguments);
      setIsLoading(false);
    } catch (error: any) {
      if (error?.response?.status === 403) {
        setIsLoading(false);
        toast({
          title: 'Your free trial has ended!',
          description: 'Buy a PRO subscription to generate more reports!',
          action: (
            <Button className="bg-blue-500 text-white border-0">GO PRO</Button>
          ),
          variant: 'destructive',
        });
      }
    }
  }

  return (
    <div role="Visualizer" className="flex-1 flex flex-col items-stretch">
      {haveData ? (
        <Button className="w-24 fixed bottom-4 ml-12" onClick={saveChart}>
          Save Chart
        </Button>
      ) : null}
      <div className="mx-4 h-[80vh]">{data ? <Chart data={data} /> : null}</div>
      <div className="mt-auto flex items-center justify-center mx-4">
        <InputButton updateData={updateData} updateInputs={updateInputs} />
        <ReportButton
          generateReport={generateReport}
          report={report}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}

export default Visualizer;
