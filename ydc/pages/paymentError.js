import React from "react";
import AppLayout from "../components/Layout";
import Router from "next/router";
import { Box, Heading, Table, Tbody, Td, Tr, Button } from "@chakra-ui/react";

class PaymentComplete extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.sessionStorage.getItem("email") == null ? (
      <>{(alert("로그인해주세요"), Router.push("/signin"))}</>
    ) : (
      <></>
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
            주문오류가 발생하였습니다. 관리자에게 문의해주세요.
          </Heading>
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
