import "@/styles/globals.scss";

import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--montserrat-font",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${montserrat.style.fontFamily};
          margin: 0px;
          padding: 0px;
        }
        body {
          margin: 0px;
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
