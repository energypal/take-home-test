import "../styles/globals.css";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  weight: ["300", "400"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

function MyApp({ Component, pageProps }) {
  return (
    <main className={`${roboto.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
