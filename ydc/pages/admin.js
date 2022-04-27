import Link from "next/link";
import React, { Component } from "react";
import Router from "next/router";
import AppLayout from "../components/Layout";
import moment from "moment";
import ReactDOM from "react-dom";
import axios from "axios";
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
  Text,
  Td,
  Box,
  Image,
  Input,
  Textarea,
  Button,
  Select,
} from "@chakra-ui/react";
import {
  EditIcon,
  CloseIcon,
  CheckIcon,
  DeleteIcon,
  AttachmentIcon,
  RepeatClockIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reRender: "",
      checkAdmin: false,
      //제품리스트
      title: "",
      price: 0,
      imgsrc1: "",
      imgsrc2: "",
      imgsrc3: "",
      data: [],
      isInsert: false,
      isModify: false,
      isImgModify: false,
      modifyId: null,
      file1: "",
      file2: "",
      file3: "",
      //환불요청
      refundData: [],
      orderData: [],
    };
  }

  componentDidMount() {
    console.log(process.env.LocalHost);
    window.sessionStorage.getItem("email") != "ydconnect@gmail.com" &&
      Router.push("/");
    window.sessionStorage.getItem("email") == "ydconnect@gmail.com" &&
      this.setState({
        checkAdmin: true,
      });

    fetch(process.env.LocalHost + "/adm")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          data: res,
        });
      });

    fetch(process.env.LocalHost + "/admRefund")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          refundData: res,
        });
      });

    fetch(process.env.LocalHost + "/admOrderList")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          orderData: res,
        });
      });
  }

  refundSwitch() {}

  renswitch(params) {
    switch (params) {
      case 1:
        return "결제완료";
        break;
      case 2:
        return "배송중";
        break;
      case 3:
        return "배송완료";
        break;
      // case 4:
      //   return "";
      //   break;
      // case 5:
      //   return "환불신청중";
      //   break;
      // case 6:
      //   return "환불완료";
      //   break;
      default:
        return "점검중입니다.";
        break;
    }
  }

  //내용 수정부분 start
  titleChange = (e) => {
    this.setState({ title: e.target.value });
  };
  priceChange = (e) => {
    this.setState({ price: e.target.value });
  };

  handleFileOnChange = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    if (file != null) {
      reader.onloadend = () => {
        if (e.target.name == "itemImg1") {
          this.setState({
            file1: file,
            imgsrc1: reader.result,
          });
        }
        if (e.target.name == "itemImg2") {
          this.setState({
            file2: file,
            imgsrc2: reader.result,
          });
        }
        if (e.target.name == "itemImg3") {
          this.setState({
            file3: file,
            imgsrc3: reader.result,
          });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  adminSubmit = (e) => {
    e.preventDefault();
    var con_admin = window.confirm("수정하시겠습니까?");
    if (con_admin) {
      const formData = new FormData();
      if (this.state.isImgModify) {
        if (e.target.itemImg1.files[0] == null) {
          alert("이미지1 파일이 없습니다");
        } else if (e.target.itemImg2.files[0] == null) {
          alert("이미지2 파일이 없습니다");
        } else if (e.target.itemImg3.files[0] == null) {
          alert("이미지3 파일이 없습니다");
        } else {
          formData.append("itemId", e.target.itemId.value);
          formData.append("itemTitle", e.target.itemTitle.value);
          formData.append("itemCpu", e.target.itemCpu.value);
          formData.append("itemCooler", e.target.itemCooler.value);
          formData.append("itemMemory", e.target.itemMemory.value);
          formData.append("itemMainboard", e.target.itemMainboard.value);
          formData.append("itemVga", e.target.itemVga.value);
          formData.append("itemHdd", e.target.itemHdd.value);
          formData.append("itemSsd", e.target.itemSsd.value);
          formData.append("itemOdd", e.target.itemOdd.value);
          formData.append("itemPower", e.target.itemPower.value);
          formData.append("itemOs", e.target.itemOs.value);
          formData.append("itemPrice", e.target.itemPrice.value);
          formData.append("itemImg1", e.target.itemImg1.files[0]);
          formData.append("itemImg2", e.target.itemImg2.files[0]);
          formData.append("itemImg3", e.target.itemImg3.files[0]);
          formData.append("itemNameImg1", e.target.itemImg1.files[0].name);
          formData.append("itemNameImg2", e.target.itemImg2.files[0].name);
          formData.append("itemNameImg3", e.target.itemImg3.files[0].name);

          this.register(formData);
        }
      } else {
        fetch(process.env.LocalHost + "/adminNoImg", {
          method: "post",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            itemId: e.target.itemId.value,
            itemTitle: e.target.itemTitle.value,
            itemCpu: e.target.itemCpu.value,
            itemCooler: e.target.itemCooler.value,
            itemMemory: e.target.itemMemory.value,
            itemMainboard: e.target.itemMainboard.value,
            itemVga: e.target.itemVga.value,
            itemHdd: e.target.itemHdd.value,
            itemSsd: e.target.itemSsd.value,
            itemOdd: e.target.itemOdd.value,
            itemPower: e.target.itemPower.value,
            itemOs: e.target.itemOs.value,
            itemPrice: e.target.itemPrice.value,
          }),
        })
          .then((res) => res.json())
          .then((res) => {
            fetch(process.env.LocalHost + "/adm")
              .then((res) => res.json())
              .then((res) => {
                this.setState({
                  data: res,
                });
              });
            alert("변경 완료");
          });
      }
    }
  };

  insertSubmit = (e) => {
    e.preventDefault();
    var con_admin = window.confirm("등록하시겠습니까?");
    if (con_admin) {
      const formData = new FormData();
      if (e.target.itemImg1.files[0] == null) {
        alert("이미지1 파일이 없습니다");
      } else if (e.target.itemImg2.files[0] == null) {
        alert("이미지2 파일이 없습니다");
      } else if (e.target.itemImg3.files[0] == null) {
        alert("이미지3 파일이 없습니다");
      } else {
        formData.append("itemId", e.target.itemId.value);
        formData.append("itemTitle", e.target.itemTitle.value);
        formData.append("itemCpu", e.target.itemCpu.value);
        formData.append("itemCooler", e.target.itemCooler.value);
        formData.append("itemMemory", e.target.itemMemory.value);
        formData.append("itemMainboard", e.target.itemMainboard.value);
        formData.append("itemVga", e.target.itemVga.value);
        formData.append("itemHdd", e.target.itemHdd.value);
        formData.append("itemSsd", e.target.itemSsd.value);
        formData.append("itemOdd", e.target.itemOdd.value);
        formData.append("itemPower", e.target.itemPower.value);
        formData.append("itemOs", e.target.itemOs.value);
        formData.append("itemPrice", e.target.itemPrice.value);
        formData.append("itemImg1", e.target.itemImg1.files[0]);
        formData.append("itemImg2", e.target.itemImg2.files[0]);
        formData.append("itemImg3", e.target.itemImg3.files[0]);
        formData.append("itemNameImg1", e.target.itemImg1.files[0].name);
        formData.append("itemNameImg2", e.target.itemImg2.files[0].name);
        formData.append("itemNameImg3", e.target.itemImg3.files[0].name);

        this.register(formData);
      }
    }
  };

  register = (regiInfo) => {
    fetch(process.env.LocalHost + "/adminInsert", {
      method: "post",
      body: regiInfo,
    })
      .then((res) => res.json())
      .then((data) => alert("변경 완료"));
  };

  //내용수정 end

  cancelPay = (imp, rr) => {
    window.confirm("환불하시겠습니까?") &&
      fetch(process.env.LocalHost + "/admGetToken", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          imp_uid: imp,
          reason: rr,
        }),
      })
        .then((response) => response.json())
        .then((response) => {
          if (response.amount == undefined) {
            alert("이미 환불되었거나 없는 번호입니다");
          } else {
            fetch(process.env.LocalHost + "/admRefundUpdate", {
              method: "post",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                imp_uid: imp,
              }),
            })
              .then((res) => res.json())
              .then((res) => {
                alert("환불이 완료되었습니다.");
                window.location.reload();
              });
          }
        })
        .catch((error) => {
          alert("오류가 발생하였습니다");
        });
  };

  render() {
    const { data, refundData, orderData } = this.state;

    const handleOpenPost = (n, title, price, img1, img2, img3) => {
      this.setState({
        isModify: true,
        modifyId: n,
        title: title,
        price: price,
        imgsrc1: img1,
        imgsrc2: img2,
        imgsrc3: img3,
      });
    };
    const handleClosePost = (n) => {
      this.setState({
        isModify: false,
        modifyId: n,
      });
    };
    const handleImgModify = (n) => {
      this.setState({
        isImgModify: true,
      });
    };
    const handleCloseImgModify = (n) => {
      this.setState({
        isImgModify: false,
      });
    };
    const handleInsert = (n) => {
      this.setState({
        isInsert: true,
        imgsrc1: "",
        imgsrc2: "",
        imgsrc3: "",
      });
    };
    const handleInsertClose = (n) => {
      this.setState({
        isInsert: false,
      });
    };
    const deleteProductItem = (n) => {
      window.confirm("삭제하시겠습니까?") &&
        fetch(process.env.LocalHost + "/adminDelete", {
          method: "post",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            id: n,
          }),
        })
          .then((res) => res.json())
          .then((res) => {
            fetch(process.env.LocalHost + "/adm")
              .then((res) => res.json())
              .then((res) => {
                this.setState({
                  data: res,
                });
              });
            alert("삭제완료");
          });
    };
    const orderStatusPlus = (orderid) => {
      fetch(process.env.LocalHost + "/admOrderStatusPlus", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          order_id: orderid,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          fetch(process.env.LocalHost + "/admOrderList")
            .then((res) => res.json())
            .then((res) => {
              this.setState({
                orderData: res,
              });
            });
        });
    };

    const orderStatusMinus = (orderid) => {
      fetch(process.env.LocalHost + "/admOrderStatusMinus", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          order_id: orderid,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          fetch(process.env.LocalHost + "/admOrderList")
            .then((res) => res.json())
            .then((res) => {
              this.setState({
                orderData: res,
              });
            });
        });
    };

    let productAdmin = data.map((admDatas, index) => {
      return (
        <Table key={admDatas.id}>
          <Tbody>
            <Tr borderBottom="2px solid #ccc">
              <Td p="0">
                {this.state.isModify == true &&
                this.state.modifyId == admDatas.id ? (
                  <>
                    <form
                      name="adminForm"
                      encType="multipart/form-data"
                      method="post"
                      onSubmit={this.adminSubmit}
                    >
                      <Table>
                        <Tbody>
                          <Tr>
                            <Td p="0" w="50px" h="100px" textAlign="center">
                              id
                              <Input
                                name="itemId"
                                value={admDatas.id}
                                readOnly
                                border="0"
                              ></Input>
                            </Td>
                            <Td p="5px" w="364px" textAlign="center">
                              title
                              <Textarea
                                p="0"
                                name="itemTitle"
                                defaultValue={admDatas.title}
                              ></Textarea>
                            </Td>
                            <Td
                              pr="20px"
                              w="140px"
                              textAlign="end"
                              textAlign="center"
                            >
                              price
                              <Input
                                p="0"
                                name="itemPrice"
                                type="number"
                                defaultValue={admDatas.price}
                              ></Input>
                            </Td>
                            {this.state.isImgModify == true ? (
                              <>
                                <Td p="0 5px 0 0" w="120px" h="120px">
                                  <Input
                                    type="file"
                                    accept="image/jpg,impge/png,image/jpeg,image/gif,image/JPG,image/PNG"
                                    name="itemImg1"
                                    onChange={this.handleFileOnChange}
                                  ></Input>
                                  <Image
                                    className="preview1"
                                    src={this.state.imgsrc1}
                                  ></Image>
                                </Td>
                                <Td p="0 5px 0 0" w="120px" h="120px">
                                  <Input
                                    type="file"
                                    accept="image/jpg,impge/png,image/jpeg,image/gif,image/JPG,image/PNG"
                                    name="itemImg2"
                                    onChange={this.handleFileOnChange}
                                  ></Input>
                                  <Image
                                    className="preview2"
                                    src={this.state.imgsrc2}
                                  ></Image>
                                </Td>
                                <Td p="0 5px 0 0" w="120px" h="120px">
                                  <Input
                                    type="file"
                                    accept="image/jpg,impge/png,image/jpeg,image/gif,image/JPG,image/PNG"
                                    name="itemImg3"
                                    onChange={this.handleFileOnChange}
                                  ></Input>
                                  <Image
                                    className="preview3"
                                    src={this.state.imgsrc3}
                                  ></Image>
                                </Td>
                              </>
                            ) : (
                              <>
                                <Td colSpan="3" textAlign="center">
                                  <Button onClick={() => handleImgModify()}>
                                    이미지 수정하기
                                  </Button>
                                </Td>
                              </>
                            )}

                            <Td p="10px" w="106px">
                              {this.state.isImgModify == true ? (
                                <>
                                  <Button
                                    onClick={() => handleCloseImgModify()}
                                  >
                                    <RepeatClockIcon w={7} h={7} />
                                  </Button>
                                </>
                              ) : (
                                <>
                                  <Button onClick={() => handleImgModify()}>
                                    <AttachmentIcon w={7} h={7} />
                                  </Button>
                                </>
                              )}
                              <Button type="submit" mt="10px">
                                <CheckIcon w={7} h={7} />
                              </Button>
                              <Button
                                mt="10px"
                                onClick={() => handleClosePost(admDatas.id)}
                              >
                                <CloseIcon w={7} h={7} />
                              </Button>
                            </Td>
                          </Tr>
                          <Tr>
                            <Td colSpan="10">
                              <Table>
                                <Tbody>
                                  <Tr>
                                    <Td p="5px" w="364px" textAlign="center">
                                      cpu
                                      <Textarea
                                        p="0"
                                        name="itemCpu"
                                        defaultValue={admDatas.cpu}
                                      ></Textarea>
                                    </Td>
                                    <Td p="5px" w="364px" textAlign="center">
                                      cooler
                                      <Textarea
                                        p="0"
                                        name="itemCooler"
                                        defaultValue={admDatas.cooler}
                                      ></Textarea>
                                    </Td>
                                    <Td p="5px" w="364px" textAlign="center">
                                      memory
                                      <Textarea
                                        p="0"
                                        name="itemMemory"
                                        defaultValue={admDatas.memory}
                                      ></Textarea>
                                    </Td>
                                    <Td p="5px" w="364px" textAlign="center">
                                      mainboard
                                      <Textarea
                                        p="0"
                                        name="itemMainboard"
                                        defaultValue={admDatas.mainboard}
                                      ></Textarea>
                                    </Td>
                                  </Tr>
                                </Tbody>
                              </Table>
                            </Td>
                          </Tr>
                          <Tr>
                            <Td colSpan="10">
                              <Table>
                                <Tbody>
                                  <Tr>
                                    <Td p="5px" w="364px" textAlign="center">
                                      vga
                                      <Textarea
                                        p="0"
                                        name="itemVga"
                                        defaultValue={admDatas.vga}
                                      ></Textarea>
                                    </Td>
                                    <Td p="5px" w="364px" textAlign="center">
                                      hdd
                                      <Textarea
                                        p="0"
                                        name="itemHdd"
                                        defaultValue={admDatas.hdd}
                                      ></Textarea>
                                    </Td>
                                    <Td p="5px" w="364px" textAlign="center">
                                      ssd
                                      <Textarea
                                        p="0"
                                        name="itemSsd"
                                        defaultValue={admDatas.ssd}
                                      ></Textarea>
                                    </Td>
                                    <Td p="5px" w="364px" textAlign="center">
                                      odd
                                      <Textarea
                                        p="0"
                                        name="itemOdd"
                                        defaultValue={admDatas.odd}
                                      ></Textarea>
                                    </Td>
                                  </Tr>
                                </Tbody>
                              </Table>
                            </Td>
                          </Tr>
                          <Tr>
                            <Td colSpan="10">
                              <Table>
                                <Tbody>
                                  <Tr>
                                    <Td p="5px" w="364px" textAlign="center">
                                      power
                                      <Textarea
                                        p="0"
                                        name="itemPower"
                                        defaultValue={admDatas.power}
                                      ></Textarea>
                                    </Td>
                                    <Td p="5px" w="364px" textAlign="center">
                                      os
                                      <Textarea
                                        p="0"
                                        name="itemOs"
                                        defaultValue={admDatas.os}
                                      ></Textarea>
                                    </Td>
                                  </Tr>
                                </Tbody>
                              </Table>
                            </Td>
                          </Tr>
                        </Tbody>
                      </Table>
                    </form>
                  </>
                ) : (
                  <>
                    <Table>
                      <Tbody>
                        <Tr>
                          <Td p="0" w="50px" h="100px" textAlign="center">
                            <Input
                              name="itemId"
                              value={admDatas.id}
                              readOnly
                              border="0"
                            ></Input>
                          </Td>
                          <Td p="5px" w="364px">
                            <Text
                              p="0"
                              maxLength="10"
                              whiteSpace="pre-wrap"
                              wordBreak="break-all"
                            >
                              {admDatas.title}
                            </Text>
                          </Td>
                          <Td
                            pr="20px"
                            w="140px"
                            textAlign="end"
                          >{`${admDatas.price.toLocaleString()}원`}</Td>
                          <Td p="0 5px 0 0" w="120px" h="120px">
                            <Image src={admDatas.imgsrc1}></Image>
                          </Td>
                          <Td p="0 5px 0 0" w="120px" h="120px">
                            <Image src={admDatas.imgsrc2}></Image>
                          </Td>
                          <Td p="0 5px 0 0" w="120px" h="120px">
                            <Image src={admDatas.imgsrc3}></Image>
                          </Td>
                          <Td p="10px" w="106px">
                            <Button
                              onClick={() =>
                                handleOpenPost(
                                  admDatas.id,
                                  admDatas.title,
                                  admDatas.price,
                                  admDatas.imgsrc1,
                                  admDatas.imgsrc2,
                                  admDatas.imgsrc3
                                )
                              }
                            >
                              <EditIcon w={7} h={7} />
                            </Button>
                            <Button
                              mt="20px"
                              onClick={() => deleteProductItem(admDatas.id)}
                            >
                              <DeleteIcon w={7} h={7} />
                            </Button>
                          </Td>
                        </Tr>
                      </Tbody>
                    </Table>
                  </>
                )}
              </Td>
            </Tr>
          </Tbody>
        </Table>
      );
    });

    let refundList = refundData.map((d, i) => {
      return (
        <Tr key={i}>
          <Td p="5px" textAlign="center">
            {d.order_id}
          </Td>
          <Td w="150px" p="5px" textAlign="center">
            {d.order_number}
          </Td>
          <Td w="150px" p="5px" textAlign="center">
            {d.name}
          </Td>
          <Td w="400px" p="5px">
            {d.refund_reason}
          </Td>
          <Td w="300px" p="5px">
            {d.title.slice(0, 50) + "..."}
          </Td>
          <Td w="50px" p="5px" textAlign="center">
            {d.item_amount}
          </Td>
          <Td w="70px" p="0" textAlign="center">
            <Button onClick={() => this.cancelPay(d.imp_uid, d.refund_reason)}>
              환불
            </Button>
          </Td>
        </Tr>
      );
    });

    let orderList = orderData.map((d, i) => {
      return (
        <Tr key={i}>
          <Td w="30px" p="5px" textAlign="center">
            {d.order_id}
          </Td>
          <Td w="80px" p="5px" textAlign="center">
            {d.order_number}
          </Td>
          <Td w="50px" p="5px" textAlign="center" whiteSpace="pre-wrap">
            {moment(d.create_datetime).format("YY.MM.D[\n]HH:mm")}
          </Td>
          <Td w="170px" p="5px" textAlign="center">
            {d.title.slice(0, 30) + "..."}
          </Td>
          <Td w="50px" p="5px" textAlign="center">
            {d.item_amount}
          </Td>
          <Td w="80px" p="5px" textAlign="center">
            {d.name}
          </Td>
          <Td w="80px" p="5px" textAlign="center">
            {d.phone}
          </Td>
          <Td w="100px" p="5px" textAlign="center">
            {d.email}
          </Td>
          <Td w="120px" p="5px" textAlign="center">
            {d.order_status > 1 ? (
              <ChevronLeftIcon
                w={6}
                h={6}
                cursor="pointer"
                onClick={() => orderStatusMinus(d.order_id)}
              />
            ) : null}
            {this.renswitch(d.order_status)}
            {d.order_status < 3 ? (
              <ChevronRightIcon
                w={6}
                h={6}
                cursor="pointer"
                onClick={() => orderStatusPlus(d.order_id)}
              />
            ) : null}
          </Td>
          {/* <Td w="400px" p="5px">
            {d.refund_reason}
          </Td>
          <Td w="300px" p="5px">
            {d.title.slice(0, 50) + "..."}
          </Td>
          <Td w="50px" p="5px" textAlign="center">
            {d.item_amount}
          </Td>
          <Td w="70px" p="0" textAlign="center">
            <Button onClick={() => this.cancelPay(d.imp_uid, d.refund_reason)}>
              환불
            </Button>
          </Td> */}
        </Tr>
      );
    });

    return (
      <AppLayout>
        {this.state.checkAdmin && (
          <>
            <Box width="1020px" m="10px auto">
              <Box fontSize="30px" textAlign="center" width="200px" m="0 auto">
                Admin Page
              </Box>
              <Box width="1020px" m="0 auto">
                <Tabs isFitted variant="enclosed-colored" defaultIndex={1}>
                  <TabList mb="1rem">
                    <Tab _selected={{ color: "white", bg: "blue.500" }}>
                      제품 리스트
                    </Tab>
                    <Tab _selected={{ color: "white", bg: "blue.500" }}>
                      주문조회
                    </Tab>
                    <Tab _selected={{ color: "white", bg: "blue.500" }}>
                      환불요청
                    </Tab>
                  </TabList>
                  {/* -------------------------------- */}
                  <TabPanels>
                    <TabPanel p="0">
                      <Heading as="h1" size="md" textAlign="center" mb="30px">
                        <Table>
                          <Tbody fontSize="15px">
                            <Tr>
                              <Td p="0" w="50px" textAlign="center">
                                ID
                              </Td>
                              <Td p="5px" w="363px" textAlign="center">
                                제품명
                              </Td>
                              <Td pr="20px" w="135px" textAlign="end">
                                가격
                              </Td>
                              <Td p="5px" w="121px" textAlign="center">
                                이미지1
                              </Td>
                              <Td p="5px" w="121px" textAlign="center">
                                이미지2
                              </Td>
                              <Td p="5px" w="121px" textAlign="center">
                                이미지3
                              </Td>
                              <Td p="5px" w="105px">
                                {this.state.isInsert ? (
                                  <>
                                    <Button onClick={handleInsertClose}>
                                      닫기
                                    </Button>
                                  </>
                                ) : (
                                  <>
                                    <Button onClick={handleInsert}>
                                      신규등록
                                    </Button>
                                  </>
                                )}
                              </Td>
                            </Tr>
                            <Tr>
                              <Td p="0" h="5px" colSpan="7">
                                {this.state.isInsert && (
                                  <form
                                    name="adminInsertForm"
                                    encType="multipart/form-data"
                                    method="post"
                                    onSubmit={this.insertSubmit}
                                  >
                                    <Table>
                                      <Tbody>
                                        <Tr>
                                          <Td
                                            p="0"
                                            w="50px"
                                            h="100px"
                                            textAlign="center"
                                          >
                                            id
                                            <Input
                                              name="itemId"
                                              readOnly
                                              border="0"
                                            ></Input>
                                          </Td>
                                          <Td
                                            p="5px"
                                            w="364px"
                                            textAlign="center"
                                          >
                                            title
                                            <Textarea
                                              p="0"
                                              name="itemTitle"
                                            ></Textarea>
                                          </Td>
                                          <Td
                                            pr="20px"
                                            w="140px"
                                            textAlign="end"
                                            textAlign="center"
                                          >
                                            price
                                            <Input
                                              p="0"
                                              name="itemPrice"
                                              type="number"
                                              defaultValue={0}
                                            ></Input>
                                          </Td>
                                          <Td p="0 5px 0 0" w="120px" h="120px">
                                            <Input
                                              type="file"
                                              accept="image/jpg,impge/png,image/jpeg,image/gif,image/JPG,image/PNG"
                                              name="itemImg1"
                                              onChange={this.handleFileOnChange}
                                            ></Input>
                                            <Image
                                              className="preview1"
                                              src={this.state.imgsrc1}
                                            ></Image>
                                          </Td>
                                          <Td p="0 5px 0 0" w="120px" h="120px">
                                            <Input
                                              type="file"
                                              accept="image/jpg,impge/png,image/jpeg,image/gif,image/JPG,image/PNG"
                                              name="itemImg2"
                                              onChange={this.handleFileOnChange}
                                            ></Input>
                                            <Image
                                              className="preview2"
                                              src={this.state.imgsrc2}
                                            ></Image>
                                          </Td>
                                          <Td p="0 5px 0 0" w="120px" h="120px">
                                            <Input
                                              type="file"
                                              accept="image/jpg,impge/png,image/jpeg,image/gif,image/JPG,image/PNG"
                                              name="itemImg3"
                                              onChange={this.handleFileOnChange}
                                            ></Input>
                                            <Image
                                              className="preview3"
                                              src={this.state.imgsrc3}
                                            ></Image>
                                          </Td>

                                          <Td p="10px" w="106px">
                                            <Button type="submit" mt="10px">
                                              등록하기
                                            </Button>
                                          </Td>
                                        </Tr>
                                        <Tr>
                                          <Td colSpan="10">
                                            <Table>
                                              <Tbody>
                                                <Tr>
                                                  <Td
                                                    p="5px"
                                                    w="364px"
                                                    textAlign="center"
                                                  >
                                                    cpu
                                                    <Textarea
                                                      p="0"
                                                      name="itemCpu"
                                                    ></Textarea>
                                                  </Td>
                                                  <Td
                                                    p="5px"
                                                    w="364px"
                                                    textAlign="center"
                                                  >
                                                    cooler
                                                    <Textarea
                                                      p="0"
                                                      name="itemCooler"
                                                    ></Textarea>
                                                  </Td>
                                                  <Td
                                                    p="5px"
                                                    w="364px"
                                                    textAlign="center"
                                                  >
                                                    memory
                                                    <Textarea
                                                      p="0"
                                                      name="itemMemory"
                                                    ></Textarea>
                                                  </Td>
                                                  <Td
                                                    p="5px"
                                                    w="364px"
                                                    textAlign="center"
                                                  >
                                                    mainboard
                                                    <Textarea
                                                      p="0"
                                                      name="itemMainboard"
                                                    ></Textarea>
                                                  </Td>
                                                </Tr>
                                              </Tbody>
                                            </Table>
                                          </Td>
                                        </Tr>
                                        <Tr>
                                          <Td colSpan="10">
                                            <Table>
                                              <Tbody>
                                                <Tr>
                                                  <Td
                                                    p="5px"
                                                    w="364px"
                                                    textAlign="center"
                                                  >
                                                    vga
                                                    <Textarea
                                                      p="0"
                                                      name="itemVga"
                                                    ></Textarea>
                                                  </Td>
                                                  <Td
                                                    p="5px"
                                                    w="364px"
                                                    textAlign="center"
                                                  >
                                                    hdd
                                                    <Textarea
                                                      p="0"
                                                      name="itemHdd"
                                                    ></Textarea>
                                                  </Td>
                                                  <Td
                                                    p="5px"
                                                    w="364px"
                                                    textAlign="center"
                                                  >
                                                    ssd
                                                    <Textarea
                                                      p="0"
                                                      name="itemSsd"
                                                    ></Textarea>
                                                  </Td>
                                                  <Td
                                                    p="5px"
                                                    w="364px"
                                                    textAlign="center"
                                                  >
                                                    odd
                                                    <Textarea
                                                      p="0"
                                                      name="itemOdd"
                                                    ></Textarea>
                                                  </Td>
                                                </Tr>
                                              </Tbody>
                                            </Table>
                                          </Td>
                                        </Tr>
                                        <Tr>
                                          <Td colSpan="10">
                                            <Table>
                                              <Tbody>
                                                <Tr>
                                                  <Td
                                                    p="5px"
                                                    w="364px"
                                                    textAlign="center"
                                                  >
                                                    power
                                                    <Textarea
                                                      p="0"
                                                      name="itemPower"
                                                    ></Textarea>
                                                  </Td>
                                                  <Td
                                                    p="5px"
                                                    w="364px"
                                                    textAlign="center"
                                                  >
                                                    os
                                                    <Textarea
                                                      p="0"
                                                      name="itemOs"
                                                    ></Textarea>
                                                  </Td>
                                                </Tr>
                                              </Tbody>
                                            </Table>
                                          </Td>
                                        </Tr>
                                      </Tbody>
                                    </Table>
                                  </form>
                                )}
                              </Td>
                            </Tr>
                            <Tr>
                              <Td p="0" h="20px" colSpan="7">
                                {productAdmin}
                              </Td>
                            </Tr>
                          </Tbody>
                        </Table>
                      </Heading>
                    </TabPanel>
                    {/* -------------------------------- */}
                    <TabPanel p="0">
                      <Table>
                        <Tbody>
                          <Tr>
                            <Td
                              p="0"
                              border="1px solid black"
                              textAlign="center"
                            >
                              id
                            </Td>
                            <Td
                              p="0"
                              border="1px solid black"
                              textAlign="center"
                            >
                              주문번호
                            </Td>
                            <Td
                              p="0"
                              border="1px solid black"
                              textAlign="center"
                            >
                              주문일자
                            </Td>
                            <Td
                              p="0"
                              border="1px solid black"
                              textAlign="center"
                            >
                              제품명
                            </Td>
                            <Td
                              p="0"
                              border="1px solid black"
                              textAlign="center"
                            >
                              수량
                            </Td>
                            <Td
                              p="0"
                              border="1px solid black"
                              textAlign="center"
                            >
                              주문자명
                            </Td>
                            <Td
                              p="0"
                              border="1px solid black"
                              textAlign="center"
                            >
                              전화번호
                            </Td>
                            <Td
                              p="0"
                              border="1px solid black"
                              textAlign="center"
                            >
                              이메일
                            </Td>
                            <Td
                              p="0"
                              border="1px solid black"
                              textAlign="center"
                            >
                              상태
                            </Td>
                          </Tr>
                          {orderList}
                        </Tbody>
                      </Table>
                    </TabPanel>
                    {/* -------------------------------- */}
                    <TabPanel>
                      <Table p="0">
                        <Tbody>
                          {refundList.length == 0 ? (
                            <Tr>
                              <Td
                                textAlign="center"
                                fontSize="20px"
                                fontWeight="bold"
                              >
                                환불요청없음
                              </Td>
                            </Tr>
                          ) : (
                            <>
                              <Tr>
                                <Td w="15px" p="0" textAlign="center">
                                  id
                                </Td>
                                <Td p="0" textAlign="center">
                                  주문번호
                                </Td>
                                <Td p="0" textAlign="center">
                                  성명
                                </Td>
                                <Td p="0" textAlign="center">
                                  환불사유
                                </Td>
                                <Td p="0" textAlign="center">
                                  환불제품
                                </Td>
                                <Td p="0" textAlign="center">
                                  수량
                                </Td>
                                <Td p="0" textAlign="center">
                                  환불
                                </Td>
                              </Tr>
                              {refundList}
                            </>
                          )}
                        </Tbody>
                      </Table>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </Box>
            </Box>
          </>
        )}
      </AppLayout>
    );
  }
}
export default Admin;
