import Navbar from "../Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto">{children}</main>
      <footer></footer>
    </>
  );
};

export default Layout;
