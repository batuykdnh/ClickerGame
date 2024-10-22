import { revalidatePath } from "next/cache";
import { getClickCount, increaseClickCount } from "@/lib/data";
import { redirect } from "next/navigation";

export async function POST(req: Request) {
  const data = await increaseClickCount();
  return Response.json({ data: data });
}

export async function GET(req: Request) {
  const data = await getClickCount();
  return Response.json({ count: data });
}
