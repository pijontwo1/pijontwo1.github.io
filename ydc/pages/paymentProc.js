import React from "react";
import AppLayout from "../components/Layout";
import Router from "next/router";
import moment from "moment";
import { Box, Heading } from "@chakra-ui/react";

class PaymentComplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    window.sessionStorage.getItem("email") == null ? (
      <>{(alert("로그인해주세요"), Router.push("/signin"))}</>
    ) : (
      <>
        {console.log(window.sessionStorage.getItem("merchant_uid"))}
        {fetch(process.env.LocalHost + "/paymentProc", {
          method: "post",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            order_number: window.sessionStorage.getItem("merchant_uid"),
          }),
        })
          .then((res) => res.json())
          .then((res) => {
            Router.push("/paymentComplete");
          })
          .catch((error) => {
            Router.push("/paymentError");
          })}
      </>
    );
  }

  render() {
    return (
      <AppLayout>
        <Box w="800px" m="30px auto">
          <Heading
            as="h1"
            size="lg"
            fontFamily="noto"
            textAlign="center"
            mb="2rem"
            color="#212529" // GRAY 9
          >
            주문처리중입니다 잠시만 기다려주세요
          </Heading>
        </Box>
      </AppLayout>
    );
  }
}

export default PaymentComplete;
