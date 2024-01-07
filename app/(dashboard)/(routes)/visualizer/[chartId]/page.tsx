'use client';

import Chart from '@/components/Chart';
import ReportButton from '@/components/ReportButton';
import ViewReport from '@/components/ViewReport';
import { generate_report } from '@/constants/openai';
import { getSingleChart } from '@/lib/charts';
import { ChartInputs } from '@/types/Types';
import axios from 'axios';
import { useEffect, useState } from 'react';

function VisualizerWithChartId({ params }: { params: { chartId: string } }) {
	const [report, setReport] = useState<Report | undefined>();
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

  async function getChart() {
    const response = await axios.post('/api/singleChart', {
      data: params.chartId,
    });
    const data = response.data.chart;
    setData(data);
		setReport(response.data.report)
  }
  return (
    <div role="Visualizer" className="flex-1 flex flex-col items-stretch">
      <div className="mx-4 h-[80vh]">{data ? <Chart data={data} /> : null}</div>
      <div className="mt-auto flex items-center justify-center mx-4">
        <ViewReport report={report}></ViewReport>
      </div>
    </div>
  );
}

export default VisualizerWithChartId;
