import { TvMinimalPlay } from "lucide-react";

interface Meal {
  strMeal: string;
  strCategory: string;
  strArea: string;
  strMealThumb: string;
  strSource: string;
  strYoutube: string;
}

const Card = ({ meal }: { meal: Meal }) => {

  // const [ingredient, setIngredient] = 

  // for (let i = 1; i < 21; i++) {
  //   if (meal[`strIngredient${i}`]) {
  //     console.log("hello");
  //   }
  // }

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
      <ul></ul>
    </div>
  );
};

export default Card;
