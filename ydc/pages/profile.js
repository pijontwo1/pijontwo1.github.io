import React, { Component } from "react";
import Router from "next/router";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Heading,
  Table,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  Image,
  Input,
  Flex,
  Button,
  Select,
} from "@chakra-ui/react";
import AppLayout from "../components/Layout";
import moment from "moment-timezone";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      data: [],
      profile: [],
      orderNum: [],
      isRefund: false,
      refundOrderNum: "",
      refundReason: "",
    };
  }

  componentDidMount() {
    window.sessionStorage.getItem("email") == null &&
      (alert("로그인해주세요"), Router.push("/signin"));

    fetch(process.env.LocalHost + "/profileOrderlist", {
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

    fetch(process.env.LocalHost + "/signupCheck", {
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
          profile: res,
        });
      });

    fetch(process.env.LocalHost + "/profileRefundSelect", {
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
          orderNum: res,
        });
      });
  }

  renswitch(params) {
    switch (params) {
      case 1:
        return "결제완료";
        break;
      case 2:
        return "배송준비중";
        break;
      case 3:
        return "배송중";
        break;
      case 4:
        return "배송완료";
        break;
      case 5:
        return "환불신청중";
        break;
      case 6:
        return "환불완료";
        break;
      default:
        return "점검중입니다.";
        break;
    }
  }

  handleProfileUpdate = (e) => {
    e.preventDefault();
    window.confirm("수정하시겠습니까?") &&
      fetch(process.env.LocalHost + "/accountUpdate", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: window.sessionStorage.getItem("email"),
          name: e.target.name.value,
          phone: e.target.phone.value,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          location.href = "/profile";
          alert("수정되었습니다");
        });
  };

  handleRefund = (e) => {
    this.state.refundOrderNum == "" ? (
      <>{alert("환불신청할 주문번호를 선택해주세요")}</>
    ) : this.state.refundReason == "" ? (
      <>{alert("환불사유를 입력해주세요")}</>
    ) : (
      <>
        {e.preventDefault()}
        {window.confirm("환불요청하시겠습니까?") &&
          fetch(process.env.LocalHost + "/refundUpdate", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: window.sessionStorage.getItem("email"),
              order_number: this.state.orderNum[0].order_number,
              refund_reason: this.state.refundReason,
            }),
          })
            .then((res) => res.json())
            .then((res) => {
              location.href = "/profile";
              alert("환불요청이 완료되었습니다.");
            })}
      </>
    );
  };

  openRefund = () => {
    this.setState({
      isRefund: true,
    });
  };

  closeRefund = () => {
    this.setState({
      isRefund: false,
    });
  };

  refundReason = (e) => {
    this.setState({
      refundReason: e.target.value,
    });
  };

  selectHandle = (e) => {
    this.setState({
      refundOrderNum: e.target.value,
    });
  };

  render() {
    const { data, profile, orderNum } = this.state;

    const deleteAccount = () => {
      window.confirm(
        "회원탈퇴 하시겠습니까?\n탈퇴시 모든 정보는 즉시 삭제됩니다."
      ) &&
        window.confirm("정말 탈퇴하시겠습니까?") &&
        fetch(process.env.LocalHost + "/accountDelete", {
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
            alert("회원탈퇴되었습니다.");
            window.sessionStorage.clear();
            location.href = "/";
          });
    };

    let profiles = profile.map((d, i) => {
      return (
        <Table my="1rem" size="sm" borderTop="1px" key={i}>
          <Tbody>
            <Tr>
              <Th w="200px" bgColor="gray.200">
                이메일 주소
              </Th>
              <Td>
                <Input
                  name="email"
                  size="sm"
                  placeholder="이메일 주소"
                  defaultValue={d.email}
                  readOnly
                />
              </Td>
            </Tr>
            <Tr>
              <Th w="200px" bgColor="gray.200">
                이름
              </Th>
              <Td>
                <Input
                  name="name"
                  size="sm"
                  placeholder="이름"
                  defaultValue={d.name}
                />
              </Td>
            </Tr>

            <Tr>
              <Th w="200px" bgColor="gray.200">
                휴대폰 번호
              </Th>
              <Td>
                <Input
                  name="phone"
                  size="sm"
                  type="number"
                  placeholder="- 없이 숫자만 입력해주세요"
                  defaultValue={d.phone}
                />
              </Td>
            </Tr>
          </Tbody>
        </Table>
      );
    });

    let contents = data.map((profileDatas, index) => {
      return (
        <Tr
          key={profileDatas.order_id}
          verticalAlign="middle"
          textAlign="center"
        >
          <Td p="5px" borderBottom="1px solid #ccc">
            <Image
              boxSize="80px"
              src={profileDatas.imgsrc1}
              alt={profileDatas.title}
            />
          </Td>
          <Td p="5px" w="300px" borderBottom="1px solid #ccc">
            {profileDatas.title}
          </Td>
          <Td
            p="5px"
            w="170px"
            borderBottom="1px solid #ccc"
            textAlign="center"
          >
            {profileDatas.order_number}
          </Td>
          <Td p="5px" textAlign="center" borderBottom="1px solid #ccc">
            {profileDatas.item_amount}
          </Td>
          <Td p="5px" w="125px" borderBottom="1px solid #ccc" isNumeric>
            <Input
              textAlign="end"
              border="0"
              value={`${(
                profileDatas.price * profileDatas.item_amount
              ).toLocaleString()} 원`}
              readOnly
            />
          </Td>
          <Td p="5px" borderBottom="1px solid #ccc" textAlign="center">
            {this.renswitch(profileDatas.order_status)}
          </Td>
          <Td p="5px" borderBottom="1px solid #ccc" textAlign="center">
            {moment(profileDatas.create_datetime).format("YYYY년 MM월 DD일")}
            <br></br>
            {moment(profileDatas.create_datetime).format("HH시 mm분")}
          </Td>
        </Tr>
      );
    });

    let refundSelect = orderNum.map((d, i) => {
      return (
        <option value={d.order_number} key={i}>
          {d.order_number}
        </option>
      );
    });

    return (
      <AppLayout>
        <Box w="1020px" m="30px auto">
          <Tabs isFitted variant="enclosed-colored" defaultIndex={0}>
            {/* Tab Title */}
            <TabList mb="1rem">
              <Tab _selected={{ color: "white", bg: "blue.500" }}>주문조회</Tab>
              <Tab _selected={{ color: "white", bg: "blue.500" }}>개인정보</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Heading as="h1" size="md" textAlign="center" mb="30px">
                  주문조회
                </Heading>
                {contents.length !== 0 ? (
                  <Box w="1020px" m="0 auto">
                    <Table p="0">
                      <Tbody p="0">
                        <Tr
                          fontSize="18px"
                          fontWeight="bold"
                          textAlign="center"
                        >
                          <Td></Td>
                          <Td textAlign="center">제품명</Td>
                          <Td textAlign="center">주문번호</Td>
                          <Td textAlign="center" w="50px" p="0">
                            수량
                          </Td>
                          <Td textAlign="center" w="140px">
                            금액
                          </Td>
                          <Td textAlign="center" w="120px">
                            배송상태
                          </Td>
                          <Td textAlign="center">주문일자</Td>
                        </Tr>
                        <Tr h="20px"></Tr>
                        {contents}
                        <Tr>
                          <Td colSpan="7" textAlign="right">
                            {this.state.isRefund == true ? (
                              <>
                                <Table>
                                  <Tbody>
                                    <Tr>
                                      <Td>
                                        환불신청할 주문번호를 선택해주세요
                                      </Td>
                                      <Td>
                                        <Select
                                          placeholder="주문번호 선택"
                                          width="300px"
                                          onChange={this.selectHandle}
                                        >
                                          {refundSelect}
                                        </Select>
                                      </Td>
                                      <Td>
                                        <Button
                                          mr="5px"
                                          onClick={this.handleRefund}
                                        >
                                          환불요청
                                        </Button>
                                        <Button onClick={this.closeRefund}>
                                          닫기
                                        </Button>
                                      </Td>
                                    </Tr>
                                    <Tr>
                                      <Td>
                                        <Box>환불사유를 입력해주세요</Box>
                                      </Td>
                                      <Td>
                                        <Input
                                          onChange={this.refundReason}
                                          name="refund_reason"
                                          placeholder="환불사유"
                                        />
                                      </Td>
                                    </Tr>
                                  </Tbody>
                                </Table>
                              </>
                            ) : (
                              <Table>
                                <Tbody>
                                  <Tr>
                                    <Td></Td>
                                    <Td></Td>
                                    <Td textAlign="right">
                                      <Button onClick={this.openRefund}>
                                        환불신청
                                      </Button>
                                    </Td>
                                  </Tr>
                                </Tbody>
                              </Table>
                            )}
                          </Td>
                        </Tr>
                      </Tbody>
                    </Table>
                  </Box>
                ) : (
                  <Flex
                    m="1rem"
                    p="1.5rem"
                    border="1px"
                    borderRadius="lg"
                    borderColor="gray.300"
                    boxShadow="base"
                  >
                    주문내역이 없습니다.
                  </Flex>
                )}
              </TabPanel>
              <TabPanel>
                <Heading as="h1" size="md">
                  개인정보 설정
                </Heading>
                <form onSubmit={this.handleProfileUpdate}>
                  {profiles}
                  <Flex mt="2rem" justifyContent="space-between">
                    <Button
                      w="150px"
                      size="md"
                      colorScheme="red"
                      variant="outline"
                      onClick={() => deleteAccount()}
                    >
                      회원탈퇴
                    </Button>
                    <Button
                      type="submit"
                      w="150px"
                      size="md"
                      colorScheme="blue"
                    >
                      수정하기
                    </Button>
                  </Flex>
                </form>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </AppLayout>
    );
  }
}

export default Profile;
