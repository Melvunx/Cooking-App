// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-expect-error
import Card from "@layout/Card";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-expect-error
import Search from "@layout/Search";

const Home = () => {
  return (
    <div>
      <Search />
      <main>
        <Card />
      </main>
    </div>
  );
};

export default Home;
