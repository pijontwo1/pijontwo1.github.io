import Link from "next/link";
import React, { Component } from "react";
import Router from "next/router";
import AppLayout from "../components/Layout";
import {
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  Checkbox,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Button,
  ButtonGroup,
  Image,
  Icon,
  Input,
} from "@chakra-ui/react";
import { CgClose, CgMathPlus, CgMathEqual } from "react-icons/cg";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      email: null,
      itemId: null,
      data: [],
      checkedItems: [],
      amountItems: [],
      totalPrice: 0,
    };
  }

  componentDidMount() {
    window.sessionStorage.getItem("email") == null &&
      (alert("로그인해주세요"), Router.push("/signin"));

    fetch(process.env.LocalHost + "/cart", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: window.sessionStorage.getItem("email"),
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          data: res,
        });
      });
  }

  render() {
    const {
      isLogin,
      email,
      itemId,
      data,
      checkedItems,
      amountItems,
      statePrice,
    } = this.state;

    const deleteCartItem = (n) => {
      window.confirm("삭제하시겠습니까?") &&
        fetch(process.env.LocalHost + "/cartDelete", {
          method: "post",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            cartId: n,
          }),
        })
          .then((res) => res.json())
          .then((res) => {
            fetch(process.env.LocalHost + "/cart", {
              method: "post",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify({
                email: window.sessionStorage.getItem("email"),
              }),
            })
              .then((res) => res.json())
              .then((res) => {
                this.setState({
                  data: res,
                });
              });
            alert("삭제완료");
          });
    };

    let res = [];
    let cartIds = [];
    let calculPrice = 0;
    let allDatas = [];

    const updateCart = (cartAmount, cartId) => {
      for (let i = 0; i < cartId.length; i++) {
        fetch(process.env.LocalHost + "/cartUpdate", {
          method: "post",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            cartId: cartId[i],
            itemAmount: cartAmount[i],
          }),
        })
          .then((res) => res.json())
          .then((res) => {
            if (i >= cartId.length - 1) {
              fetch(process.env.LocalHost + "/cart", {
                method: "post",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify({
                  email: window.sessionStorage.getItem("email"),
                }),
              })
                .then((res) => res.json())
                .then((res) => {
                  this.setState({
                    data: res,
                  });
                  alert("수량이 변경되었습니다.");
                });
            }
          });
      }
    };

    const handleChangeAmount = (i, e, arr, id) => {
      res[i] = e;
    };

    let contents = data.map((cartDatas, index) => {
      res = res.concat(cartDatas.item_amount);
      cartIds = cartIds.concat(cartDatas.cart_id);
      calculPrice += cartDatas.item_price * cartDatas.item_amount;
      allDatas += cartDatas;

      return (
        <Tr key={cartDatas.cart_id}>
          {/* <Td> */}
          {/* defaultIsChecked */}
          {/* <Checkbox /> */}
          {/* </Td> */}
          <Td>
            <Image
              boxSize="75px"
              src={cartDatas.imgsrc1}
              alt={cartDatas.title}
            />
          </Td>
          <Td>{cartDatas.title}</Td>
          <Td>
            <NumberInput
              size="sm"
              min={1}
              max={99}
              defaultValue={cartDatas.item_amount}
              onChange={(e) =>
                handleChangeAmount(index, e, res, cartDatas.cart_id)
              }
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Td>
          <Td isNumeric>
            <Input
              border="0"
              w="auto"
              textAlign="end"
              value={`${(
                cartDatas.item_price * cartDatas.item_amount
              ).toLocaleString()}원`}
              readOnly
            />
          </Td>
          <Td>
            <Icon
              as={CgClose}
              boxSize={4}
              color="gray.500"
              cursor="pointer"
              onClick={() => deleteCartItem(cartDatas.cart_id)}
            />
          </Td>
        </Tr>
      );
    });

    return (
      <AppLayout>
        <Box w="1020px" m="30px auto">
          {this.state.data != "" ? (
            <>
              <Heading
                as="h1"
                size="lg"
                fontFamily="noto"
                textAlign="center"
                mb="2rem"
                color="#212529" // GRAY 9
              >
                장바구니
              </Heading>
              <Table variant="simple" borderTop="1px" borderColor="gray.400">
                <Thead>
                  <Tr>
                    {/* <Th w="64px">
                  <Checkbox />
                </Th> */}
                    <Th w="123px"></Th>
                    <Th textAlign="center">상품 정보</Th>
                    <Th w="110px" textAlign="center">
                      수량
                    </Th>
                    <Th w="148px" isNumeric>
                      금액
                    </Th>
                    <Th w="64px" textAlign="center"></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {/* 반복문 */}
                  {contents}
                  {/* 반복문 end */}
                </Tbody>
              </Table>

              {/* <Button colorScheme="red" size="sm" variant="outline" m={3}>
                선택삭제
              </Button> */}
              <Box
                float="right"
                mt={2}
                mx={1}
                // textAlign="center"
                width={305}
                letterSpacing={-2}
                color="red.500"
              >
                제품 수량 변경 후<br></br> 수량변경 버튼을 눌러야 반영됩니다.
              </Box>
              <Button
                colorScheme="blue"
                size="sm"
                m={3}
                float="right"
                onClick={() => updateCart(res, cartIds)}
              >
                수량변경
              </Button>
              <Box
                w="100%"
                my={5}
                p={5}
                d="flex"
                justifyContent="flex-end"
                alignItems="center"
                border="2px"
                borderColor="gray.300"
                borderRadius="md"
                boxShadow
              >
                <Box mx={1}>전체</Box>
                <Box>상품금액</Box>
                <Box mx={1} color="red.400">
                  <b>{calculPrice.toLocaleString()}</b>
                </Box>
                <Box>원</Box>
                <Icon as={CgMathPlus} boxSize={4} mx={2} color="gray" />
                <Box mx={1}>배송비</Box>
                <Box mx={1} color="red.400">
                  <b>3,000</b>
                </Box>
                <Box>원</Box>
                <Icon as={CgMathEqual} boxSize={4} mx={2} color="gray" />
                <Box mx={1} color="red.400">
                  <b>{(calculPrice + 3000).toLocaleString()}</b>
                </Box>
                <Box>원</Box>
              </Box>
              <ButtonGroup
                d="flex"
                justifyContent="flex-end"
                w="100%"
                colorScheme="blue"
                spacing="3"
              >
                {/* <Button w="150px" variant="outline">
              선택구매
            </Button> */}

                <Button
                  w="150px"
                  onClick={(e) => {
                    e.preventDefault();
                    Router.push("/payment");
                  }}
                >
                  전체구매
                </Button>
              </ButtonGroup>
            </>
          ) : (
            <>
              <Heading
                mt="100px"
                as="h1"
                fontSize="30px"
                fontFamily="noto"
                textAlign="center"
                mb="2rem"
                color="#212529" // GRAY 9
              >
                장바구니가 비었습니다
                <br></br>
                <Button
                  m="50px"
                  w="150px"
                  variant="outline"
                  colorScheme="messenger"
                  onClick={(e) => {
                    Router.push("/");
                  }}
                >
                  메인으로
                </Button>
              </Heading>
            </>
          )}
        </Box>
      </AppLayout>
    );
  }
}
export default Cart;
