import Head from "next/head";

export default function MainLayout({ children }) {
  return (
    <>
      <Head>
        <title>Prototype NO - Moving Forward</title>

        {/* Favicon */}
        <link rel="icon" href="/web-icon.png" />

        {/* For Apple Ecosystem */}
        <link rel="apple-touch-icon" href="/favicon.png" />
      </Head>

      <div className="min-h-screen bg-gray-100 text-black">{children}</div>
    </>
  );
}
