import Head from 'next/head'
import Landing from '@/components/landing/Landing'

export default function Home() {
  return (
    <>
      <Head>
        <title>SUpermarket</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Landing/>
      </main>
    </>
  )
}
