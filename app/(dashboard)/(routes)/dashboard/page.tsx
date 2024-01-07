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
import { Chart } from '@prisma/client';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Dashboard() {
  const [charts, setCharts] = useState<Array<Chart>>();
  async function getCharts() {
    try {
      const response = await axios.get('/api/charts');
      // console.log(response.data);
      setCharts(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCharts();
  }, []);

  useEffect(() => {
    console.log(charts);
  }, [charts]);

  return (
    <div role="Dashboard" className="text-white mx-4">
      <p className="text-2xl tracking-wider font-semibold m-0 p-0">
        Welcome to Worldview!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mt-12">
        {charts
          ? charts.map((chart: Chart) => (
              <div key={chart.id}>
                <Card className="bg-muted h-full flex flex-col">
                  <CardHeader className="pb-1">
                    <CardTitle>{chart.chart!.country}</CardTitle>
                    {/* <CardDescription>{chart.chart!.indicator}</CardDescription> */}
                  </CardHeader>
                  <CardContent className="pb-4">
                    <p>
                      {chart.chart!.indicator}: {chart.chart!.labels[0]} -{' '}
                      {chart.chart!.labels[chart.chart!.labels.length - 1]}
                    </p>
                  </CardContent>
                  <Button className="ml-4 mb-4 mt-auto h-8 w-24">
                    View Chart
                  </Button>
                </Card>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default Dashboard;
