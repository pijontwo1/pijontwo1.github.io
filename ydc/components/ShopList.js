import React, { Component } from "react";
import Link from "next/link";
import PCList from "../pages/PCList.json";

class ShopList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: PCList,
      texts: "",
    };
  }

  // db사용시 data state에 배열저장부분
  // componentDidMount() {
  //   fetch(process.env.LocalHost + "/ShopList", {
  //     method: "get",
  //     headers: {
  //       "content-type": "application/json",
  //     },
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

    // style
    const tableImg = {
      paddingBottom: "20px",
      width: "330px",
    };
    const tableTd = {
      minHeight: "20px",
      padding: "3px 3px",
      backgroundColor: "#fff",
      borderTop: "1px solid #ffffff",
      borderLeft: "1px solid #dddddd",
      lineHeight: "0.5",
      textAlign: "-webkit-center",
    };
    const tableDetail = {
      textAlign: "center",
      lineHeight: "1.5",
      fontSize: "15px",
      whiteSpace: "pre-wrap",
    };

    const tablePrice = {
      fontSize: " 25px",
      fontWeight: " bold",
      display: " inline-block",
    };

    const tablePriceLabel = {
      fontSize: " 15px",
      fontWeight: "bold",
      padding: "20px 5px 20px 5px",
      display: " inline-block",
    };

    //style end

    // db사용시 map으로 뿌려주는 부분
    // db사용시 data.map

    const contents = data.pclist.map((productDatas, index) => {
      return (
        <td key={index} style={tableTd} width="330px">
          {/* <Link
            href={{
              pathname: "product",
              query: { id: productDatas.id },
            }}
          > */}
            <a href={"product?id="+productDatas.id}>
              <img style={tableImg} src={productDatas.imgsrc}></img>
            </a>
          {/* </Link> */}
          <table>
            <tbody>
              <tr>
                <td style={tableDetail}>{productDatas.title}</td>
              </tr>
            </tbody>
          </table>
          <br />
          <table>
            <tbody>
              <tr>
                <td>
                  <div style={tablePrice}>{productDatas.price}</div>
                  <div style={tablePriceLabel}>원</div>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      );
    });

    // const contents = () => {
    //   return (
    //     <td style={tableTd} width="330px">
    //       <Link
    //         href={{
    //           pathname: "product",
    //           query: { id: productDatas.id },
    //         }}
    //       >
    //         <a>
    //           <img style={tableImg} src={productDatas.img}></img>
    //         </a>
    //       </Link>
    //       <table>
    //         <tbody>
    //           <tr>
    //             <td style={tableDetail}>{productDatas.title}</td>
    //           </tr>
    //         </tbody>
    //       </table>
    //       <br />
    //       <table>
    //         <tbody>
    //           <tr>
    //             <td>
    //               <div style={tablePrice}>{productDatas.price}</div>
    //               <div style={tablePriceLabel}>원</div>
    //             </td>
    //           </tr>
    //         </tbody>
    //       </table>
    //     </td>
    //   );
    // };


    return (
      <>
        <style jsx>{`
          .shopListTable {
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
        `}</style>
        <table className="shopListTable">
          <tbody>
            <tr>
              {/* 반복start */}
              {contents}
              {/* 반복end */}
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}

export default ShopList;
