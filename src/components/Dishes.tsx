import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./layout/Card";

const Dishes = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocus, setIsFocus] = useState(false);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + searchTerm)
      // S'il n'y a pas de résultat possible, on envoie un tableau vide
      .then((res) => setData(res.data.meals || []));
  }, [searchTerm]);

  return (
    <div>
      <div className="flex items-center justify-center bg-slate-300 p-16">
        <div className="flex flex-col  gap-8 rounded-lg bg-zinc-100 p-16 shadow-lg">
          <h3
            className={`cursor-default text-center font-title text-xl tracking-wide transition-colors ${
              isFocus ? "text-blue-500" : ""
            } `}
          >
            Tap your research
          </h3>
          <input
            className={`rounded-sm border p-2 font-global shadow-sm outline-none  transition-colors 
              ${
                data.length > 0
                  ? "border-green-500 text-green-500 ring-2"
                  : searchTerm && data.length === 0
                  ? "border-red-500 text-red-500"
                  : ""
              }
              placeholder:font-global placeholder:italic placeholder:tracking-wide hover:bg-blue-50 
              hover:placeholder:text-zinc-500 hover:placeholder:transition-colors focus:bg-blue-100 
              focus:placeholder:text-zinc-800/60`}
            type="text"
            placeholder="ex: beef"
            onInput={(e) => setSearchTerm((e.target as HTMLInputElement).value)}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
          />
        </div>
      </div>
      <ul className="flex flex-wrap justify-center gap-8 max-md:mx-auto max-md:w-10/12 lg:w-full">
        {data.length === 0 ? (
          <h1 className="cursor-default py-8 text-center font-global text-3xl tracking-wide text-zinc-500 transition-transform hover:scale-110 hover:text-red-800">
            No results found
          </h1>
        ) : (
          data
            .slice(0, 16)
            .map((meal, index) => <Card key={index} meal={meal} />)
        )}
      </ul>
    </div>
  );
};

export default Dishes;
