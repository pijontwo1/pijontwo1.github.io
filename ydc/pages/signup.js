import React, { useState, useCallback, useMemo, useEffect } from "react";
import Link from "next/link";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import {
  ChakraProvider,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Box,
  Stack,
  Flex,
  Checkbox,
  Button,
  Divider,
  Text,
} from "@chakra-ui/react";
import { RiUserFill } from "react-icons/ri";
import {
  EmailIcon,
  LockIcon,
  ViewIcon,
  ViewOffIcon,
  PhoneIcon,
} from "@chakra-ui/icons";

import SignLayout from "../components/SignLayout";
import ModalButton from "../components/Modal";

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

export default function signup() {
  // useEffect(() => {
  //   fetch(process.env.LocalHost + "/signupAgree")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setAgreeTos(res[0].content);
  //       setAgreePersonal(res[1].content);
  //     });
  // });

  const [agreePersoanl, setAgreePersonal] = useState();
  const [agreeTos, setAgreeTos] = useState();
  const [showPassword, setShowPassword] = useState([false, false]);
  const clickShowButton = (index, e) => {
    const value = showPassword[index];

    // TODO
    // 리팩토링
    if (index === 0) {
      setShowPassword([!value, showPassword[1]]);
    } else if (index === 1) {
      setShowPassword([showPassword[0], !value]);
    } else {
    }
  };

  const [checkedItems, setCheckedItems] = useState([false, false]);
  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

  const validationSchema = useMemo(() =>
    yup.object({
      email: yup
        .string()
        .email("이메일 주소 형식이 아닙니다")
        .required("이메일 주소를 입력해주세요"),
      password: yup
        .string()
        .min(8, "비밀번호는 최소 8문자, 최대 16문자로 입력해 주세요")
        .max(16, "비밀번호는 최소 8문자, 최대 16문자로 입력해 주세요")
        .required("비밀번호를 입력해주세요"),
      passwordConfirm: yup
        .string()
        .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다")
        .required("비밀번호를 입력해주세요"),
      name: yup
        .string()
        .min(2, "이름은 최소 2문자로 입력해주세요")
        .required("이름을 입력해주세요"),
      phone: yup
        .number()
        .required("휴대폰 번호를 입력해주세요")
        .typeError("-없이 숫자만 입력해주세요"),
      termsCheck: yup
        .boolean()
        .oneOf([true], "전체 이용약관에 동의하지 않았습니다"),
    })
  );

  const resolver = useYupValidationResolver(validationSchema);
  const { handleSubmit, register, errors } = useForm({ resolver });

  //중복체크
  const [isCheckEmail, setIsCheckEmail] = useState(false);
  const [changeEmail, setChangeEmail] = useState("");
  const [changePhone, setChangePhone] = useState("");
  const emailChange = (e) => {
    setChangeEmail(e.target.value);
    setIsCheckEmail(false);
  };

  const phoneChange = (e) => {
    setChangePhone(e.target.value);
  };

  const CheckEmail = () => {
    if (changeEmail == "") {
      alert("이메일를 입력해주세요");
    } else {
      alert("서버와 연결되어있지않습니다.")
      // fetch(process.env.LocalHost + "/signupCheck", {
      //   method: "post",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({
      //     email: changeEmail,
      //   }),
      // })
      //   .then((res) => res.json())
      //   .then((res) => {
      //     if (res[0] == null) {
      //       alert("사용 가능한 이메일입니다.");
      //       setIsCheckEmail(true);
      //     } else {
      //       alert("이미 사용중인 이메일입니다.");
      //     }
      //   });
    }
  };

  const handleFormSubmit = (data) => {
    alert("서버와 연결되어있지않습니다.")
    // if (isCheckEmail) {
    //   fetch(process.env.LocalHost + "/signup", {
    //     method: "post",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({
    //       email: data.email,
    //       password: data.password,
    //       name: data.name,
    //       phone: changePhone,
    //     }),
    //   }).then((res) => {
    //     res.json();
    //     alert("회원가입이 완료되었습니다.");
    //     location.href = "/";
    //   });
    // } else {
    //   alert("아이디 중복확인을 해주세요");
    // }
  };

  return (
    <ChakraProvider>
      <SignLayout>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          {/* 이메일 */}
          <InputGroup mt={3}>
            <InputLeftElement
              pointerEvents="none"
              children={<EmailIcon color="gray.400" />}
            />
            <Input
              name="email"
              type="email"
              placeholder="이메일"
              ref={register}
              onChange={emailChange}
              autoComplete="off"
            />
            <Button
              w="70px"
              fontSize="13px"
              fontWeight="normal"
              letterSpacing="-2px"
              onClick={CheckEmail}
            >
              중복확인
            </Button>
          </InputGroup>
          <Box pl={2} color="red" fontSize="0.85rem">
            {errors.email?.message}
          </Box>

          {/* 비밀번호 */}
          <InputGroup mt={3}>
            <InputLeftElement
              pointerEvents="none"
              children={<LockIcon color="gray.400" />}
            />
            <Input
              name="password"
              type={showPassword[0] ? "text" : "password"}
              placeholder="비밀번호 최소8에서 최대 16자리"
              ref={register}
              autoComplete="off"
            />
            <InputRightElement
              children={
                showPassword[0] ? (
                  <ViewIcon color="gray.400" />
                ) : (
                  <ViewOffIcon color="gray.400" />
                )
              }
              onClick={(e) => {
                clickShowButton(0, e);
              }}
              cursor="pointer"
            />
          </InputGroup>
          <Box pl={2} color="red" fontSize="0.85rem">
            {errors.password?.message}
          </Box>

          {/* 비밀번호 확인 */}
          <InputGroup mt={3}>
            <InputLeftElement
              pointerEvents="none"
              children={<LockIcon color="gray.400" />}
            />
            <Input
              name="passwordConfirm"
              type={showPassword[1] ? "text" : "password"}
              placeholder="비밀번호 확인"
              ref={register}
              autoComplete="off"
            />
            <InputRightElement
              children={
                showPassword[1] ? (
                  <ViewIcon color="gray.400" />
                ) : (
                  <ViewOffIcon color="gray.400" />
                )
              }
              onClick={(e) => {
                clickShowButton(1, e);
              }}
              cursor="pointer"
            />
          </InputGroup>
          <Box pl={2} color="red" fontSize="0.85rem">
            {errors.passwordConfirm?.message}
          </Box>

          {/* 이름 */}
          <InputGroup mt={3}>
            <InputLeftElement
              pointerEvents="none"
              children={<RiUserFill color="#A0AEC0" />}
            />
            <Input
              autoComplete="off"
              name="name"
              type="text"
              placeholder="이름"
              ref={register}
            />
          </InputGroup>
          <Box pl={2} color="red" fontSize="0.85rem">
            {errors.name?.message}
          </Box>

          {/* 휴대폰 번호 */}
          <InputGroup mt={3}>
            <InputLeftElement
              pointerEvents="none"
              children={<PhoneIcon color="gray.400" />}
            />
            <Input
              name="phone"
              type="text"
              placeholder="휴대폰 번호 ( - 없이 숫자만)"
              ref={register}
              autoComplete="off"
              onChange={phoneChange}
            />
          </InputGroup>
          <Box pl={2} color="red" fontSize="0.85rem">
            {errors.phone?.message}
          </Box>

          {/* 이용약관 */}
          <Stack
            p={2}
            mt={3}
            spacing={1}
            border="1px"
            borderColor="gray.200"
            borderRadius="md"
          >
            <Checkbox
              name="termsCheck"
              isChecked={allChecked}
              isIndeterminate={isIndeterminate}
              onChange={(e) => {
                setCheckedItems([e.target.checked, e.target.checked]);
              }}
              ref={register}
            >
              전체 동의
            </Checkbox>
            <Flex justify="space-between" align="center">
              <Checkbox
                isChecked={checkedItems[0]}
                onChange={(e) => {
                  setCheckedItems([e.target.checked, checkedItems[1]]);
                }}
              >
                와이디커넥트샵 이용약관 동의
              </Checkbox>
              <ModalButton title="와이디커넥트샵 이용약관" content={agreeTos} />
            </Flex>
            <Flex justify="space-between" align="center">
              <Checkbox
                isChecked={checkedItems[1]}
                onChange={(e) => {
                  setCheckedItems([checkedItems[0], e.target.checked]);
                }}
              >
                개인정보 수집 및 이용 동의
              </Checkbox>
              <ModalButton
                title="개인정보 수집 및 이용"
                content={agreePersoanl}
              />
            </Flex>
          </Stack>
          <Box pl={2} color="red" fontSize="0.85rem">
            {errors.termsCheck?.message}
          </Box>

          {/* 회원가입 버튼 */}
          <Button
            type="submit"
            mt={5}
            mb={3}
            colorScheme="blue"
            size="md"
            isFullWidth
          >
            회원가입
          </Button>
          <Divider />

          {/* 로그인 화면 이동 버튼 */}
          <Link href="/signin">
            <Button
              mt={3}
              colorScheme="blue"
              size="md"
              variant="outline"
              isFullWidth
            >
              로그인
            </Button>
          </Link>
        </form>
      </SignLayout>
    </ChakraProvider>
  );
}
