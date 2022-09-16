import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
