//import styles from "./layout.module.css";
import Head from "next/head";
//import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Meta from "./Meta";
import NProgress from "nprogress";
import Router from "next/router";

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  console.log("error");
  NProgress.done();
};

export default function Layout({ children, home }) {
  return (
    <div>
      <Meta />
      <header></header>
      <main>{children}</main>
      {/* {!home && (
        <div>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )} */}
    </div>
  );
}
