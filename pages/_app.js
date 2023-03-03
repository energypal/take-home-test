import "../styles/globals.css";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  weight: ["300", "400"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

function MyApp({ Component, pageProps }) {
  return (
    <div className={`${roboto.variable} font-sans h-screen`}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
