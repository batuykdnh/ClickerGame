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
    const data = await prisma.clickedObject.updateMany({
      data: {
        count: {
          increment: 1,
        },
      },
    });
  } catch (e) {
    return "Error!";
  }

  return "Success!";
}
