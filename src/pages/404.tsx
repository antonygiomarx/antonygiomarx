import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Custom404() {
  const { push } = useRouter();

  useEffect(() => {
    const ac = new AbortController();
    push("/");

    return () => {
      ac.abort();
    };
  }, []);
  return (
    <>
      <Head>
        <title>Not Found - Redirecting</title>
      </Head>
      <div className="container w-screen h-screen flex justify-center items-center">
        <div className=" flex justify-center items-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
        </div>
      </div>
    </>
  );
}
