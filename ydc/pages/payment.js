import Link from "next/link";
import React, { useState } from "react";
import Iamport from "react-iamport";
import DaumPostcode from "react-daum-postcode";
import AppLayout from "../components/Layout";
import moment from "moment";
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Radio,
  RadioGroup,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  Stack,
  Input,
  Icon,
} from "@chakra-ui/react";
import { CgClose, CgMathPlus, CgMathEqual } from "react-icons/cg";
import Router from "next/router";

class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      itemId: null,
      data: [],
      userInfo: [],
      name: "",
      phone: "",
      zoneCode: "",
      address: "",
      fullAddress: "",
      isdaumpost: 0,
      isRegister: false,
      register: [],
      validationCheck: false,
      currentTime: new Date().toLocaleString(),
    };
    this.validationCheck();
    this.nameInput = React.createRef();
    this.phoneInput = React.createRef();
    this.emailInput = React.createRef();
    this.fulladdressInput = React.createRef();
    this.findZonecode = React.createRef();
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

    fetch(process.env.LocalHost + "/inquireWriteUserinfo", {
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
          userInfo: res,
          name: res[0].name,
          phone: res[0].phone,
          email: res[0].email,
        });
      });
  }

  validationCheck() {
    setInterval(() => {
      if (
        this.state.name &&
        this.state.phone &&
        this.state.email &&
        this.state.address &&
        this.state.fullAddress != ""
      ) {
        this.setState({ paymentValidationCheck: true });
      } else {
        this.setState({ paymentValidationCheck: false });
      }
      this.setState({
        currentTime: new Date().toLocaleString(),
      });
    }, 1000);
  }

  nameChange = (e) => {
    if (e.target.value.length > 20) {
      e.target.value = e.target.value.slice(0, 20);
    }
    this.setState({ name: e.target.value });
  };

  phoneChange = (e) => {
    if (e.target.value.length > 20) {
      e.target.value = e.target.value.slice(0, 20);
    }
    this.setState({ phone: e.target.value });
  };

  regEmail = (str) => {
    var reg_email =
      /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    if (!reg_email.test(str)) {
      return false;
    } else {
      return true;
    }
  };

  emailChange = (e) => {
    if (e.target.value.length > 30) {
      e.target.value = e.target.value.slice(0, 30);
    }
    this.setState({ email: e.target.value });
  };

  fullAddressChange = (e) => {
    if (e.target.value.length > 100) {
      e.target.value = e.target.value.slice(0, 100);
    }
    this.setState({ fullAddress: e.target.value });
  };

  handleOpenPost = () => {
    this.setState({
      isdaumpost: 1,
    });
  };

  handleAddress = (data) => {
    let AllAddress = data.address;
    let extraAddress = "";
    let zoneCodes = data.zonecode;

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      AllAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    this.setState({
      address: AllAddress,
      zoneCode: zoneCodes,
      isdaumpost: 0,
    });
  };

  paymentValidationCheck = (e) => {
    if (this.state.name == "") {
      alert("받는분 성함을 확인해주세요");
      this.nameInput.current.focus();
    } else if (this.state.phone == "") {
      alert("연락처를 확인해주세요 ( - 없이 숫자만)");
      this.phoneInput.current.focus();
    } else if (this.state.email == "" || !this.regEmail(this.state.email)) {
      alert("이메일을 확인해주세요");
      this.emailInput.current.focus();
    } else if (this.state.address == "") {
      alert("우편번호 찾기 버튼을 통해 주소를 입력해주세요");
      this.findZonecode.current.focus();
    } else if (this.state.fullAddress == "") {
      alert("상세주소를 확인해주세요");
      this.fulladdressInput.current.focus();
    } else {
      this.setState({
        paymentValidationCheck: true,
      });
    }
  };

  render() {
    const { data } = this.state;

    const {
      name,
      phone,
      address,
      isdaumpost,
      fullAddress,
      zoneCode,
      isRegister,
    } = this.state;

    const handleClosePost = () => {
      this.setState({
        isdaumpost: 0,
      });
    };

    let res = [];
    let cartIds = [];
    let calculPrice = 0;

    let contents = data.map((cartDatas, index) => {
      calculPrice += cartDatas.item_price * cartDatas.item_amount;

      return (
        <Tr key={index}>
          <Td>{cartDatas.title}</Td>
          <Td textAlign="center">{cartDatas.item_amount}</Td>
          <Td textAlign="center">
            {(cartDatas.item_amount * cartDatas.item_price).toLocaleString() +
              " "}
            원
          </Td>
        </Tr>
      );
    });

    return (
      <AppLayout>
        <Box w="1020px" m="30px auto">
          <Heading
            as="h1"
            size="lg"
            fontFamily="noto"
            textAlign="center"
            mb="2rem"
            color="#212529" // GRAY 9
          >
            결제
          </Heading>
          <Heading as="h1" size="md">
            배송지
          </Heading>
          <Table my="1rem" size="sm" borderTop="1px">
            <Tbody>
              <Tr>
                <Th w="200px" bgColor="gray.200">
                  받는분
                </Th>
                <Td>
                  <Box className="nameBox">
                    <Input
                      fontSize="15px"
                      placeholder="받는분 성함을 입력해주세요"
                      type="text"
                      name="name"
                      value={this.state.name}
                      onChange={this.nameChange}
                      ref={this.nameInput}
                      required
                    />
                  </Box>
                </Td>
              </Tr>
              <Tr>
                <Th w="200px" bgColor="gray.200">
                  연락처
                </Th>
                <Td>
                  <Box className="phoneBox">
                    <Input
                      fontSize="15px"
                      placeholder="'-' 없이 숫자만 입력해주세요"
                      type="number"
                      name="phone"
                      value={this.state.phone}
                      onChange={this.phoneChange}
                      ref={this.phoneInput}
                      required
                    />
                  </Box>
                </Td>
              </Tr>
              <Tr>
                <Th w="200px" bgColor="gray.200">
                  이메일
                </Th>
                <Td>
                  <Box className="emailBox">
                    <Input
                      fontSize="15px"
                      placeholder="이메일을 입력해주세요"
                      type="email"
                      name="email"
                      value={this.state.email}
                      onChange={this.emailChange}
                      ref={this.emailInput}
                      required
                    />
                  </Box>
                </Td>
              </Tr>
              <Tr>
                <Th w="200px" bgColor="gray.200">
                  주소
                </Th>
                <Td>
                  <div className="modalRow">
                    <div className="modalCell">
                      <div className="cellFirst">
                        <Button
                          type="button"
                          onClick={this.handleOpenPost}
                          ref={this.findZonecode}
                          w="130px"
                          h="30px"
                          border="1px solid #ccc"
                          borderRadius="0"
                          fontSize="14px"
                        >
                          우편번호 찾기
                        </Button>
                        <Box w="80px" className="zipCode" mt="10px" mb="5px">
                          <Input
                            fontSize="15px"
                            placeholder="번호"
                            value={zoneCode}
                            readOnly
                            required
                          />
                        </Box>
                      </div>

                      <Box className="address" mb="5px">
                        <Input
                          fontSize="15px"
                          placeholder="주소"
                          value={address}
                          readOnly
                        />
                      </Box>
                      <Box className="addressBox">
                        <Input
                          fontSize="15px"
                          placeholder="상세주소를 입력해주세요"
                          type="text"
                          name="address"
                          onChange={this.fullAddressChange}
                          ref={this.fulladdressInput}
                          required
                        />
                      </Box>

                      {isdaumpost == 1 ? (
                        <>
                          <Button
                            mt="10px"
                            ml="530px"
                            onClick={() => handleClosePost()}
                          >
                            닫기
                          </Button>
                          <DaumPostcode
                            onComplete={this.handleAddress}
                            animation
                            isdaumpost={this.state.isdaumpost}
                          />
                        </>
                      ) : null}
                    </div>
                  </div>
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Heading mt="2rem" as="h1" size="md">
            결제상품
          </Heading>
          <Table my="1rem" size="sm" borderTop="1px">
            <Thead>
              <Tr>
                <Th textAlign="center" bgColor="gray.200">
                  상품
                </Th>
                <Th w="75px" textAlign="center" bgColor="gray.200">
                  개수
                </Th>
                <Th w="150px" textAlign="center" bgColor="gray.200">
                  가격
                </Th>
              </Tr>
            </Thead>
            <Tbody>{contents}</Tbody>
          </Table>
          <Heading mt="2rem" as="h1" size="md">
            결제정보
          </Heading>
          <Table my="1rem" size="sm" borderTop="1px">
            <Tbody>
              <Tr>
                <Th w="200px" bgColor="gray.200">
                  전체 상품가격
                </Th>
                <Td>{calculPrice.toLocaleString()}원</Td>
              </Tr>
              <Tr>
                <Th w="200px" bgColor="gray.200">
                  배송비
                </Th>
                <Td>3,000원</Td>
              </Tr>
              <Tr>
                <Th w="200px" bgColor="gray.200">
                  총 결제금액
                </Th>
                <Td>{(calculPrice + 3000).toLocaleString()}원</Td>
              </Tr>
              <Tr>
                <Th w="200px" bgColor="gray.200">
                  결제수단
                </Th>
                <Td>
                  <RadioGroup defaultValue="3" size="sm">
                    <HStack>
                      {/* <Radio mr="1rem" value="1">
                        무통장입금
                      </Radio>
                      <Radio mr="1rem" value="2">
                        계좌이체
                      </Radio> */}
                      <Radio value="3">신용카드</Radio>
                    </HStack>
                  </RadioGroup>
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Flex mt="3rem" justifyContent="center">
            <Iamport
              identificationCode="imp03807396"
              params={{
                pg: "inicis",
                pay_method: "card",
                merchant_uid:
                  (((1 + Math.random()) * 0x10000) | 0)
                    .toString(16)
                    .toUpperCase()
                    .substring(1) + moment().format("YYMMDDHHmm"),
                name: "YDConnect 주문",
                amount: calculPrice + 3000,
                buyer_email: this.state.email,
                buyer_name: this.state.name,
                buyer_tel: this.state.phone,
                buyer_addr: this.state.address + " " + this.state.fullAddress,
                buyer_postcode: this.state.zoneCode,
                m_redirect_url: "/cart",
              }}
              onFailed={(err) => alert("결제가 취소되었습니다.")}
              onSuccess={(res) => {
                fetch(process.env.LocalHost + "/forgeryCheck", {
                  method: "post",
                  headers: {
                    "content-type": "application/json",
                  },
                  body: JSON.stringify({
                    imp_uid: res.imp_uid,
                    merchant_uid: res.merchant_uid,
                    totalPrice: res.paid_amount,
                  }),
                })
                  .then((res) => res.json())
                  .then((res) => {
                    window.sessionStorage.setItem(
                      "merchant_uid",
                      res.merchant_uid
                    );
                    fetch(process.env.LocalHost + "/paymentInsert", {
                      method: "post",
                      headers: {
                        "content-type": "application/json",
                      },
                      body: JSON.stringify({
                        email: res.buyer_email,
                        imp_uid: res.imp_uid,
                        order_number: res.merchant_uid,
                      }),
                    })
                      .then((res) => res.json())
                      .then((res) => {
                        Router.push("/paymentProc");
                      });
                  });
              }}
              jqueryLoaded={false}
              render={(renderProps) =>
                this.state.paymentValidationCheck ? (
                  <>
                    <Button
                      w="180px"
                      size="md"
                      colorScheme="blue"
                      type="button"
                      onClick={renderProps.onClick}
                    >
                      결제하기
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      w="180px"
                      size="md"
                      colorScheme="blue"
                      type="button"
                      onClick={this.paymentValidationCheck}
                    >
                      결제하기
                    </Button>
                  </>
                )
              }
            />
          </Flex>
        </Box>
      </AppLayout>
    );
  }
}

export default Payment;
