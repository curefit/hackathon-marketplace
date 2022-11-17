import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Center, Title, Grid, Space,Skeleton, Container, Flex } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons";

import { appsMap } from "../api/data";

export default function Home() {
  const child = <Skeleton height={140} radius="md" animate={false} />;

  return (
    <div>
      <Head>
        <title>Cult Fitness Apps</title>
        <meta name="description" content="Explore a collection of apps built on top of your workout data." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container my="md" bg="black">
        <Center mb="2rem">
          <Title order={1}>Fitness Apps</Title>
        </Center>

        <Grid>
          {appsMap.map((app) => {
            return (
              <Grid.Col span={12}>
                <Link href={app.link}>
                  <Flex justify="space-between">
                    <Flex>
                      <Image src={app.logo} width={100} />
                    </Flex>
                    <Center>
                      <Flex direction="column">
                        <Title order={3}>{app.name}</Title>
                        <Title fw="normal" order={5}>
                          {app.description}
                        </Title>
                      </Flex>
                    </Center>
                    <Space></Space>
                    <Flex>
                      <Center>
                        <IconChevronRight />
                      </Center>
                    </Flex>
                  </Flex>
                </Link>
              </Grid.Col>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}
