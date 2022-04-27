import React from "react";
import AppLayout from "../components/Layout";
import Router from "next/router";
import { Box, Heading, Table, Tbody, Td, Tr, Button } from "@chakra-ui/react";
import moment from "moment";

class PaymentComplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order_number: "",
      order_datetime: "",
    };
  }

  componentDidMount() {
    window.sessionStorage.getItem("email") == null ? (
      <>{(alert("로그인해주세요"), Router.push("/signin"))}</>
    ) : (
      <>
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
            this.setState({
              order_number: res[0].order_number,
              order_datetime: res[0].create_datetime,
            });
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
            주문이 완료되었습니다
          </Heading>
          <Table w="500px" m="50px auto" fontWeight="bold" fontSize="20px">
            <Tbody>
              <Tr>
                <Td>주문번호</Td>
                <Td>{this.state.order_number}</Td>
              </Tr>
              <Tr>
                <Td>주문일자</Td>
                <Td>
                  {moment(this.state.order_datetime).format(`YYYY-MM-DD HH:mm`)}
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Button
            w="150px"
            variant="outline"
            float="right"
            colorScheme="messenger"
            isFullWidth
            onClick={(e) => {
              Router.push("/");
            }}
          >
            메인으로
          </Button>
        </Box>
      </AppLayout>
    );
  }
}

export default PaymentComplete;
