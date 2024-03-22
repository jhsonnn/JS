"use client";

import useQueryGetProducts from "@/src/react-query/queries/useQuery.getProducts";

function Products({ orderBy }: { orderBy: "abc" | "popular" }) {
  const { isLoading, data: products } = useQueryGetProducts({ orderBy });

  return isLoading
    ? "로딩중..."
    : products.map((product: any) => (
        <div key={product.id}>{product.name}</div>
      ));
}

export default Products;
