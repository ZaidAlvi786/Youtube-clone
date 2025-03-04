import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { MantineProvider } from "@mantine/core";
import store from "../redux/store";
import "../styles/globals.css";
import type { Session } from "next-auth";

interface CustomAppProps extends AppProps {
  pageProps: {
    session?: Session;
  };
}

export default function App({ Component, pageProps }: CustomAppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        <MantineProvider>
          <Component {...pageProps} />
        </MantineProvider>
      </Provider>
    </SessionProvider>
  );
}
