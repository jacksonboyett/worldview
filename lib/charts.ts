import { auth } from '@clerk/nextjs';
import prismadb from './prismadb';

export const storeChart = async (chart: any) => {
  const { userId } = auth();

  if (!userId) {
    return;
  }

  try {
    const prismaResponse = await prismadb.chart.create({
      data: {
        userId: userId,
        chart: chart,
        report: {},
      },
    });
  } catch (error) {
    console.log('ERROR WITH STORING CHART', error);
  }
};

export const getCharts = async () => {
  const { userId } = auth();

  if (!userId) {
    return;
  }

  try {
    const charts = await prismadb.chart.findMany({
      where: {
        userId
      }
    });

    return charts
  } catch (error) {
    console.log('ERROR WITH PLANETSCALE', error);
  }
};