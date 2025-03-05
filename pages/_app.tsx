import type { AppProps } from "next/app";
import { useLocalStorage } from "@mantine/hooks";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { MantineProvider, createTheme } from "@mantine/core";
import store from "../redux/store";
import "../styles/globals.css";
import { useEffect } from "react";

interface CustomAppProps extends AppProps {
  pageProps: {
    session?: any;
  };
}

export default function App({ Component, pageProps }: CustomAppProps) {
  const [theme, setTheme] = useLocalStorage<"light" | "dark">({
    key: "mantine-theme",
    defaultValue: "light",
  });

  // Apply the dark mode class to <html>
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const mantineTheme = createTheme({
    primaryColor: "red",
  });

  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        <MantineProvider theme={mantineTheme}>
          <Component {...pageProps} theme={theme} setTheme={setTheme} />
        </MantineProvider>
      </Provider>
    </SessionProvider>
  );
}
