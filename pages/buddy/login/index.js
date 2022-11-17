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
        <Center pt="6rem">
          <Image src={cultLogo} alt="" width={200}></Image>
        </Center>

        <Center pt="2rem" pb="4rem" px="2rem">
          <Text fz="xl">
            Allow <b>Fit Buddy</b> to access your class workout history on
            Cult?
          </Text>
        </Center>

        <Container>
          <TextInput
            description="Enter your phone number"
            autoComplete="tel-national"
          />
        </Container>

        <Container mt="2rem" mb="6rem">
          <Link href="/buddy/find">
            <Button fullWidth variant="white" color="dark">
              ALLOW
            </Button>
          </Link>
        </Container>

        <Center>
          <Image src={tncImage} alt="login flow" width={300}></Image>
        </Center>
      </Container>
    </div>
  );
}
