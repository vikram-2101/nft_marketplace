import { NavBar } from "../components/componentsindex";
import "../styles/globals.css";
const MyApp = ({ Component, pageProps }) => (
  <div>
    <NavBar />
    <Component {...pageProps} />
  </div>
);

export default MyApp;
