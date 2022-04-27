import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Button,
  Flex,
  Heading,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Box,
} from "@chakra-ui/react";
import Pagination from "@material-ui/lab/Pagination";
import AppLayout from "../components/Layout";
import InquireList from "../components/InquireList";

const Inquire = ({ posts }) => {
  const [inquireTotal, setInquireTotal] = useState();
  const [currentPage, setCurrentPage] = useState(0);
  const [currentInquires, setCurrentInquires] = useState([]);

  useEffect(() => {
    setCurrentInquires(posts);

    fetch(process.env.LocalHost + "/inquire", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        nowPage: 0,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setCurrentInquires(res);
        setInquireTotal(Math.ceil(res[0].id / 10));
      });
  }, []);

  const handleChangepage = (e, newPage) => {
    setCurrentPage(newPage);

    fetch(process.env.LocalHost + "/inquire", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        nowPage: newPage * 10 - 10,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setCurrentInquires(res);
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
        <Table mb="1rem" size="sm" borderTop="1px" borderColor="gray.400">
          <Thead>
            <Tr>
              <Th w="60px" textAlign="center" bgColor="gray.200">
                번호
              </Th>
              <Th textAlign="center" bgColor="gray.200">
                제목
              </Th>
              <Th w="120px" textAlign="center" bgColor="gray.200">
                작성자
              </Th>
              <Th w="120px" textAlign="center" bgColor="gray.200">
                작성일시
              </Th>
              <Th w="120px" textAlign="center" bgColor="gray.200">
                답변
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {currentInquires?.length ? (
              currentInquires.map((inquire) => (
                <InquireList key={inquire.id} inquire={inquire} />
              ))
            ) : (
              <Tr h="100px">
                <Td colSpan="5" textAlign="center">
                  문의글이 없습니다.
                </Td>
              </Tr>
            )}
          </Tbody>
        </Table>
        <Box>
          <Pagination
            component="div"
            // style={PagingNumStyle}
            count={inquireTotal}
            onChange={handleChangepage}
            defaultPage={1}
            page={currentPage}
          />
        </Box>
        <Flex mt="2rem" justifyContent="flex-end">
          {window.sessionStorage.getItem("email") != null ? (
            <Link href="/inquireWrite">
              <Button w="100px" size="sm" colorScheme="blue">
                글쓰기
              </Button>
            </Link>
          ) : (
            <Button
              w="100px"
              size="sm"
              colorScheme="blue"
              onClick={(e) => alert("로그인해주세요")}
            >
              글쓰기
            </Button>
          )}
        </Flex>
      </Box>
    </AppLayout>
  );
};

export async function getServerSideProps() {
  const res = await fetch(process.env.LocalHost + "/inquire", {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      nowPage: 0,
    }),
  });
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

export default Inquire;
