import Head from 'next/head'
import Landing from '@/components/landing/Landing'

export default function Home() {
  return (
    <>
      <Head>
        <title>ASGS Supermarket</title>
        <meta name="description" content="More than just a grocery store." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Landing/>
      </main>
    </>
  )
}
