import "App.css";
import SiteHeader from "components/SiteHeader";
import Home from "pages/Home";
import Productos from "pages/Productos";
import SiteFooter from "components/SiteFooter";
import FixedWhatsAppButton from "components/FixedWhatsAppButton";
import { Route } from "wouter";
import { CartProductsProvider } from "context/CartProductsContext";
// import HomeBanner from "components/HomeBanner";

function App() {
  return (
    <CartProductsProvider>
      <div className="App">
        <SiteHeader />
        {/* <HomeBanner /> */}
        <Route component={Home} path="/" />

        {/*Esta es la correcta*/}
        <Route component={Productos} path="/catalogo" />

        <Route component={() => <h1>404 ERROR :</h1>} path="/404" />
        <FixedWhatsAppButton />
        <SiteFooter />
      </div>
    </CartProductsProvider>
  );
}

export default App;
