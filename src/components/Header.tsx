import { ArrowBigDown } from "lucide-react";

const Header = () => {
  return (
    <header className="flex h-screen flex-col items-center justify-center gap-24 bg-slate-700">
      <div className="flex flex-col items-center justify-center rounded-lg bg-zinc-200 max-lg:w-3/4 max-lg:p-5 lg:w-10/12 lg:p-12">
        <h1 className="cursor-default  text-center font-title text-zinc-700 transition-colors hover:text-amber-600 max-lg:text-4xl lg:text-5xl">
          Welcome to CheckMeals !
        </h1>
      </div>
      <a href="#main" className=" flex w-1/3 justify-center">
        <button className="flex items-center rounded-md border bg-neutral-700 p-3 font-global text-lg font-bold text-white shadow-lg ring-slate-900 transition-transform hover:scale-110 hover:bg-neutral-500/80 active:scale-75 max-lg:justify-evenly  max-lg:gap-0 max-lg:text-center max-lg:text-sm md:w-3/4 lg:justify-center lg:gap-5 lg:text-2xl">
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
