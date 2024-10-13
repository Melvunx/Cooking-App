import { TvMinimalPlay } from "lucide-react";
import { useEffect, useState } from "react";

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
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const uniqueIngredients = new Set<string>();
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}` as keyof Meal];
      if (
        ingredient &&
        typeof ingredient === "string" &&
        !uniqueIngredients.has(ingredient)
      ) {
        uniqueIngredients.add(ingredient);
      }
    }
    setIngredients(Array.from(uniqueIngredients));
  }, [meal]);

  return (
    <div className="mx-auto flex w-3/4 flex-col items-center justify-center gap-5 rounded-md bg-zinc-200 px-14 py-10 shadow-md">
      <div className="flex w-1/2 flex-col items-center justify-center gap-2">
        <img
          className="w-2/3 rounded-lg shadow-md"
          src={meal.strMealThumb}
          alt={meal.strMeal}
        />
        <a
          className="transition-colors hover:animate-pulse hover:text-red-600"
          href={meal.strYoutube}
        >
          <TvMinimalPlay size={30} strokeWidth={1} />
        </a>
      </div>
      <h1>
        <a href={meal.strSource}>
          {meal.strMeal} - {meal.strArea}
        </a>
      </h1>
      <p>Category : {meal.strCategory}</p>
      {/* Toggle button to open or close the content */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`rounded-sm border border-slate-800 px-5 py-2 shadow-lg transition-colors ${
          isOpen
            ? "bg-slate-800 hover:bg-slate-600"
            : "bg-zinc-800  hover:bg-zinc-600"
        }`}
      >
        <h3 className="font-bold text-white hover:text-slate-200">
          {isOpen ? "Hide the receips" : "Discover..."}
        </h3>
      </button>
      {/* Conditionally rendered content based on isOpen */}
      {isOpen && (
        <div className="bg-orange-300">
          <ul className="mx-auto flex w-3/4 flex-wrap items-center justify-center gap-6">
            <h3 className="underline">We need :</h3>
            {ingredients.sort().map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          {meal.strInstructions.length > 800 ? (
            <p className="w-3/4">
              {`${meal.strInstructions.slice(0, 800)}...  `}{" "}
              <a href={meal.strSource}>The full recipe here !</a>
            </p>
          ) : (
            <p className="mx-auto w-3/4 text-center">{meal.strInstructions}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Card;
