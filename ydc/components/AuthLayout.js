import Link from "next/link";

const AuthLayout = ({ children }) => (
  <>
    <style jsx>
      {`
        .authSide {
          width: 300px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .headerLogo {
          width: 200px;
          margin: 2rem;
          cursor: pointer;
        }

        .main {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      `}
    </style>
    <div className="authSide">
      <Link href="/">
        <img className="headerLogo" src="logo_ydshop.png" alt="Logo image" />
      </Link>
      <div className="main">{children}</div>
    </div>
  </>
);

export default AuthLayout;
