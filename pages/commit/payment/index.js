import Head from "next/head";
import { Center, Container, Text, Loader } from "@mantine/core";

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/commit/confirm");
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <div style={{ backgroundColor: "black", height: 1000 }}>
      <Head>
        <title>Login with Cult</title>
      </Head>

      <Container>
        <Center pt="20rem">
          <Loader size={100} />
        </Center>

        <Center pt="2rem" pb="4rem" px="2rem">
          <Text fz="xl">Confirming payment...</Text>
        </Center>
      </Container>
    </div>
  );
}
