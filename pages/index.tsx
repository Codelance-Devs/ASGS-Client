import PublicLayout from "@/layouts/PublicLayout";
import Intro from "@/components/landing/Intro";
import Head from "next/head";
import { CartProvider } from "@/context/cart_context";

export default function Home() {
  return (
    <>
      <Head>
        <title>ASGS Supermarket</title>
        <meta name="description" content="More than just a grocery store." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PublicLayout>
        <Intro />
      </PublicLayout>
    </>
  );
}
