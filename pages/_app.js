import AgeGate from "../components/AgeGate";
import "../styles/globals.css";
import { Analytics } from '@vercel/analytics/next';

export default function App({ Component, pageProps }) {
  return (
    <>
      <AgeGate />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
