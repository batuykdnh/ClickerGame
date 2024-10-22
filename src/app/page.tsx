import { ClickWrapper } from "@/components/clicker/clicker-server";
import { Suspense } from "react";

export default async function Home() {
  return (
    <Suspense>
      <ClickWrapper></ClickWrapper>
    </Suspense>
  );
}
