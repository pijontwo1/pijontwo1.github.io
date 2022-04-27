import React, { useState, useCallback, useMemo, useEffect } from "react";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import * as yup from "yup";
import { useForm } from "react-hook-form";
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
import AppLayout from "../components/Layout";
import FormInput from "../components/FormInput";

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

const InquireWrite = () => {
  const [user, setUser] = useState([]);
  const [phone, setPhone] = useState("");

  useEffect(() => {
    window.sessionStorage.getItem("email") == null &&
      (alert("로그인해주세요"), Router.push("/signin"));

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
        setUser(res[0]);
        setPhone(res[0].phone);
      });
    // window.sessionStorage.getItem("email") == "ydconnect@gmail.com" &&
    //   setAdmin_flag(true);
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

  const router = useRouter();

  const handleFormSubmit = (data) => {
    window.confirm("등록하시겠습니까?") &&
      fetch(process.env.LocalHost + "/inquireWrite", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: data.title,
          name: data.name,
          email: data.email,
          phone: phone,
          content: data.content,
        }),
      }).then((res) => {
        res.json();
        alert("등록되었습니다.");
        router.push("/inquire");
      });
  };

  return (
    <AppLayout>
      <Heading
        as="h1"
        size="lg"
        fontFamily="noto"
        textAlign="center"
        mb="2rem"
        color="#212529" // GRAY 9
      >
        문의하기
      </Heading>
      <Box w="1024px" m="0 auto">
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <Table my="2.5rem" size="sm" borderTop="1px">
            <Tbody>
              {/* 업체명 */}
              <FormInput label="제목" errors={errors.title?.message} table>
                <Input
                  ref={register}
                  placeholder="제목"
                  size="sm"
                  name="title"
                />
                <Box pl={2} color="red" fontSize="0.85rem">
                  {errors.title?.message}
                </Box>
              </FormInput>

              {/* 이름 */}
              <FormInput label="이름" table>
                <Input
                  ref={register}
                  name="name"
                  placeholder="이름"
                  size="sm"
                  defaultValue={user.name}
                />
                <Box pl={2} color="red" fontSize="0.85rem">
                  {errors.name?.message}
                </Box>
              </FormInput>

              {/* 이메일 주소 */}
              <FormInput label="이메일 주소" table>
                <Input
                  ref={register}
                  placeholder="이메일 주소"
                  size="sm"
                  name="email"
                  defaultValue={user.email}
                  readOnly
                />
                <Box pl={2} color="red" fontSize="0.85rem">
                  {errors.email?.message}
                </Box>
              </FormInput>

              {/* 휴대폰 번호 */}
              <FormInput label="휴대폰 번호" table>
                <Input
                  ref={register}
                  placeholder="01012345678"
                  size="sm"
                  name="phone"
                  type="tel"
                  inputMode="numeric"
                  defaultValue={user.phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <Box pl={2} color="red" fontSize="0.85rem">
                  {errors.phone?.message}
                </Box>
              </FormInput>

              {/* 문의내용 */}
              <FormInput label="문의내용" table>
                <Textarea
                  ref={register}
                  minH="210px"
                  resize="none"
                  name="content"
                />
                <Box pl={2} color="red" fontSize="0.85rem">
                  {errors.content?.message}
                </Box>
              </FormInput>
            </Tbody>
          </Table>
          <Flex mt="2rem" justifyContent="space-between" mb="50px">
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
            <Button type="submit" w="150px" size="md" colorScheme="blue">
              등록하기
            </Button>
          </Flex>
        </form>
      </Box>
    </AppLayout>
  );
};

export default InquireWrite;
