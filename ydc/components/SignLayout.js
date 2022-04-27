import Link from "next/link";

export default function SignLayout({ children }) {
  return (
    <>
      <style jsx>
        {`
          .headerLogo {
            width: 200px;
            margin: 2rem auto;
            cursor: pointer;
          }

          .AuthForm {
            width: 350px;
            margin: 1rem auto;
            display: flex;
            flex-direction: column;
          }
        `}
      </style>
      <Link href="/">
        <img className="headerLogo" src="logo_big.png" alt="Logo image" />
      </Link>
      <div className="AuthForm">{children}</div>
    </>
  );
}
