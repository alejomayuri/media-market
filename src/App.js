import "App.css";
import SiteHeader from "components/SiteHeader";
import Home from "pages/Home";
import Productos from "pages/Productos";
import Cart from "pages/Cart";
import SiteFooter from "components/SiteFooter";
import FixedWhatsAppButton from "components/FixedWhatsAppButton";
import { Route } from "wouter";
import { CartProductsProvider } from "context/CartProductsContext";
import Product from "pages/Product";
import Checkout from "pages/Checkout";
import Login from "pages/Login";
import MyShopping from "pages/MyShopping";
// import HomeBanner from "components/HomeBanner";

function App() {
  return (
    <CartProductsProvider>
      <div className="App">
        <SiteHeader />

        <Route component={Home} path="/" />

        <Route component={Productos} path="/catalogo" />

        <Route component={Cart} path="/carrito" />

        <Route component={Product} path="/productos/:id" />

        <Route component={Checkout} path="/checkout" />

        <Route component={Login} path="/login" />

        <Route component={MyShopping} path="/mis-compras" />

        <Route component={() => <h1>404 ERROR :</h1>} path="/404" />

        <FixedWhatsAppButton />
        <SiteFooter />
      </div>
    </CartProductsProvider>
  );
}

export default App;
