import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Intro } from "./components/Intro";
import { Navbar } from "./components/Navbar";
import { OurTeam } from "./components/OurTeam";
import { PhotoStudio } from "./components/PhotoStudio";
import { Portfolio } from "./components/Portfolio";
import { StudioRental } from "./components/StudioRental";
import { TheVisualStudio } from "./components/TheVisualStudio";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <PhotoStudio />
      <Portfolio />
      <TheVisualStudio />
      <Intro />
      <StudioRental />
      <OurTeam />
      <Footer />
    </div>
  );
}

export default App;
