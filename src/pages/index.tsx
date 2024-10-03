import Banner from "@/components/Banner";
import Products from "@/components/Products";
import { ProductProps } from "../../type";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setAllProducts } from "@/store/nextSlice";
// import axios from "axios";

interface Props {
  productData: ProductProps;
}

// const [iserror , setIsError] = useState("");

export default function Home({ productData }: Props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setAllProducts({ allProducts: productData }));
  }, [productData]);
  return (
    <main>
      {/* {iserror != "" && <h2>{iserror}</h2>}  */}
      <div className="max-w-screen-2xl mx-auto">
        <Banner />
        <div className="relative md:-mt020 lgl:-mt-32 xl:-mt-60 z-20 mb-10">
          <Products productData={productData} />
        </div>
      </div>
    </main>
  );
}

// SSR for data fetching
export const getServerSideProps = async () => {
  const res = await fetch("https://fakestoreapiserver.reactbd.com/tech");
  const productData = await res.json();
  return { props: { productData } };
};



// {USing Axios}
// export const getServerSideProps = axios.get("https://fakestoreapiserver.reactbd.com/tech")
// .then((res) =>  productData (res.data))
// .catch((error) => setIsError(error.message))
