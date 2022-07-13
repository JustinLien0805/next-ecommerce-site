import Head from "next/head";
import Header from "../components/Header";
import Slide from "../components/Slide";
import Genres from "../components/Genres";
export default function Home() {
  return (
    <div className="bg-black h-screen flex sm:px-44 px-4 flex-col overflow-scroll">
      <Head>
        <title>Next Shopping Cart</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Slide />
      <Genres />
    </div>
  );
}
