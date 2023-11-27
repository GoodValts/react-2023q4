import ErrorBoundary from "@/modules/errorBoundary";
import "@/styles/index.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <Component {...pageProps} />;
    </ErrorBoundary>
  );
}
