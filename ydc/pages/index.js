import React, { Component } from "react";
import Layout from "../components/Layout";
import Main from "../components/Main";
import ShopList from "../components/ShopList";
import { ChakraProvider } from "@chakra-ui/react";

export default function Home() {
  const linkStyle = {
    marginRight: "1rem",
  };

  return (
    <ChakraProvider>
      <Layout>
        <style jsx>{`
          .IndexBody {
            margin: 0 auto;
            width: 1020px;
          }
        `}</style>
        <div className="IndexBody">
          <Main />
          <ShopList />
        </div>
      </Layout>
    </ChakraProvider>
  );
}
