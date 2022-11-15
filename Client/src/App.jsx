import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar";
import { Services } from "./components/Services";
import { Transactions } from "./components/Transactions";
import { Welcome } from "./components/Welcome";

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
};

export default App;
