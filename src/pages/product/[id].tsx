import React from "react";
import MetaHead from "../metahead";
import Image from "next/image";

const DetailProduct = ({ data }: any) => {
  return (
    <>
      <MetaHead title={data.title} description={data.description} image={`${process.env.NEXT_PUBLIC_HOST_NAME}/image/adidas-svgrepo-com.svg`} />
      <div className="flex gap-5 shadow-md p-5 w-[80%]">
        <div className="flex gap-7 md:gap-10 flex-wrap md:flex-nowrap w-full">
          <Image src={data.image} alt={data.title} className="w-[500] md:w-[50%] md:h-[90%]" width={1000} height={1000} />
          <div className="flex-col">
            <h1 className="font-bold text-xl md:text-3xl md:my-4 my-2">{data.title}</h1>
            <p className="text-xs md:text-base md:my-5 my-2 text-justify opacity-80">{data.description}</p>
            <p className="font-bold text-3xl">${data.price}</p>
            <button className="px-5 py-2 hover:opacity-90 bg-primary text-white my-3 font-semibold rounded-sm">Buy Product</button>
          </div>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async (context: any) => {
  const { query } = context;
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST_API}/products/${query.id}`);
  const data = await res.json();
  return {
    props: { data },
  };
};

export default DetailProduct;
