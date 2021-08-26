import "../styles/globals.css";
import { UserContextProvider } from "@/utils/useUser";

function MyApp({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <Component {...pageProps} />
    </UserContextProvider>
  );
}

export default MyApp;
