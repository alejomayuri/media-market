import "App.css";
import SiteHeader from "components/SiteHeader";
import Home from "pages/Home";
import Productos from "pages/Productos";
import SiteFooter from "components/SiteFooter";
import FixedWhatsAppButton from "components/FixedWhatsAppButton";
import { Route } from "wouter";
import HomeBanner from "components/HomeBanner";

function App() {
  return (
    <div className="App">
      <SiteHeader />
      <HomeBanner />
      <Route component={Home} path="/" />

      {/*Borrar la ruta de abajo*/}
      <Route
        component={Productos}
        path="/productos/:categoria/:subcategoria?"
      />

      {/*Esta es la correcta*/}
      <Route component={Productos} path="/productos" />

      <Route component={() => <h1>404 ERROR :(</h1>} path="/404" />
      <FixedWhatsAppButton />
      <SiteFooter />
    </div>
  );
}

export default App;
