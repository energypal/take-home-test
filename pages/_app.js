import "../styles/globals.css";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

function MyApp({ Component, pageProps }) {
  return (
    <div
      className={`${roboto.variable} font-sans min-h-screen bg-gray-50 flex flex-col justify-between`}
    >
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
