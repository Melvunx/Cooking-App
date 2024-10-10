import { ArrowBigDown } from "lucide-react";

const Header = () => {
  return (
    <header className="flex h-screen flex-col items-center justify-center gap-24 bg-slate-700">
      <div className="flex flex-col items-center justify-center rounded-lg bg-zinc-200 ">
        <h1 className="cursor-default p-20 font-title text-6xl text-zinc-700 transition-colors hover:text-amber-600">
          Welcome to CheckMeals !
        </h1>
      </div>
      <a href="#main" className=" flex w-1/3 justify-center">
        <button className="flex items-center gap-5 rounded-md border bg-neutral-700 p-3 font-global text-lg font-bold text-white shadow-lg ring-slate-900 transition-transform hover:scale-110 hover:bg-neutral-500/80 active:scale-75  max-md:w-full max-md:justify-evenly max-md:gap-0 max-md:text-center">
          <span className="animate-pulse">
            <ArrowBigDown />
          </span>{" "}
          Go down !
        </button>
      </a>
    </header>
  );
};

export default Header;
