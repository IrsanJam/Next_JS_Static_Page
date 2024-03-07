import React from "react";
import Head from "next/head";

interface seoType {
  title: string;
  description: string;
  image: string;
}

const MetaHead = (props: seoType) => {
  const { title, description, image = "https://localhost:3000/image/adidas-svgrepo-com.svg" } = props;
  return (
    <Head>
      <title>{title} - Irsan</title>
      <meta name="description" content="Ini adalah halaman about yang sangat bagus"></meta>
      <meta property="og:title" content={description} />
      <meta property="og:description" content="Get from SEO newbie to SEO pro in 8 simple steps." />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="article" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@nytimesbits" />
      <meta name="twitter:creator" content="@nickbilton" />
    </Head>
  );
};

export default MetaHead;
