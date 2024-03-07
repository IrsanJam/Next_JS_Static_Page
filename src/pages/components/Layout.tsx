import React from "react";
import Header from "./Header";
import Footer from "./Footer";

interface childrenType {
  children: React.ReactNode;
}

const Layout = ({ children }: childrenType) => {
  return (
    <>
      <Header />
      <main className={`flex min-h-screen flex-col items-center justify-between pt-[18vh] md:pt-[25vh]`}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
