import prisma from "./db";

export async function getClickCount() {
  const data = await prisma.clickedObject.findFirst({
    select: {
      count: true,
    },
  });

  return data?.count;
}

export async function increaseClickCount() {
  try {
    await prisma.clickedObject.updateMany({
      data: {
        count: {
          increment: 1,
        },
      },
    });
  } catch (e: unknown) {
    return { error: e?.toString() };
  }

  return "Success!";
}
