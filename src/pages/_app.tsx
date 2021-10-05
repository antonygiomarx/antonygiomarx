import { AppProps } from "next/app";

import "tailwindcss/tailwind.css";
import "normalize.css";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps}></Component>;
}
export default MyApp;
