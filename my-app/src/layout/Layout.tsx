import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: { children: any }) => {
  return (
    <>
      <div className="App h-full min-h-dvh">
        <Header />
        <div className="flex justify-center px-40 py-10">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
