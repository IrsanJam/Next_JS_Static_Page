import React, { useEffect } from "react";
import { useRouter } from "next/router";

interface typeQuery {
  id?: string;
}

const DetailProduk = () => {
  const router = useRouter();
  const { id }: typeQuery = router.query;

  useEffect(() => {
    if (!id) return;
    id;
  }, [router]);

  return <div> DetailProduk, produk ini mempunyai id === {id}</div>;
};

export default DetailProduk;
