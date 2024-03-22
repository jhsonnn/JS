"use client";

import Page from "@/src/components/Page";
import useQueryGetProducts from "@/src/react-query/queries/useQuery.getProducts";

function HomePage() {
  const {
    data: products,
    refetch,
    isFetching,
  } = useQueryGetProducts({ orderBy: "abc" });

  return (
    <Page title='홈'>
      <section className='grid gap-y-8'>
        <button className='button' onClick={() => refetch()}>
          새로고침
        </button>

        <div className='bg-red-50 h-[400px]'>
          이곳은 배너 영역~ 쇼핑몰 배너 상상해주세요.
        </div>

        <div>
          {isFetching
            ? "로딩중..."
            : products
            ? products.map((product: any) => (
                <div key={product.id}>{product.name}</div>
              ))
            : "no products"}
        </div>
      </section>
    </Page>
  );

  return <div>...</div>;
}

export default HomePage;
