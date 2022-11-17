import Head from "next/head";
import Image from "next/image";
import {
  Slider,
  Flex,
  Grid,
  Center,
  Skeleton,
  Container,
  TextInput,
  Button,
  NativeSelect,
  Text,
  Paper,
  Avatar,
} from "@mantine/core";
import { IconChevronRight } from "@tabler/icons";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getCommits } from "../../api/commit";

export default function Home() {
  const [commits, setCommits] = useState();
  useEffect(() => {
    getCommits().then((data) => {
      setCommits(data);
    });
  }, []);

  return (
    <div style={{ backgroundColor: "black", height: 1000 }}>
      <Head>
        <title>Login with Cult</title>
      </Head>

      <Container>
        {/* {user ? (
          <Paper mt="xl" p="xl">
            <Flex>
              <Flex>
                <Avatar size="xl" radius="xl" src={user.profilePictureUrl} />
              </Flex>
              <Flex ml="xl" direction="column">
                <Flex>
                  <Text fw="bold" fz="xl">
                    {user.firstName} {user.lastName}
                  </Text>
                </Flex>
                <Flex>
                  <Text fz="xl">Cult HSR 19th Main</Text>
                </Flex>
              </Flex>
            </Flex>
          </Paper>
        ) : null} */}

        {commits
          ? commits.map((commit) => {
              return (
                <Center>
                  <Text>{JSON.stringify(commit)}</Text>
                </Center>
              );
            })
          : null}

        <Center pt="3rem" pb="1rem" px="2rem">
          <Text fz="xl">
            On average, you did <b>3 workouts</b> per week recently. Push
            yourself further by making a commitment.
          </Text>
        </Center>

        <Center py="1rem" px="2rem">
          <Text fz="xl">
            If you succeed, you can earn upto double your money back!
          </Text>
        </Center>

        <Link href="/commit/pay?id=1&initial=1&target=3">
          <Paper shadow="sm" m="lg" p="md">
            <Flex>
              <Text fw="bold" fz="lg">
                I want to do slightly better. I commit to doing 3 classes this
                week.
              </Text>
              <Center>
                <IconChevronRight />
              </Center>
            </Flex>
          </Paper>
        </Link>

        <Link href="/commit/pay?id=2&initial=1&target=5">
          <Paper shadow="sm" m="lg" p="md">
            <Flex>
              <Text fw="bold" fz="lg">
                I'll push myself very hard. I commit to doing 5 classes this
                week.
              </Text>
              <Center>
                <IconChevronRight />
              </Center>
            </Flex>
          </Paper>
        </Link>

        <Link href="/commit/pay?id=3&initial=1&target=7">
          <Paper shadow="sm" m="lg" p="md">
            <Flex>
              <Text fw="bold" fz="lg">
                I want to go beast mode. I commit to doing 7 classes this week.
              </Text>
              <Center>
                <IconChevronRight />
              </Center>
            </Flex>
          </Paper>
        </Link>
      </Container>
    </div>
  );
}
