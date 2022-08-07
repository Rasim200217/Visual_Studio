import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { PhotoStudio } from "./components/PhotoStudio";
import { Portfolio } from "./components/Portfolio";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <PhotoStudio />
      <Portfolio />
    </div>
  );
}

export default App;
