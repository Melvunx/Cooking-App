import Card from "@layout/Card";
import Search from "@layout/Search";

const Home = () => {
  return (
    <div className="bg-slate-300">
      <Search />
      <main id="main">
        <Card />
      </main>
    </div>
  );
};

export default Home;
