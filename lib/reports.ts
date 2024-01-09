import { auth } from '@clerk/nextjs';
import prismadb from './prismadb';

export const storeReport = async (report: any) => {
  const { userId } = auth();

  if (!userId) {
    return;
  }

  try {
    const prismaResponse = await prismadb.report.create({
      data: {
        userId: userId,
        report: report,
      },
    });
  } catch (error) {
    console.log('ERROR WITH PLANETSCALE', error);
  }
};

export const getReports = async () => {
  const { userId } = auth();

  if (!userId) {
    return;
  }

  try {
    const reports = await prismadb.report.findMany({
      where: {
        userId,
      },
    });

    return reports;
  } catch (error) {
    console.log('ERROR WITH PLANETSCALE', error);
  }
};

export const saveReport = async (report: any, chartId: string) => {
  console.log(report)
  const { userId } = auth();

  if (!userId) {
    return;
  }

  try {
    const updateReport = await prismadb.chart.update({
      where: {
        id: chartId,
      },
      data: {
        report: report,
      },
    });
  } catch (error) {
    console.log('ERROR WITH STORING REPORT', error);
  }
};
