import React from "react";
import Link from "next/link";
import Router from "next/router";
import moment from "moment";
import { Td, Tr, Box } from "@chakra-ui/react";
import { useCookies } from "react-cookie";

export default function InquireList({ inquire }) {
  // 작성일
  const today = moment().format("YYYY-MM-DD");
  const createdAt =
    today === moment(inquire.create_datetime).format("YYYY-MM-DD")
      ? moment(inquire.create_datetime).format("HH:mm")
      : moment(inquire.create_datetime).format("YYYY-MM-DD");

  // 답변
  const answerStatus = inquire.answer_status ? "답변완료" : "미확인";
  const [cookies, setCookie, removeCookie] = useCookies(["listId"]);

  const hClick = (e, d) => {
    window.sessionStorage.setItem("listId", d);
    setCookie("listId", d);
    Router.push({ pathname: "/:[id]" }, "/inquire");
  };

  return (
    // <Link
    //   href=""
    //   //   href={{
    //   //     pathname: "/[id]",
    //   //     query: { userid: inquire.id },
    //   //   }}
    //   //   as="inquire"
    // >
    <Tr cursor="pointer" onClick={(e) => hClick(e, inquire.id)}>
      <Td textAlign="center">{inquire.id}</Td>
      <Td>{inquire.title}</Td>
      <Td textAlign="center">{inquire.name}</Td>
      <Td textAlign="center">{createdAt}</Td>
      <Td textAlign="center">{answerStatus}</Td>
    </Tr>
    // </Link>
  );
}
