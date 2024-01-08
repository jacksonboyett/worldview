import { auth } from '@clerk/nextjs';
import prismadb from './prismadb';
import { MAX_FREE_COUNTS } from '@/constants/premiumSpecs';

export const increaseApiLimit = async () => {
  const { userId } = auth();

  if (!userId) {
    return;
  }

  let userApiLimit: any;

  try {
    userApiLimit = await prismadb.userApiLimit.findUnique({
      where: {
        userId,
      },
    });
  } catch (error) {
    console.log('Error fetching data with prisma', error);
  }

  if (userApiLimit) {
    await prismadb.userApiLimit.update({
      where: { userId: userId },
      data: { count: userApiLimit.count + 1 },
    });
  } else {
    await prismadb.userApiLimit.create({
      data: { userId: userId, count: 1 },
    });
  }
};

export const checkApiLimit = async () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  let userApiLimit: any;

  try {
    userApiLimit = await prismadb.userApiLimit.findUnique({
      where: {
        userId: userId,
      },
    });
  } catch (error) {
    console.log('Error fetching data with prisma', error);
  }

  if (!userApiLimit || userApiLimit.count < MAX_FREE_COUNTS) {
    return true;
  } else {
    return false;
  }
};

export const getApiLimitCount = async () => {
  console.log('API LIMIT COUNT CALLED');
  const { userId } = auth();

  if (!userId) {
    return 0;
  }

  let userApiLimit: any;

  try {
    userApiLimit = await prismadb.userApiLimit.findUnique({
      where: {
        userId,
      },
    });
  } catch (error) {
    console.log('Error fetching data with prisma', error);
  }

  if (!userApiLimit) {
    return 0;
  }

  console.log(userApiLimit.count);
  return userApiLimit.count;
};
