import Nav from "@components/Nav";
import "@styles/globals.css";

export const metadata = {
  title: "Prompshare",
  description: "Discover & share AI Prompts",
};
const RootLayout = ({ children }) => {
  return (
    <html lang="eng">
      <body>
        <div className="main">
          <di className="gradient" />
        </div>
        <main className="app">
            <Nav />
            {children}
            </main>
      </body>
    </html>
  );
};
export default RootLayout;
