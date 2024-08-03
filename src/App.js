import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./Components/Navbar/Navbar";
import NavbarSecondary from "./Components/Navbar/NavbarSecondary";
import LandingPage from "./Components/MainPage/MainPage";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <NavbarSecondary />
      <LandingPage />
    </div>
  );
}

export default App;
