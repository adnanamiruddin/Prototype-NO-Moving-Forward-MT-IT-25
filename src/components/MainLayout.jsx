import Head from "next/head";

export default function MainLayout({ children }) {
  return (
    <>
      <Head>
        <title>Prototype NO - Moving Forward</title>
      </Head>

      <div className="min-h-screen bg-gray-100 text-black">{children}</div>
    </>
  );
}
