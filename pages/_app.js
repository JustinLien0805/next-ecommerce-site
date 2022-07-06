import "../styles/globals.css";
import { ShoppingCartProvider } from "../context/ShoppingCartContext";
function MyApp({ Component, pageProps }) {
  return (
    <ShoppingCartProvider>
      <Component {...pageProps} />
    </ShoppingCartProvider>
  );
}

export default MyApp;
