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
    <div className="mx-auto flex w-1/3 flex-col items-center justify-center gap-5 rounded-md bg-zinc-200 py-6">
      <div className="flex w-1/2 flex-col items-center justify-center gap-2">
        <img
          className="w-1/2 rounded-lg"
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
        <a href={meal.strSource}>{meal.strMeal}</a> - {meal.strArea}
      </h1>
      <p>{meal.strCategory}</p>
      <p>{meal.strInstructions}</p>
      <ul>
        {ingredients.sort().map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
