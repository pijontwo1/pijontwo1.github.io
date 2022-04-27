import Link from "next/link";
import Router from "next/router";
import { useRouter, withRouter } from "next/router";
import Layout from "../components/Layout";
import React from "react";
import styled from "styled-components";
import PCList from "./PCList.json"
import * as qs from "querystring";

const ShopDetailTop = styled.th.attrs({
  colSpan: 2,
})`
  border-bottom: 1px solid #ccc;
  font-weight: bold;
  padding: 15px 0;
  background-color: #f5f5f5;
  width: 930px;
`;

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      email: null,
      itemId: null,
      data: PCList,
    };
  }

  // componentDidMount() {
  //   const { query } = this.props.router;
  //   window.sessionStorage.getItem("email") != null &&
  //     this.setState({
  //       isLogin: true,
  //       email: window.sessionStorage.getItem("email"),
  //       itemId: query.id,
  //     });

  //   fetch(process.env.LocalHost + "/product", {
  //     method: "post",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       id: query.id,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       this.setState({
  //         data: res,
  //       });
  //     });
  // }
  render() {
    const { data } = this.state;

    // console.log(qs.parse(location.search.replace('?','')));
    const checkCartFunction = () => {
      
      // fetch(process.env.LocalHost + "/productCheckExist", {
      //   method: "post",
      //   headers: {
      //     "content-type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     email: this.state.email,
      //     itemId: this.state.itemId,
      //   }),
      // })
      //   .then((res) => res.json())
      //   .then((res) => {
      //     if (res.length != 0) {
      //       alert("장바구니에 이미 추가된 상품입니다");
      //       Router.push("/cart");
      //     } else {
      //       addCartFunction();
      //     }
      //   });
    };

    const addCartFunction = () => {
      window.confirm("장바구니에 담으시겠습니까?") &&
      alert("완료")
        // fetch(process.env.LocalHost + "/productAddCart", {
        //   method: "post",
        //   headers: {
        //     "content-type": "application/json",
        //   },
        //   body: JSON.stringify({
        //     email: this.state.email,
        //     itemId: this.state.itemId,
        //   }),
        // })
        //   .then((res) => res.json())
        //   .then((res) => {
        //     alert("장바구니에 추가되었습니다.");
        //     Router.push("/cart");
        //   });
    };

    const addCart = () => {
      this.state.isLogin == true ? (
        <>
          {checkCartFunction()}
          {/* {window.confirm("장바구니에 담으시겠습니까?") && checkCartFunction()} */}
        </>
      ) : (
        <>
          {alert("로그인 후 이용가능합니다")}
          {Router.push("/signin")}
        </>
      );
    };
    return (
      <>
        <Layout>
          <style jsx>{`
            .shopDetailBody {
              margin: 50px auto;
              width: 1020px;
              position: relative;
            }
            .shopDetailTable {
              border-top: 2px solid #1199ff;
              border-bottom: 1px solid #dddddd;
              border-right: 1px solid #dddddd;
              border-left: 1px solid #dddddd;
              width: 100%;
              margin-top: 10px;
              margin-bottom: 10px;
              display: flex;
              flex-direction: column;
            }
            .shopDetailTbody {
              padding: 15px;
            }
            .shopDetailTr {
              display: flex;
              justify-content: center;
              width: 1000px;
              margin: 0 auto;
            }
            .shopDetailImg {
              width: 320px;
              padding: 15px;
              display: inline-block;
            }
            .shopDetailSpan {
              display: block;
              line-height: 20px;
              letter-spacing: -1px;
            }
            .tableCate {
              padding: 0 30px;
              border-right: 1px solid #ccc;
              border-bottom: 1px solid #ccc;
              border-bottom: 1px solid #ccc;
              width: 150px;
              height: 30px;
              font-size: 15px;
              font-weight: bold;
            }
            .tableDetail {
              text-align: left;
              padding: 0 30px;
              height: 30px;
              width: 450px;
              border-bottom: 1px solid #ccc;
              font-size: 14px;
              font-weight: 500;
            }
            .btnKeep {
              width: 200px;
              height: 40px;
              background-color: #ffffff;
              color: #346aff;
              font-size: 18px;
              font-weight: bold;
              border: 1px solid #346aff;
            }
            .btnBuy {
              width: 200px;
              height: 40px;
              background-color: #346aff;
              color: #ffffff;
              font-size: 18px;
              font-weight: bold;
              border: 1px solid #346aff;
              margin-left: 20px;
            }
            .sellPrice,
            .sellButton {
              flex: 1;
              font-size: 20px;
              font-weight: bold;
              display: flex;
              justify-content: center;
            }
          `}</style>
          <div className="shopDetailBody">
            <table className="shopDetailTable">
              <tbody className="shopDetailTbody">
                <tr className="shopDetailTr">
                  {/* {console.log(data.pclist[2])} */}
                  {/* {console.log(location.search)} */}
                  
                  <td>
                    <img
                      className="shopDetailImg"
                      // src={data.pclist[query].imgsrc1}
                    />
                    <img
                      className="shopDetailImg"
                      src={data[0] && data[0].imgsrc2}
                    />
                    <img
                      className="shopDetailImg"
                      src={data[0] && data[0].imgsrc3}
                    />
                  </td>
                  {/* <td>
                    <img
                      className="shopDetailImg"
                      src={data[0] && data[0].imgsrc1}
                    />
                    <img
                      className="shopDetailImg"
                      src={data[0] && data[0].imgsrc2}
                    />
                    <img
                      className="shopDetailImg"
                      src={data[0] && data[0].imgsrc3}
                    />
                  </td> */}
                </tr>
                <tr>
                  <td>
                    <table className="shopDetailTr">
                      <tbody>
                        <tr>
                          <ShopDetailTop>
                            {this.state.data[0] && this.state.data[0].title}
                          </ShopDetailTop>
                        </tr>
                        <tr>
                          <td className="tableCate">CPU</td>
                          <td className="tableDetail">
                            {this.state.data[0] && this.state.data[0].cpu}
                          </td>
                        </tr>
                        <tr>
                          <td className="tableCate">쿨러</td>
                          <td className="tableDetail">
                            {this.state.data[0] && this.state.data[0].cooler}
                          </td>
                        </tr>
                        <tr>
                          <td className="tableCate">메모리</td>
                          <td className="tableDetail">
                            {this.state.data[0] && this.state.data[0].memory}
                          </td>
                        </tr>
                        <tr>
                          <td className="tableCate">메인보드</td>
                          <td className="tableDetail">
                            {this.state.data[0] && this.state.data[0].mainboard}
                          </td>
                        </tr>
                        <tr>
                          <td className="tableCate">그래픽카드</td>
                          <td className="tableDetail">
                            {this.state.data[0] && this.state.data[0].vga}
                          </td>
                        </tr>
                        <tr>
                          <td className="tableCate">하드디스크</td>
                          <td className="tableDetail">
                            {this.state.data[0] && this.state.data[0].hdd}
                          </td>
                        </tr>
                        <tr>
                          <td className="tableCate">SSD</td>
                          <td className="tableDetail">
                            {this.state.data[0] && this.state.data[0].ssd}
                          </td>
                        </tr>
                        <tr>
                          <td className="tableCate">ODD</td>
                          <td className="tableDetail">
                            {this.state.data[0] && this.state.data[0].odd}
                          </td>
                        </tr>
                        <tr>
                          <td className="tableCate">파워</td>
                          <td className="tableDetail">
                            {this.state.data[0] && this.state.data[0].power}
                          </td>
                        </tr>
                        <tr>
                          <td className="tableCate">운영체제</td>
                          <td className="tableDetail">
                            {this.state.data[0] && this.state.data[0].os}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
              <tbody className="shopDetailTbody">
                <tr className="shopDetailTr">
                  <td className="sellPrice">
                    판매가 : {this.state.data[0] && this.state.data[0].price} 원
                  </td>
                  <td className="sellButton">
                    {/* <button className="btnKeep" onClick={addCart}>
                      장바구니 담기
                    </button> */}
                    <button className="btnBuy" onClick={addCart}>
                      장바구니 담기
                    </button>
                    {/* <button className="btnBuy">바로구매 ＞</button> */}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Layout>
      </>
    );
  }
}

export default withRouter(Product);
