import { useRef, useState } from "react";

import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { Center, Container, TextInput, Button, Text } from "@mantine/core";

import cultLogo from "../../../public/images/logo.png";
import tncImage from "../../../public/images/tnc.jpg";

import { fetchUserId } from "../../../api";
import { getCommits } from "../../../api/commit";

export default function Home() {
  const router = useRouter();
  const input = useRef();
  const [buttonEnabled, setButtonEnabled] = useState(false);

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
            Allow <b>Fit Commit</b> to access your class workout history on
            Cult?
          </Text>
        </Center>

        <Container>
          <TextInput
            description="Enter your phone number"
            autoComplete="tel-national"
            ref={input}
            error={input.current?.value.length > 10}
            onChange={(e) => {
              const val = e.target.value;
              setButtonEnabled(val.length === 10);
            }}
          />
        </Container>

        <Container mt="2rem" mb="6rem">
          <Button
            fullWidth
            variant="white"
            color="dark"
            disabled={!buttonEnabled}
            onClick={() => {
              // getCommits();
              fetchUserId({
                appId: "commit",
                phone: input.current.value,
              }).then((profile) => {
                window.localStorage.setItem("user", JSON.stringify(profile));
                router.push("/commit/list");
              });
            }}
          >
            ALLOW
          </Button>
        </Container>

        <Center>
          <Image src={tncImage} alt="login flow" width={300}></Image>
        </Center>
      </Container>
    </div>
  );
}
