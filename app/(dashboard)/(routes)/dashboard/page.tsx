'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ChartInputs, Report } from '@/types/Types';
import { Chart } from '@prisma/client';
import axios from 'axios';
import { LineChart, Loader } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

type ChartType = {
  id: string;
  userId: string;
  chart: ChartInputs
  report: Report
  createdAt: Date;
  updatedAt: Date;
}

function Dashboard() {
  const router = useRouter();
  const [charts, setCharts] = useState<Array<ChartType>>([]);
  const [isDeleting, setIsDeleting] = useState(false)
  async function getCharts() {
    try {
      const response = await axios.get('/api/charts');
      setCharts(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteChart(chartId: string) {
    setIsDeleting(true)
    try {
      const response = await axios.post('/api/deleteChart', {
        chartId: chartId
      });
      getCharts()
      setIsDeleting(false)
    } catch (error) {
      console.log(error);
    } finally {
      router.refresh();
    }
  }

  useEffect(() => {
    getCharts();
  }, []);

  return (
    <div role="Dashboard" className="text-white mx-4">
      <p className="text-2xl tracking-wider font-semibold m-0 p-0 underline">
        Thank you for using Worldview!
      </p>
      <Link href="/visualizer">
        <Button className="mt-6">
          <LineChart />
          <p className="ml-2">Visualize Data Here</p>
        </Button>
      </Link>
      {charts[0] ? (
        <div className="mt-6">Or view your saved charts below:</div>
      ) : null}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-2">
        {charts
          ? charts.map((chart: ChartType) => (
              <div key={chart.id}>
                <Card className="bg-muted h-full flex flex-col">
                  <CardHeader className="pb-1 pl-4">
                    <CardTitle>{chart.chart!.country}</CardTitle>
                    {/* <CardDescription>{chart.chart!.indicator}</CardDescription> */}
                  </CardHeader>
                  <CardContent className="pb-4 pl-4">
                    <p>
                      {chart.chart!.indicator}: {chart.chart!.labels[0]} -{' '}
                      {chart.chart!.labels[chart.chart!.labels.length - 1]}
                    </p>
                  </CardContent>
                  <div className="flex mt-auto">
                    <Link href={`/visualizer/${chart.id}`}>
                      <Button className="ml-4 mb-4 mt-auto h-8 w-24">
                        View Chart
                      </Button>
                    </Link>
                    <Button
                      className="ml-auto mr-4 mb-4 mt-auto h-8 w-28 bg-muted-foreground hover:bg-muted-foreground/90"
                      onClick={() => deleteChart(chart.id)}>
                      {isDeleting ? <Loader className="animate-[spin_3s_linear_infinite] mr-1" /> : 'Delete Chart'}
                    </Button>
                  </div>
                </Card>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default Dashboard;
