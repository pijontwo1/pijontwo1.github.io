import { InputGroup, Input, InputRightElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { RiMessage3Line, RiShoppingCart2Line } from "react-icons/ri";
import React from "react";
import Link from "next/link";
import Router from "next/router";

class Header extends React.Component {
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
    const isNotLogin = () => {
      alert("로그인 후 이용가능합니다");
      Router.push("/signin");
    };
    return (
      <>
        <style jsx>
          {`
            .headerLogo {
              width: 150px;
            }

            .searchField {
              width: 450px;
              height: 35px;
              border: none;
            }

            .accountMenuSide {
              margin: 0;
              list-style: none;
              display: flex;
              justify-content: space-between;
              align-items: center;
            }

            .accountMenuDetail {
              margin-left: 1.5rem;
              cursor: pointer;
              font-size: 35px;
              color: #495057;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }

            .accountMenuLabel {
              font-size: 12px;
            }
          `}
        </style>
        <a style={{ cursor: "pointer" }} onClick={() => Router.push("/")}>
          <img
            className="headerLogo"
            src="/logo_big.png"
            alt="Header Logo Image"
          />
        </a>
        <div className="searchField">
          <InputGroup>
            {/* <Input placeholder="검색" />
            <InputRightElement
              children={<SearchIcon color="gray.500" />}
              cursor="pointer"
            /> */}
          </InputGroup>
        </div>
        <ul className="accountMenuSide">
          <li className="accountMenu">
            <Link href="/inquire">
              <div className="accountMenuDetail">
                <RiMessage3Line />
                <span className="accountMenuLabel">문의하기</span>
              </div>
            </Link>
          </li>

          {this.state.name != null ? (
            <>
              <li className="accountMenu">
                <Link href="/cart">
                  <div className="accountMenuDetail">
                    <RiShoppingCart2Line />
                    <span className="accountMenuLabel">장바구니</span>
                  </div>
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="accountMenu">
                <Link href="#">
                  <a onClick={isNotLogin}>
                    <div className="accountMenuDetail">
                      <RiShoppingCart2Line />
                      <span className="accountMenuLabel">장바구니</span>
                    </div>
                  </a>
                </Link>
              </li>
            </>
          )}
        </ul>
      </>
    );
  }
}

export default Header;
