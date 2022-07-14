import "../styles/globals.css";
import { ShoppingCartProvider } from "../context/ShoppingCartContext";
import Header from "../components/Header";
function MyApp({ Component, pageProps }) {
  return (
    <ShoppingCartProvider>
      <Header />
      <Component {...pageProps} />
    </ShoppingCartProvider>
  );
}

export default MyApp;
