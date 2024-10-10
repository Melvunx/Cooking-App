import { ArrowBigDown } from "lucide-react";

const Header = () => {
  return (
    <header className="flex h-screen flex-col items-center justify-center gap-20 bg-slate-700">
      <div className="flex flex-col items-center justify-center rounded-lg bg-zinc-300 ">
        <h1 className="px-20 py-12 font-title text-6xl text-zinc-700 transition-colors hover:text-amber-600">
          Welcome to CheckMeals !
        </h1>
      </div>
      <a href="#main">
        <button className="flex items-center gap-5 rounded-md border bg-neutral-700 p-3 font-global text-lg font-bold text-white shadow-lg ring-slate-900 transition-colors hover:bg-neutral-500/80 max-md:w-1/3 max-md:justify-evenly max-md:gap-0">
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
