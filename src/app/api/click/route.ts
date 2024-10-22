import { getClickCount, increaseClickCount } from "@/lib/data";

export async function POST() {
  const data = await increaseClickCount();
  return Response.json({ data: data });
}

export async function GET() {
  const data = await getClickCount();
  return Response.json({ count: data });
}
