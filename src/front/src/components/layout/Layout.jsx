import Header from "./header/Header";

const Layout = ({ children }) => {
  return (
    <div>
      layout
      <Header />
      {children}
    </div>
  );
};
export default Layout;
