import React, { useState, useEffect } from "react";
import AppLayout from "../components/Layout";
import {
  Heading,
  Table,
  Tbody,
  Input,
  Textarea,
  Flex,
  Button,
  Box,
} from "@chakra-ui/react";
import queryString from "query-string";

function Test() {
  useEffect(() => {
    const script1 = document.createElement("script");
    const script2 = document.createElement("script");
    script1.src = "https://code.jquery.com/jquery-1.12.4.min.js";
    script2.src = "https://cdn.iamport.kr/js/iamport.payment-1.1.7.js";
    script1.async = true;
    script2.async = true;
    document.body.appendChild(script1);
    document.body.appendChild(script2);
    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);
  function onClickCertification() {
    const userCode = "imp10391932";
    /* 1. 가맹점 식별하기 */
    const { IMP } = window;
    IMP.init(userCode);

    /* 2. 본인인증 데이터 정의하기 */
    const data = {
      merchant_uid: `mid_${new Date().getTime()}`, // 주문번호
      company: "아임포트", // 회사명 또는 URL
      name: "홍길동", // 이름
      phone: "01012341234", // 전화번호
    };

    /* 4. 본인인증 창 호출하기 */
    IMP.certification(data, callback);
  }
  function callback(response) {
    const { success, merchant_uid, error_msg } = response;
    // const query = queryString.stringify(response);
    // console.log(query);
    console.log(response);

    if (success) {
      alert("본인인증 성공");
    } else {
      alert(`본인인증 실패: ${error_msg}`);
    }
  }

  function testTest() {
    // console.log("asdf");
    fetch(process.env.LocalHost + "/ttt")
      .then((res) => res.json())
      .then((res) => {
        console.log(res[0].imp_uid);
        console.log(res[0].payment_price);

        fetch(process.env.LocalHost + "/forgeryCheck", {
          method: "post",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            imp_uid: res[0].imp_uid,
            merchant_uid: res[0].merchant_uid,
            totalPrice: res[0].payment_price,
          }),
        })
          .then((res) => res.json())
          .then((res) => {
            console.log(res);
          });
      });
  }

  return (
    <AppLayout>
      <Box w="1024px" m="0 auto">
        <button onClick={onClickCertification}>본인인증 하기</button>
        <br />
        <button onClick={testTest}>테스트</button>
      </Box>
    </AppLayout>
  );
}

export default Test;
