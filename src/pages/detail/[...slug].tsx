import React, { useEffect } from "react";
import { useRouter } from "next/router";

const DetailProdukList = () => {
  const router = useRouter();

  const funct = () => {
    if (router.query.slug) {
      const [nama, nomor] = router.query.slug as string[];
      return nama + " " + nomor;
    } else {
      return;
    }
  };

  return <div>DetailProdukList {funct()} </div>;
};

export default DetailProdukList;
