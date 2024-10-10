// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-expect-error
import Footer from "@components/Footer";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-expect-error
import Header from "@components/Header";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-expect-error
import Home from "@pages/Home";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
