import Header from "./Header";
import Footer from "./Footer";
import Article from "./Article";

const Layout = ({ children }) => (
  <>
    <style jsx>
      {`
        .header {
          width: 1020px;
          height: 100px;
          margin: 15px auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      `}
    </style>
    <Article />
    <header className="header">
      <Header />
    </header>
    <div className="main">{children}</div>
    <Footer />
  </>
);

export default Layout;
