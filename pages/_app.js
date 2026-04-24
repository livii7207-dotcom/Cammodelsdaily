import AgeGate from "../components/AgeGate";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <AgeGate />
      <Component {...pageProps} />
    </>
  );
}
