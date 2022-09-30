import "App.css";
import SiteHeader from "components/SiteHeader";
import Home from "pages/Home";
import SiteFooter from "components/SiteFooter";

function App() {
  return (
    <div className="App">
      <SiteHeader />
      <Home />
      <SiteFooter />
    </div>
  );
}

export default App;
