import "App.css";
import SiteHeader from "components/SiteHeader";
import Home from "pages/Home";
import Productos from "pages/Productos";
import SiteFooter from "components/SiteFooter";
import FixedWhatsAppButton from "components/FixedWhatsAppButton";
import { useProducts } from "hooks/useProducts";
import { Route } from "wouter";

function App() {
  const products = useProducts();
  console.log(products);
  return (
    <div className="App">
      <SiteHeader />
      <Route component={Home} path="/" />
      <Route
        component={Productos}
        path="/productos/:categoria/:subcategoria?"
      />
      <Route component={() => <h1>404 ERROR :(</h1>} path="/404" />
      <FixedWhatsAppButton />
      <SiteFooter />
    </div>
  );
}

export default App;
