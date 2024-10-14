import "@/src/styles/global.css"
import { AppProps } from "next/app";
import { ConfigProvider } from 'antd';
import Navbar from "../components/Navbar";
import Header from "../components/Header";

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <ConfigProvider>
      <Header/>
      <Navbar />
    <Component {...pageProps} />
    </ConfigProvider>
  );
}