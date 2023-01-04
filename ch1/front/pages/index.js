import React from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>NodeBird</title>
      </Head>
      <AppLayout>
        <div>Hello, Next!</div>
      </AppLayout>
    </>
  );
};

export default Home;
