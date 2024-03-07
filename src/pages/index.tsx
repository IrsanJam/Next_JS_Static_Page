import { Inter } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import MetaHead from "./metahead";
import Image from "next/image";

interface typeProduct {
  id: string;
  title: string;
  price: string;
  description: string;
  rating: {
    rate: string;
  };
  image: string;
}

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [products, setProduct] = useState([]);
  const router = useRouter();

  const fetchData = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_HOST_API}/products`);
    const data = await response.json();
    setProduct(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className={`container min-h-screen  ${inter.className}`}>
      <MetaHead title="Home" description="Buy anything you want" image={`${process.env.NEXT_PUBLIC_HOST_NAME}`} />
      <div className="flex flex-col md:gap-5 gap-2 justify-center items-center">
        <span className="font-bold opacity-90 md:text-2xl text-lg text-center">Our Products</span>
        <h1 className="md:text-6xl text-3xl font-bold">🎉 Let's See The Best</h1>
        <span className="md:text-sm md:tracking-wide text-xs text-center mx-5 md:mx-48 opacity-75">
          AdiCorp is a company to provide high-quality products and services to our customers.
          <span className="hidden md:block ">We are committed to delivering an excellent shopping experience by offering a wide range of the latest Adidas products and friendly, responsive customer service.</span>
        </span>
        <button className="px-5 my-5 py-2 hover:opacity-85 bg-primary font-semibold text-white rounded-md" onClick={() => router.push("/")}>
          Get Started
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 px-5 gap-5">
          {products.map((value: typeProduct) => (
            <div className="border-2 border-slate-400 border-opacity-20 rounded-md flex  p-3  shadow-md gap-5" key={value.id}>
              <div className="flex-col self-center">
                <Image src={value.image} alt={value.title} width={100} height={100} />
                <span>⭐{value.rating.rate}</span>
              </div>
              <div className="flex-col p-3">
                <p className="font-semibold text-sm">{value.title}</p>
                <p className="font-bold mt-2">${value.price}</p>
                <span className="text-xs hidden md:block mt-2 text-justify">{value.description}</span>
                <span className="text-xs">
                  <Link href={`/product/${value.id}`}>
                    <span className=" text-primary underline">Detail</span>
                  </Link>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
