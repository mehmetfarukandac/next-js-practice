import "@styles/globals.css";

export const metadata = {
  title: "Promptia",
  description: "Discover & Share AI Prompts",
};

const RouteLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RouteLayout;
