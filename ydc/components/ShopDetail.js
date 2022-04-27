import React, { Component } from "react";
import styled from "styled-components";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const ShopDetailBody = styled.div`
  margin: 50px auto;
  width: 1020px;
  position: relative;

  .sellPrice,
  .sellButton {
    flex: 1;
    font-size: 20px;
    font-weight: bold;
    display: flex;
    justify-content: center;
  }
`;

const Table = styled.table`
  border-top: 2px solid #1199ff;
  border-bottom: 1px solid #dddddd;
  border-right: 1px solid #dddddd;
  border-left: 1px solid #dddddd;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
`;

const Tbody = styled.tbody`
  padding: 15px;
`;

const Tr = styled.tr`
  display: flex;
`;

const ShopDetailImg = styled.img`
  width: 450px;
  padding: 15px;
`;

const ShopDetailTop = styled.th.attrs({
  colSpan: 2,
})`
  border-bottom: 1px solid #ccc;
  font-weight: bold;
  padding: 15px 0;
  background-color: #f5f5f5;
`;

const ShopDetailSpan = styled.span`
  display: block;
  line-height: 20px;
  letter-spacing: -1px;
`;

const TableCate = styled.td`
  padding: 0 30px;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  width: 110px;
  height: 30px;
  font-size: 15px;
`;

const TableDetail = styled.td`
  text-align: left;
  padding: 0 30px;
  height: 30px;
  width: 450px;
  border-bottom: 1px solid #ccc;
  font-size: 14px;
`;

const ButtonBuy = styled.button`
  width: 200px;
  height: 40px;
  background-color: #346aff;
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  border: 1px solid #346aff;
  margin-left: 20px;
`;

const ButtonKeep = styled.button`
  width: 200px;
  height: 40px;
  background-color: #ffffff;
  color: #346aff;
  font-size: 18px;
  font-weight: bold;
  border: 1px solid #346aff;
`;

class ShopDetail extends Component {
  render() {
    return (
      <ShopDetailBody>
        <div>뒤로가기</div>
        <h1>상품 상세페이지</h1>
        <Table>
          <Tr>
            <ShopDetailImg src="gamingpc.jpg" />
            <Tbody>
              <tr>
                <ShopDetailTop>
                  <ShopDetailSpan>
                    인텔 8세대 커피레이크 G4900 (업그레이드 셋트)
                  </ShopDetailSpan>
                  <ShopDetailSpan>
                    인텔 내장그래픽 / RAM, 저장장치, 케이스 별도 / 저소음쿨러
                  </ShopDetailSpan>
                </ShopDetailTop>
              </tr>
              <tr>
                <TableCate>출장 A/S</TableCate>
                <TableDetail>1년무상+4년부품 실비청구</TableDetail>
              </tr>
              <tr>
                <TableCate>CPU</TableCate>
                <TableDetail>[인텔] 셀러론 G4900 (커피레이크)</TableDetail>
              </tr>
              <tr>
                <TableCate>쿨러</TableCate>
                <TableDetail>[인텔] 정품쿨러 (저소음보장)</TableDetail>
              </tr>
              <tr>
                <TableCate>메모리</TableCate>
                <TableDetail>[RAM 별도] 사양 변경에서 추가 가능</TableDetail>
              </tr>
              <tr>
                <TableCate>메인보드</TableCate>
                <TableDetail>[GIGABYTE] H310M DS2V 듀러블에디션</TableDetail>
              </tr>
              <tr>
                <TableCate>그래픽카드</TableCate>
                <TableDetail>[인텔] 내장그래픽 사용 (추가선택가능)</TableDetail>
              </tr>
              <tr>
                <TableCate>하드디스크</TableCate>
                <TableDetail>[HDD 별도] 사양 변경에서 추가 가능</TableDetail>
              </tr>
              <tr>
                <TableCate>SSD</TableCate>
                <TableDetail>[별도] HDD 대비 20~30% 빠른속도</TableDetail>
              </tr>
              <tr>
                <TableCate>ODD</TableCate>
                <TableDetail>[별도] 사양 변경에서 추가 가능</TableDetail>
              </tr>
              <tr>
                <TableCate>파워</TableCate>
                <TableDetail>[WEED] W660S (정격 230W)</TableDetail>
              </tr>
              <tr>
                <TableCate>운영체제</TableCate>
                <TableDetail>Windows 10 Home Edition</TableDetail>
              </tr>
            </Tbody>
          </Tr>
          <Tbody>
            <Tr>
              <td className="sellPrice">판매가 : 39,800원</td>
              <td className="sellButton">
                <ButtonKeep>장바구니</ButtonKeep>
                <ButtonBuy>바로구매 ＞</ButtonBuy>
              </td>
            </Tr>
          </Tbody>
        </Table>
      </ShopDetailBody>
    );
  }
}

export default ShopDetail;
