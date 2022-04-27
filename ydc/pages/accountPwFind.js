import React, { useState, useCallback, useMemo } from "react";
import Link from "next/link";
import Router from "next/router";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Heading,
  ChakraProvider,
  Input,
  InputGroup,
  InputLeftElement,
  Box,
  Button,
  Divider,
} from "@chakra-ui/react";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { RiUserFill } from "react-icons/ri";
import SignLayout from "../components/SignLayout";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
init("user_GYH8Ghvp9azWvZT9u1zSO");

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

export default function signin() {
  const [findEmail, setFindEmail] = useState("");

  const validationSchema = useMemo(() =>
    yup.object({
      name: yup.string().required("이름을 입력해주세요"),
      phone: yup
        .number()
        .typeError("-없이 숫자만 입력해주세요")
        .required("전화번호를 입력해주세요"),
    })
  );
  const resolver = useYupValidationResolver(validationSchema);
  const { handleSubmit, register, errors } = useForm({ resolver });

  function sendEmail(e) {
    e.preventDefault();

    alert("서버와 연결되어있지않습니다.")
    // fetch(process.env.LocalHost + "/accountInfoFindPw", {
    //   method: "post",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     email: e.target.email.value,
    //     name: e.target.name.value,
    //     phone: e.target.phone.value,
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((res) => {
    //     if (res[0] != null) {
    //       emailjs
    //         .send(
    //           "ydconnect",
    //           "template_fr5q128",
    //           {
    //             name: res[0].name,
    //             message: res[0].password,
    //             email: res[0].email,
    //           },
    //           "user_GYH8Ghvp9azWvZT9u1zSO"
    //         )
    //         .then(
    //           (result) => {
    //             setFindEmail(
    //               `조회결과를 이메일로 전송하였습니다.\n이메일을 확인해주세요`
    //             );
    //           },
    //           (error) => {}
    //         );
    //     } else {
    //       setFindEmail("조회결과가 없습니다.\n입력하신 정보를 확인해주세요");
    //     }
    //   });
  }

  return (
    <ChakraProvider>
      <SignLayout>
        <Tabs isFitted variant="enclosed-colored" defaultIndex={0}>
          {/* Tab Title */}
          <TabList mb="1rem">
            <Button
              w="175px"
              onClick={(e) => {
                e.preventDefault();
                Router.push("/accountIdFind");
              }}
            >
              아이디찾기
            </Button>
            <Tab w="175px" _selected={{ color: "white", bg: "blue.500" }}>
              비밀번호찾기
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Heading as="h1" size="md" textAlign="center" mb="30px">
                <form onSubmit={sendEmail}>
                  <InputGroup mt={3}>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<RiUserFill color="gray.400" />}
                    />
                    <Input
                      name="email"
                      type="text"
                      placeholder="이메일"
                      ref={register}
                      required
                    />
                  </InputGroup>
                  <Box pl={2} color="red" fontSize="0.85rem">
                    {errors.email?.message}
                  </Box>
                  <InputGroup mt={3}>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<RiUserFill color="gray.400" />}
                    />
                    <Input
                      name="name"
                      type="text"
                      placeholder="이름"
                      ref={register}
                      required
                    />
                  </InputGroup>
                  <Box pl={2} color="red" fontSize="0.85rem">
                    {errors.name?.message}
                  </Box>
                  <InputGroup mt={3}>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<PhoneIcon color="gray.400" />}
                    />
                    <Input
                      name="phone"
                      type="number"
                      placeholder="전화번호"
                      required
                      ref={register}
                    />
                  </InputGroup>
                  <Box pl={2} color="red" fontSize="0.85rem">
                    {errors.phone?.message}
                  </Box>

                  <Button
                    type="submit"
                    mt={5}
                    mb={3}
                    colorScheme="blue"
                    size="md"
                    isFullWidth
                  >
                    조회하기
                  </Button>
                  <Button
                    mt={1}
                    mb={1}
                    colorScheme="blue"
                    variant="outline"
                    size="md"
                    isFullWidth
                    onClick={(e) => {
                      e.preventDefault();
                      Router.push("/signin");
                    }}
                  >
                    로그인화면으로
                  </Button>
                  <Divider />
                </form>
                <Box
                  p="0"
                  whiteSpace="pre-wrap"
                  border="0"
                  fontSize="18px"
                  readOnly
                >
                  {findEmail}
                </Box>
              </Heading>
            </TabPanel>
          </TabPanels>
        </Tabs>
        <Link href="/">
          <Box
            color="#0073e9"
            cursor="pointer"
            mt="3"
            float="right"
            fontSize="15px"
          >
            홈으로 ＞
          </Box>
        </Link>
      </SignLayout>
    </ChakraProvider>
  );
}
