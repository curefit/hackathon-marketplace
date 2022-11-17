import Head from "next/head";
import Image from "next/image";
import {
  Slider,
  Grid,
  Center,
  Skeleton,
  Container,
  TextInput,
  Button,
  NativeSelect,
  Text,
  Loader,
} from "@mantine/core";

import cultLogo from "../../../public/images/logo.png";
import tncImage from "../../../public/images/tnc.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <div style={{ backgroundColor: "black", height: 1000 }}>
      <Head>
        <title>Login with Cult</title>
      </Head>

      <Container>
        <Link href="/buddy/show">
          <Center pt="20rem">
            <Loader size={100} />
          </Center>
        </Link>

        <Center pt="2rem" pb="4rem" px="2rem">
          <Text fz="xl">Finding your fitness buddy...</Text>
        </Center>
      </Container>
    </div>
  );
}
