import React, { useState, useCallback, useMemo } from "react";
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
  Button,
  Divider,
} from "@chakra-ui/react";
import { EmailIcon, LockIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import SignLayout from "../components/SignLayout";
import { GoogleLogin } from "react-google-login";
import KakaoLogin from "react-kakao-login";

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
  const [showPassword, setShowPassword] = useState(false);

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
    })
  );

  const resolver = useYupValidationResolver(validationSchema);
  const { handleSubmit, register, errors } = useForm({ resolver });

  const handleFormSubmit = (data) => {
    alert("서버와 연결되어있지않습니다.");
    // fetch(process.env.LocalHost + "/signin", {
    //   method: "post",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     email: data.email,
    //     password: data.password,
    //   }),
    // })
    //   .then((res) => res.json()) // => JSON body 를 JS로 변환
    //   .then((res) => {
    //     if (res[0] != null) {
    //       if (res[0].email == data.email && res[0].password == data.password) {
    //         alert(res[0].name + "님 어서오세요");
    //         window.sessionStorage.setItem("email", res[0].email);
    //         window.sessionStorage.setItem("name", res[0].name);
    //         location.href = "/";
    //       } else {
    //         alert("로그인에 실패하였습니다.\n정보를 불러올 수 없습니다.");
    //       }
    //     } else {
    //       alert("로그인실패\n아이디와 비밀번호를 확인해주세요");
    //     }
    //   });
  };

  const responseGoogle = (response) => {
    // console.log(response);
    // console.log(response.googleId);
    // console.log(response.profileObj.name);
    alert(response.profileObj.name + " 님으로 로그인 성공 \n서버와 연결이 되어있지않습니다.");
  };

  const responseKakao = (response) => {
    // console.log(response);
    // console.log(response.profile.id);
    // console.log(response.profile.properties.nickname);
    alert(response.profile.properties.nickname + "님으로 로그인 성공 \n서버와 연결이 되어있지않습니다.");
  };

  const responseFail = (err) => {
    console.log(err);
  };

  return (
    <ChakraProvider>
      {/* <head>
        <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
      </head> */}
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
              type="text"
              placeholder="이메일"
              ref={register}
            />
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
              type={showPassword ? "text" : "password"}
              placeholder="비밀번호"
              ref={register}
              autoComplete="off"
            />
            <InputRightElement
              children={
                showPassword ? (
                  <ViewIcon color="gray.400" />
                ) : (
                  <ViewOffIcon color="gray.400" />
                )
              }
              onClick={(e) => {
                setShowPassword(!showPassword);
              }}
              cursor="pointer"
            />
          </InputGroup>
          <Box pl={2} color="red" fontSize="0.85rem">
            {errors.password?.message}
          </Box>

          {/* 로그인 버튼 */}
          <Button
            type="submit"
            mt={5}
            mb={3}
            colorScheme="blue"
            size="md"
            isFullWidth
          >
            로그인
          </Button>
          <Divider />

          <GoogleLogin
            clientId="728145388139-7efv8sbus6ei2ga14m9009c46opu8eec.apps.googleusercontent.com"
            buttonText="구글으로 로그인하기"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />

          <KakaoLogin
            token="bf9cfd474116c62e93d93544758dda6e"
            buttonText="Kakao"
            onSuccess={responseKakao}
            onFailure={responseFail}
            getProfile="true"
          />

          {/* 회원가입 화면 이동 버튼 */}
          <Link href="/signup">
            <Button
              mt={3}
              colorScheme="blue"
              size="md"
              variant="outline"
              isFullWidth
            >
              회원가입
            </Button>
          </Link>

          <Link href="/accountIdFind">
            <Box
              color="#0073e9"
              cursor="pointer"
              mt="3"
              float="right"
              fontSize="15px"
            >
              아이디(이메일)/비밀번호 찾기 ＞
            </Box>
          </Link>
        </form>
      </SignLayout>
    </ChakraProvider>
  );
}
