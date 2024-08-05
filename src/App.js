import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./Components/Navbar/Navbar";
import NavbarSecondary from "./Components/Navbar/NavbarSecondary";
import LandingPage from "./Components/MainPage/MainPage";
import CardsContainer from "./Components/Page2/CardUI";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <NavbarSecondary />
      <LandingPage />
      <CardsContainer />
    </div>
  );
}

export default App;
