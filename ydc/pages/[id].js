import React, { useState, useCallback, useMemo, useEffect } from "react";
import Link from "next/link";
import router from "next/router";
import moment from "moment";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import {
  Input,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Table,
  Tbody,
  Td,
  Textarea,
  Th,
  Tr,
} from "@chakra-ui/react";
import AppLayout from "../components/Layout";
import FormInput from "../components/FormInput";
import { useCookies } from "react-cookie";

const useYupValidationResolver = (validationSchema) =>
  useCallback(
    async (data) => {
      try {
        const values = await validationSchema.validate(data, {
          abortEarly: false,
        });

        return {
          values,
          errors: {},
        };
      } catch (errors) {
        return {
          values: {},
          errors: errors.inner.reduce(
            (allErrors, currentError) => ({
              ...allErrors,
              [currentError.path]: {
                type: currentError.type ?? "validation",
                message: currentError.message,
              },
            }),
            {}
          ),
        };
      }
    },
    [validationSchema]
  );

const InquireView = ({ data }) => {
  const [dataList, setDataList] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies(["listId"]);
  const [admin_flag, setAdmin_flag] = useState(false);
  const [phone, setPhone] = useState("");
  const [modify, setModify] = useState(false);
  const answerStatus = dataList.answer_status ? "답변완료" : "미확인";

  useEffect(() => {
    fetch(process.env.LocalHost + "/inquireList", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        id: cookies.listId,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setDataList(res[0]);
        setPhone(res[0].phone);
      });
    window.sessionStorage.getItem("email") == "ydconnect@gmail.com" &&
      setAdmin_flag(true);
  }, []);

  const validationSchema = useMemo(() =>
    yup.object({
      title: yup
        .string()
        .min(2, "제목은 최소 2문자이상 입력해주세요")
        .max(50, "제목은 50자이하로 입력해주세요")
        .required("제목을 입력해주세요"),
      name: yup
        .string()
        .min(2, "이름은 최소 2문자로 입력해주세요")
        .max(20, "이름은 20문자 이하로 입력해주세요")
        .required("이름을 입력해주세요"),
      email: yup
        .string()
        .email("이메일 주소 형식이 아닙니다")
        .max(50, "너무 긴 이메일입니다.")
        .required("이메일 주소를 입력해주세요"),
      phone: yup
        .number()
        .required("휴대폰 번호를 입력해주세요")
        .typeError("-없이 숫자만 입력해주세요"),
      content: yup
        .string()
        .min(2, "문의내용을 입력해주세요")
        .max(1000, "문의내용은 1000자 이내로 작성해주세요")
        .required("문의내용을 입력해주세요"),
    })
  );

  const resolver = useYupValidationResolver(validationSchema);
  const { handleSubmit, register, errors } = useForm({ resolver });

  const modifyFormSubmit = (data) => {
    console.log(data);
    console.log(phone);

    window.confirm("수정하시겠습니까?") &&
      fetch(process.env.LocalHost + "/inquireModify", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: cookies.listId,
          title: data.title,
          name: data.name,
          phone: phone,
          content: data.content,
        }),
      }).then((res) => {
        res.json();
        alert("수정되었습니다.");
        router.push("/inquire");
      });
  };

  const handleModify = (e) => {
    modify ? setModify(false) : setModify(true);
  };

  const deleteInquire = (data) => {
    window.confirm("삭제하시겠습니까?") &&
      fetch(process.env.LocalHost + "/inquireListDelete", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: data.id,
          email: data.email,
        }),
      }).then((res) => {
        res.json();
        alert("삭제되었습니다.");
        router.push("/inquire");
      });
  };

  const adminAnswerInsert = (e) => {
    e.preventDefault();
    window.confirm("등록하시겠습니까?") &&
      fetch(process.env.LocalHost + "/inquireAdminAnswer", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: dataList.id,
          content: e.target.answer_content.value,
        }),
      }).then((res) => {
        res.json();
        alert("등록되었습니다.");
        router.push("/inquire");
      });
  };

  const adminAnswerDelete = (e) => {
    e.preventDefault();
    window.confirm("삭제하시겠습니까?") &&
      fetch(process.env.LocalHost + "/inquireAdminAnswerDelete", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: dataList.id,
        }),
      }).then((res) => {
        res.json();
        alert("삭제되었습니다.");
        router.push("/inquire");
      });
  };

  return (
    <AppLayout>
      <Box w="1024px" m="0 auto">
        <Heading as="h1" size="md" mb="1.5rem">
          문의내용
        </Heading>
        {modify ? (
          <form id="modifyForm" onSubmit={handleSubmit(modifyFormSubmit)}>
            <Table my="2.5rem" size="sm" borderTop="1px">
              <Tbody>
                <FormInput label="제목" errors={errors.title?.message} table>
                  <Input
                    ref={register}
                    placeholder="제목"
                    size="sm"
                    name="title"
                    defaultValue={dataList.title}
                  />
                  <Box pl={2} color="red" fontSize="0.85rem">
                    {errors.title?.message}
                  </Box>
                </FormInput>

                <FormInput label="이름" table>
                  <Input
                    ref={register}
                    name="name"
                    placeholder="이름"
                    size="sm"
                    defaultValue={dataList.name}
                  />
                  <Box pl={2} color="red" fontSize="0.85rem">
                    {errors.name?.message}
                  </Box>
                </FormInput>

                <FormInput label="이메일 주소" table>
                  <Input
                    ref={register}
                    placeholder="이메일 주소"
                    size="sm"
                    name="email"
                    defaultValue={dataList.email}
                    readOnly
                  />
                  <Box pl={2} color="red" fontSize="0.85rem">
                    {errors.email?.message}
                  </Box>
                </FormInput>

                <FormInput label="휴대폰 번호" table>
                  <Input
                    ref={register}
                    placeholder="01012345678"
                    size="sm"
                    name="phone"
                    type="tel"
                    inputMode="numeric"
                    defaultValue={dataList.phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <Box pl={2} color="red" fontSize="0.85rem">
                    {errors.phone?.message}
                  </Box>
                </FormInput>

                <FormInput label="문의내용" table>
                  <Textarea
                    ref={register}
                    minH="210px"
                    resize="none"
                    name="content"
                    defaultValue={dataList.content}
                  />
                  <Box pl={2} color="red" fontSize="0.85rem">
                    {errors.content?.message}
                  </Box>
                </FormInput>
              </Tbody>
            </Table>
          </form>
        ) : (
          <Table mb="2.5rem" size="sm" borderTop="1px">
            <Tbody>
              <Tr>
                <Th w="100px" bgColor="gray.200">
                  작성일시
                </Th>
                <Td w="200px">
                  {moment(dataList.create_datetime).format(
                    "YYYY년 MM월 D일 HH시 mm분"
                  )}
                </Td>
                <Th w="100px" bgColor="gray.200">
                  작성자
                </Th>
                <Td w="100px">{dataList.name}</Td>
                <Th w="100px" bgColor="gray.200">
                  처리상태
                </Th>
                <Td w="100px">{answerStatus}</Td>
              </Tr>
              <Tr>
                <Th bgColor="gray.200">타이틀</Th>
                <Td colSpan="3">{dataList.title}</Td>
              </Tr>
              <Tr h="200px">
                <Th bgColor="gray.200">문의내용</Th>
                <Td colSpan="3">{dataList.content}</Td>
              </Tr>
            </Tbody>
          </Table>
        )}

        {dataList.answer_status ? (
          <>
            <Heading as="h1" size="md" mb="1.5rem">
              답변내용
            </Heading>
            <Table size="sm" borderTop="1px">
              <Tbody>
                <Tr>
                  <Th w="200px" bgColor="gray.200">
                    답변일시
                  </Th>
                  <Td>
                    {moment(dataList.answer_datetime).format(
                      "YYYY년 MM월 D일 HH시 mm분"
                    )}
                  </Td>
                </Tr>
                <Tr h="200px">
                  <Th bgColor="gray.200">답변내용</Th>
                  <Td>{dataList.answer_content}</Td>
                </Tr>
              </Tbody>
            </Table>
            {admin_flag && (
              <Flex mt="0.75rem" justifyContent="flex-start">
                <Button
                  size="sm"
                  w="150px"
                  colorScheme="red"
                  variant="outline"
                  onClick={adminAnswerDelete}
                >
                  삭제
                </Button>
              </Flex>
            )}
          </>
        ) : (
          <></>
        )}

        {admin_flag && !dataList.answer_status && (
          <form onSubmit={adminAnswerInsert}>
            <Box
              mt="2rem"
              p="1rem"
              border="1px"
              borderColor="gray.300"
              borderRadius="lg"
              boxShadow="sm"
            >
              <Textarea
                placeholder="문의내용에 대한 답변을 달아주세요."
                name="answer_content"
                minH="150px"
                resize="none"
                borderColor="gray.200"
              />
              <Flex mt="0.5rem" justifyContent="flex-end">
                <Button type="submit" size="sm" w="150px" colorScheme="blue">
                  답변등록
                </Button>
              </Flex>
            </Box>
          </form>
        )}

        <Flex mt="2rem" justifyContent="space-between">
          <Link href="/inquire">
            <Button
              w="150px"
              mr="1rem"
              size="md"
              colorScheme="blue"
              variant="outline"
            >
              돌아가기
            </Button>
          </Link>
          <HStack spacing="1rem">
            {window.sessionStorage.getItem("email") != null ? (
              window.sessionStorage.getItem("email") == dataList.email &&
              !dataList.answer_status &&
              !modify ? (
                <>
                  <Button
                    w="150px"
                    size="md"
                    colorScheme="red"
                    onClick={(e) => deleteInquire(dataList)}
                  >
                    삭제하기
                  </Button>
                  <Button
                    w="150px"
                    size="md"
                    colorScheme="blue"
                    onClick={(e) => handleModify(e)}
                  >
                    수정하기
                  </Button>
                </>
              ) : (
                <>
                  {window.sessionStorage.getItem("email") == dataList.email &&
                    !dataList.answer_status && (
                      <>
                        <Button
                          type="submit"
                          form="modifyForm"
                          w="150px"
                          size="md"
                          variant="outline"
                          colorScheme="blue"
                          // onClick={(e) => handleModify(e)}
                        >
                          수정
                        </Button>
                        <Button
                          w="150px"
                          size="md"
                          colorScheme="blue"
                          onClick={(e) => handleModify(e)}
                        >
                          취소
                        </Button>
                      </>
                    )}
                </>
              )
            ) : (
              <></>
            )}
          </HStack>
        </Flex>
      </Box>
    </AppLayout>
  );
};

// export async function getInitialProps() {
//   const [cookies, setCookie, removeCookie] = useCookies(["listId"]);
//   const res = await fetch(process.env.LocalHost + "/inquireList", {
//     method: "post",
//     headers: {
//       "content-type": "application/json",
//     },
//     body: JSON.stringify({
//       // id: window.sessionStorage.getItem("listId"),
//       id: cookies.listId,
//     }),
//   });
//   const data = await res.json();

//   return { props: { data } };
// }

export default InquireView;
