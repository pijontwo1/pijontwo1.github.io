export default function Footer() {
  return (
    <>
      <style jsx>
        {`
          footer {
            padding: 0.5rem;
            width:1080px;
            border-top: 1px solid #dedede;
            background: #f1f3f5;
          }

          .footerDetail {
            width: 1020px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            font-size: 12px;
            color: #868e96;
          }

          .sectionLogo {
            width: 200px;
          }

          .logo {
            width: 120px;
            cursor: pointer;
          }

          .sectionDetail {
            width: 250px;
          }
        `}
      </style>
      <footer className="footer">
        <div className="footerDetail">
          <div className="sectionLogo">
            <img className="logo" src="logo_big.png" alt="Logo Image" />
          </div>
          <div className="sectionDetail">
            <p>
              12341234
              <br />
              대표이사 : 1234
              <br />
              사업자 등록번호 : 123412341234
              <br />
              부산광역시 영도구
              {/* 통신판매업 : 2021-xxxx-xxxxx */}
            </p>
          </div>
          <div className="sectionDetail">
            <p>
              Tel : 051-123-4567
              <br />
              &emsp;&emsp;010-1234-1234
              <br />
              Email : 1234@1234@134
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
