import { TvMinimalPlay } from "lucide-react";

interface Meal {
  strMeal: string;
  strCategory: string;
  strInstructions: string;
  strArea: string;
  strMealThumb: string;
  strSource: string;
  strYoutube: string;
}

const Card = ({ meal }: { meal: Meal }) => {
  return (
    <div className="mx-auto flex flex-col items-center justify-center gap-5 rounded-md bg-zinc-200 p-8 shadow-md sm:w-3/4 sm:p-4 lg:w-1/3 lg:px-14 lg:py-10">
      <div className="flex w-1/2 flex-col items-center justify-center gap-2">
        <img
          className="rounded-lg shadow-md max-sm:w-2/3  lg:w-3/4"
          src={meal.strMealThumb}
          alt={meal.strMeal}
        />
        <a
          className="transition-colors hover:animate-pulse hover:text-red-600"
          href={meal.strYoutube}
        >
          <TvMinimalPlay size={32} strokeWidth={1} />
        </a>
      </div>
      <h1 className="cursor-default font-title text-xl tracking-wider text-lime-900 transition-colors hover:text-lime-600">
        {meal.strMeal} - {meal.strArea}
      </h1>
      <p className="cursor-default text-lg italic tracking-wide text-gray-600 transition-transform hover:scale-110">
        Category : {meal.strCategory}
      </p>
      <button className="rounded-sm border border-slate-900 bg-slate-800 px-5 py-2 font-bold text-slate-200 shadow-lg transition-colors hover:bg-slate-600">
        <a href={meal.strSource} className="">
          Read the recipe
        </a>
      </button>
    </div>
  );
};

export default Card;
