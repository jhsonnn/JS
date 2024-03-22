"use client";

import Products from "@/src/api/products/_components/Products";
import RefreshButton from "@/src/api/products/_components/RefreshButton";
import Page from "@/src/components/Page";

function ProductsListPage() {
  return (
    <Page title='전체상품'>
      <RefreshButton />
      <div className='grid grid-cols-2 gap-x-8'>
        <Products orderBy='abc' />
        <Products orderBy='popular' />
      </div>
    </Page>
  );
}

export default ProductsListPage;
