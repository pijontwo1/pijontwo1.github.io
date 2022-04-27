import Layout from "../components/Layout";
import React from "react";

const Estimate = () => (
  <Layout>
    <style jsx>{`
      .tableBody {
        margin: 50px auto;
        width: 1020px;
      }
      .selectTitle {
        font-size: 25px;
        font-weight: 600;
        color: #000;
        margin: 10px;
      }
      .selectDiv {
        width: 598px;
        border: 1px solid #b1b4bd;
        background-color: #f9f9f9;
      }
      .selectArea {
        width: 600px;
        display: flex;
        justify-content: center;
      }
      .selectBox {
        margin: 5px 10px 5px 10px;
        width: 130px;
        height: 25px;
      }
      .table {
        border: 1px solid #dddddd;
        width: 600px;
        margin-top: 10px;
        margin-bottom: 10px;
      }
      .tableTd {
        min-height: 20px;
        padding: 3px 3px;
        border-top: 1px solid #dddddd;
        text-align: center;
        line-height: 2.5;
        color: #333;
        font-size: 13px;
        font-weight: 600;
        line-height: 1.5;
      }
      .tableImg {
        width: 80px;
        height: 80px;
        padding-right: 20px;
      }
      .tablePrice {
        font-weight: 600;
        font-size: 18px;
        white-space: nowrap;
        color: #0089ff;
      }
      .category {
        border: 1px solid #b1b4bd;
        background-color: #f9f9f9;
        float: right;
        width: 350px;
        height: 500px;
        padding: 25px;
      }
      .cateBtn {
        border: 1px solid #b1b4bd;
        background-color: #ffffff;
        width: 350px;
        height: 38px;
        text-align: left;
        font-size: 18px;
        padding-left: 20px;
        margin-top: 5px;
      }
    `}</style>
    <div className="tableBody">
      <h1>&nbsp;&nbsp;&nbsp;PC 견적 상담</h1>

      <div className="category">
        <button className="cateBtn">CPU</button>
        <button className="cateBtn">VGA</button>
        <button className="cateBtn">메인보드</button>
      </div>
      <div className="selectDiv">
        <div className="selectTitle">부품명</div>
        <div className="selectArea">
          <select className="selectBox" title="제조사">
            <option value="">제조사</option>
            <option value="">intel</option>
            <option value="">amd</option>
          </select>
          <select className="selectBox" title="제조사">
            <option value="">제조사</option>
            <option value="">intel</option>
            <option value="">amd</option>
          </select>
          <select className="selectBox" title="제조사">
            <option value="">제조사</option>
            <option value="">intel</option>
            <option value="">amd</option>
          </select>
          <select className="selectBox" title="제조사">
            <option value="">제조사</option>
            <option value="">intel</option>
            <option value="">amd</option>
          </select>
        </div>
        <div className="selectArea">
          <select className="selectBox" title="제조사">
            <option value="">제조사</option>
            <option value="">intel</option>
            <option value="">amd</option>
          </select>
          <select className="selectBox" title="제조사">
            <option value="">제조사</option>
            <option value="">intel</option>
            <option value="">amd</option>
          </select>
          <select className="selectBox" title="제조사">
            <option value="">제조사</option>
            <option value="">intel</option>
            <option value="">amd</option>
          </select>
          <select className="selectBox" title="제조사">
            <option value="">제조사</option>
            <option value="">intel</option>
            <option value="">amd</option>
          </select>
        </div>
      </div>

      <table className="table" cellPadding="0" cellSpacing="0" border="0">
        <tbody>
          {/* 반복start */}
          <tr className="tableTr">
            <td className="tableTd">
              <img className="tableImg" src="imgs/1.jpg" />
            </td>
            <td className="tableTd">
              <div>AMD 라이젠5-3세대 3600 (마티스) (멀티팩)</div>
              <div>
                AMD(소켓AM4)/3세대 (Zen 2)/7nm/6코어
                <br />
                /12쓰레드/기본클럭:3.6GHz
              </div>
            </td>
            <td className="tableTd">
              <div className="tablePrice">369,000원</div>
            </td>
          </tr>
          {/* 반복end */}
          <tr className="tableTr">
            <td className="tableTd">
              <img className="tableImg" src="imgs/1.jpg" />
            </td>
            <td className="tableTd">
              <div>AMD 라이젠5-3세대 3600 (마티스) (멀티팩)</div>
              <div>
                AMD(소켓AM4)/3세대 (Zen 2)/7nm/6코어
                <br />
                /12쓰레드/기본클럭:3.6GHz
              </div>
            </td>
            <td className="tableTd">
              <div className="tablePrice">369,000원</div>
            </td>
          </tr>{" "}
          <tr className="tableTr">
            <td className="tableTd">
              <img className="tableImg" src="imgs/1.jpg" />
            </td>
            <td className="tableTd">
              <div>AMD 라이젠5-3세대 3600 (마티스) (멀티팩)</div>
              <div>
                AMD(소켓AM4)/3세대 (Zen 2)/7nm/6코어
                <br />
                /12쓰레드/기본클럭:3.6GHz
              </div>
            </td>
            <td className="tableTd">
              <div className="tablePrice">369,000원</div>
            </td>
          </tr>{" "}
          <tr className="tableTr">
            <td className="tableTd">
              <img className="tableImg" src="imgs/1.jpg" />
            </td>
            <td className="tableTd">
              <div>AMD 라이젠5-3세대 3600 (마티스) (멀티팩)</div>
              <div>
                AMD(소켓AM4)/3세대 (Zen 2)/7nm/6코어
                <br />
                /12쓰레드/기본클럭:3.6GHz
              </div>
            </td>
            <td className="tableTd">
              <div className="tablePrice">369,000원</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </Layout>
);

export default Estimate;
