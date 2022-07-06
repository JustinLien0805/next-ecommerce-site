import React from "react";
import { useRouter } from "next/router";
const productDetail = () => {
  const router = useRouter();
  const { productId } = router.query;
  return <div>{productId}</div>;
};

export default productDetail;
