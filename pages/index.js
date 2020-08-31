import Layout from "../components/Layout";
import HeadBase from "../components/HeadBase";
import Index_Campaign from "../pages_ext/Index_Campaign";
import Index_Banner from "../pages_ext/Index_Banner";
import Index_Main from "../pages_ext/Index_Main";
import Index_EatFuture from "../pages_ext/Index_EatFuture";
import Index_Strategy from "../pages_ext/Index_Strategy";
import Index_Demands from "../pages_ext/Index_Demands";
import Index_Values from "../pages_ext/Index_Values";
import { useRouter } from "next/router";

const head = {
  title: "Animal Rebellion Česká republika",
  description:
    "Hnutí s cílem zabránit nejhorším dopadům klimatické krize, zastavit hromadné vymírání druhů a předejít rozpadu společnosti",
  image: require("../public/head/index.jpg"),
};

export default () => {
  const router = useRouter()
  
  return (
    <Layout>
      <HeadBase head={head} path={router.pathname} />
      <Index_Campaign />
      <Index_Banner />
      <Index_Main />
      <Index_EatFuture />
      <Index_Demands />
      <Index_Values />
      <Index_Strategy />
    </Layout>
  );
};
