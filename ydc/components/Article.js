import React from "react";
import Link from "next/link";
import Router from "next/router";

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      name: null,
    };
  }
  componentDidMount() {
    window.sessionStorage.getItem("email") != null &&
      this.setState({
        email: window.sessionStorage.getItem("email"),
        name: window.sessionStorage.getItem("name"),
      });
  }

  render() {
    const onLogout = () => {
      window.sessionStorage.clear();
      alert("로그아웃되었습니다.");
      location.href = "/";
    };
    const adminBtn = () => {
      location.href = "/admin";
    };
    return (
      <>
        <style jsx>
          {`
            article {
              width:1080px;
              padding: 0.3rem;
              border-bottom: 1px solid #dedede;
              background: #f1f3f5;
            }

            .articleDetail {
              width: 1020px;
              margin: 0 auto;
              display: flex;
              justify-content: flex-end;
              align-items: center;
              font-size: 12px;
              color: #868e96;
            }

            .articleButton {
              margin-left: 1rem;
              cursor: pointer;
            }

            .articleWelcome {
              margin-left: 1rem;
              cursor: pointer;
            }
          `}
        </style>
        <article className="article">
          <div className="articleDetail">
            {this.state.email == "ydconnect@gmail.com" && (
              <>
                <div onClick={adminBtn} className="articleButton">
                  관리자 페이지
                </div>
              </>
            )}
            {this.state.name != null ? (
              <>
                <div className="articleWelcome">
                  <a href="#">{this.state.name}</a>님 어서오세요
                </div>
                <div
                  onClick={() => {
                    Router.push("/profile");
                  }}
                  className="articleButton"
                >
                  마이페이지
                </div>
                <div onClick={onLogout} className="articleButton">
                  로그아웃
                </div>
              </>
            ) : (
              <>
                <Link href="/signin">
                  <div className="articleButton">로그인</div>
                </Link>
                <Link href="/signup">
                  <div className="articleButton">회원가입</div>
                </Link>
              </>
            )}
          </div>
        </article>
      </>
    );
  }
}

export default Article;
