import Nav from "@components/Nav";
import Provider from "@components/Provider";
import "@styles/globals.css";

export const metadata = {
  title: "Prompshare",
  description: "Discover & share AI Prompts",
};
const RootLayout = ({ children }) => {
  return (
    <html lang="eng">
      <body>
        <Provider>
          <div className="main">
            <di className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};
export default RootLayout;
