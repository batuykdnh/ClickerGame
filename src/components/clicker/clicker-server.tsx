import { ClickForm } from "./clicker";

export async function ClickWrapper() {
  return (
    <div className="grid grid-rows-[1fr_3fr] justify-items-center ">
      <h1 className=" self-center text-7xl font-extrabold">Just Click </h1>
      <ClickForm />
    </div>
  );
}
