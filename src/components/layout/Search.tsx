import { useState } from "react";

const Search = () => {
  const [isFocus, setIsFocus] = useState(false);

  return (
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
          className="rounded-sm border p-2 shadow-sm outline-none ring-2 transition-colors placeholder:font-global placeholder:italic placeholder:tracking-wide hover:bg-blue-50 hover:placeholder:text-zinc-500 hover:placeholder:transition-colors focus:bg-blue-100 focus:placeholder:text-zinc-800/60"
          type="text"
          placeholder="ex: beef..."
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
        />
      </div>
    </div>
  );
};

export default Search;
