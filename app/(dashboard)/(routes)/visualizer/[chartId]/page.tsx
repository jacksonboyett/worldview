'use client';

import Chart from '@/components/Chart';
import ReportButton from '@/components/ReportButton';
import ViewReport from '@/components/ViewReport';
import { generate_report } from '@/constants/openai';
import { getSingleChart } from '@/lib/charts';
import { ChartInputs } from '@/types/Types';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { exampleReport } from '@/constants/openai';
import { Report } from '@/types/Types';
import { toast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

function VisualizerWithChartId({ params }: { params: { chartId: string } }) {
  const router = useRouter();
  const [report, setReport] = useState<Report | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<ChartInputs>({
    country: '',
    indicator: '',
    labels: ['Year', '', '', ''],
    label: 'World Development Indicator, Country',
    data: [null, null, null, null],
  });

  useEffect(() => {
    getChart();
  }, []);

  async function generateReport() {
    setIsLoading(true);
    if (report) return;
    try {
      const response = await axios.post('/api/openai', {
        data: data,
      });
      const reportFromResponse =
        response.data.choices[0].message.function_call.arguments;
      // let reportJSON = JSON.parse(reportFromResponse);
      // console.log(reportJSON)
      // setReport(reportJSON);
      setReport(reportFromResponse);
      console.log(reportFromResponse);
      await saveReport(reportFromResponse)
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
    } finally {
      router.refresh();
    }
  }

  async function saveReport(report: Report) {
    try {
      const response = await axios.post('/api/saveReport', {
        report: report,
        chartId: params.chartId,
      });
      toast({
        title: 'Report Saved!',
        description: 'You can view your AI generated report now!',
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function getChart() {
    const response = await axios.post('/api/singleChart', {
      data: params.chartId,
    });
    const data = response.data.chart;
    setData(data);
    setReport(response.data.report);
  }
  return (
    <div role="Visualizer" className="flex-1 flex flex-col items-stretch">
      <div className="mx-4 h-[80vh]">{data ? <Chart data={data} /> : null}</div>
      <div className="mt-auto flex items-center justify-center mx-4">
        {/* <ViewReport report={report}></ViewReport> */}
        <ReportButton
          report={report}
          isLoading={isLoading}
          generateReport={generateReport}
        />
      </div>
    </div>
  );
}

export default VisualizerWithChartId;
