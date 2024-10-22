"use client";

import { FormEvent, useEffect, useState } from "react";
import { PiAcornFill } from "react-icons/pi";
import { useQuery } from "@tanstack/react-query";
import clsx from "clsx";

export function ClickForm() {
  const [count, setCount] = useState(0);
  const [active, setActive] = useState(false);

  const countDb = useQuery({
    queryKey: ["click-count"],
    queryFn: async () => {
      const response = await fetch("/api/click");
      const data = await response.json();
      setActive(true);
      return data;
    },
    refetchInterval: 1000 * 30,
  });

  useEffect(() => {
    if (countDb.data?.count) setCount(countDb.data?.count);
  }, [countDb.data?.count]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setCount(count + 1);
    await fetch("/api/click", { method: "POST" });
  }

  return (
    <div className="flex flex-col gap-20 justify-center items-center">
      <h1 className="text-7xl font-extrabold">Total Click Amount: </h1>
      <CountDiv key={count} count={count} />
      <form onSubmit={onSubmit}>
        <button
          className={clsx("", {
            hidden: !active,
          })}
          type="submit"
        >
          <PiAcornFill className="w-20 h-20 transition hover:scale-125" />
        </button>
      </form>
    </div>
  );
}

function CountDiv({ count }: { count: number }) {
  return (
    <div
      className="bg-blue-400 rounded-lg p-5 flex items-center
   justify-center text-6xl font-extrabold animate-fadeIn"
    >
      <p>{count}</p>
    </div>
  );
}
