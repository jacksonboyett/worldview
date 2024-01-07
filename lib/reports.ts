import { auth } from '@clerk/nextjs';
import prismadb from './prismadb';

export const storeReport = async (report: any) => {
  const { userId } = auth();

  if (!userId) {
    return;
  }

  // console.log(report)

  try {
    const prismaResponse = await prismadb.report.create({
      data: {
        userId: userId,
        report: report,
      },
    });

    // console.log(prismaResponse);
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
        userId
      }
    });

    return reports
  } catch (error) {
    console.log('ERROR WITH PLANETSCALE', error);
  }
};