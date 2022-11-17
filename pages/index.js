import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Center, Title, Grid, Skeleton, Container } from "@mantine/core";

import commitAppImage from "../public/images/fit-commit.png";
import buddyAppImage from "../public/images/fit-buddy.png";
import blankAppImage from "../public/images/blank-app.png";

export default function Home() {
  const child = <Skeleton height={140} radius="md" animate={false} />;

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container my="md" bg="black">
        <Center mb="2rem">
          <Title order={1}>Fitness Apps</Title>
        </Center>

        <Grid>
          <Grid.Col span={4}>
            <Link href={"/commit/login"}>
              <Image src={commitAppImage} width={100} />
              <Title order={3}>Fit Commit</Title>
            </Link>
          </Grid.Col>
          <Grid.Col span={4}>
            <Link href={"/buddy/login"}>
              <Image src={buddyAppImage} width={100} />
              <Title td="none" order={3}>
                Fit Buddy
              </Title>
            </Link>
          </Grid.Col>
          <Grid.Col span={4}>
            <Link href={"/commit/login"}>
              <Image src={blankAppImage} width={100} />
              <Title style={{ textDecoration: "none" }} order={3}>
                Nice App
              </Title>
            </Link>
          </Grid.Col>
          <Grid.Col span={4}>
            <Link href={"/commit/login"}>
              <Image src={blankAppImage} width={100} />
              <Title td="none" order={3}>
                Great App
              </Title>
            </Link>
          </Grid.Col>
          <Grid.Col span={4}>
            <Link href={"/commit/login"}>
              <Image src={blankAppImage} width={100} />
              <Title td="none" order={3}>
                Fun App
              </Title>
            </Link>
          </Grid.Col>
          <Grid.Col span={4}>
            <Link href={"/commit/login"}>
              <Image src={blankAppImage} width={100} />
              <Title td="none" order={3}>
                Crazy App
              </Title>
            </Link>
          </Grid.Col>
          {/* <Grid.Col span={4}>
            <Link  href={"/login"}>
              <Image src={createAppImage} width={100} />
              <Title style={{textDecoration:'none'}} order={3}>Create App</Title>
            </Link>
          </Grid.Col> */}
          {/* <Grid.Col xs={4}>{child}</Grid.Col> */}
          {/* <Grid.Col xs={4}>{child}</Grid.Col> */}
          {/* <Grid.Col xs={4}>{child}</Grid.Col> */}
        </Grid>
      </Container>
    </div>
  );
}
