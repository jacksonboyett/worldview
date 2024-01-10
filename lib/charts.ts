import { auth } from '@clerk/nextjs';
import prismadb from './prismadb';

export const storeChart = async (chart: any, report: any) => {
  const { userId } = auth();

  if (!userId) {
    return;
  }

  try {
    const prismaResponse = await prismadb.chart.create({
      data: {
        userId: userId,
        chart: chart,
        report: report,
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

export const getSingleChart = async (chartId: string) => {
  const { userId } = auth();

  if (!userId) {
    return;
  }

  try {
    const chart = await prismadb.chart.findUnique({
      where: {
        id: chartId
      }
    });

    return chart
  } catch (error) {
    console.log('ERROR WITH PLANETSCALE', error);
  }
};

export const deleteChart = async (chartId: string) => {
  const { userId } = auth();

  if (!userId) {
    return;
  }

  try {
    const prismaResponse = await prismadb.chart.delete({
      where: {
        id: chartId
      }
    });
  } catch (error) {
    console.log('ERROR WITH DELETING CHART', error);
  }
};