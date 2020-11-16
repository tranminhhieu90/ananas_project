import React from "react";

import CartFix from "../component/cartFix";
import ShareFix from "../component/shareFix";
import AdCollection from "../component/adCollection";
import HomeBuy from "../component/homeBuy";
import BestSeller from "../component/bestSeller";

function Home() {
  return (
    <>
      <ShareFix />
      <AdCollection />
      <HomeBuy />
      <BestSeller />
    </>
  );
}

export default Home;
