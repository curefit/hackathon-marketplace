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
import { getUserActivity } from "../../../api";
import { getCommits } from "../../../api/commit";
import { commitsMap } from "../../../api/data";

function calculateTargets(current) {
  return [current + 1, current + 2, current + 3];
}
export default function Home() {
  const [user, setUser] = useState();
  const [maxActivity, setMaxActivity] = useState();
  const [commits, setCommits] = useState();

  useEffect(() => {
    const u = JSON.parse(window.localStorage.getItem("user"));
    setUser(u);

    getUserActivity(u.id).then((activity) => {
      setMaxActivity(activity.maxActivity);
      console.log("user activity", activity);
    });

    getCommits().then((c) => {
      setCommits([{ id: 1 }, { id: 2 }, { id: 3 }]);
    });
  }, []);

  return (
    <div style={{ backgroundColor: "black", height: 1000 }}>
      <Head>
        <title>Login with Cult</title>
      </Head>

      <Container>
        {user ? (
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
                  <Text fz="xl">{user.email}</Text>
                </Flex>
              </Flex>
            </Flex>
          </Paper>
        ) : null}

        <Center pt="3rem" pb="1rem" px="2rem">
          <Text fz="xl">
            On average, you did <b>{maxActivity} workouts</b> per week recently.
            Push yourself further by making a commitment.
          </Text>
        </Center>

        <Center py="1rem" px="2rem">
          <Text fz="xl">
            If you succeed, you can earn upto double your money back!
          </Text>
        </Center>

        {commits
          ? commits.map((commit) => {
              const { id } = commit;
              const { getTarget, getText } = commitsMap[id];
              const target = getTarget(maxActivity);
              const message = getMessage(target);

              return (
                <Link
                  href={`/commit/pay?id=${id}&initial=${maxActivity}&target=${target}`}
                >
                  <Paper shadow="sm" m="lg" p="md">
                    <Flex>
                      <Text fw="bold" fz="lg">
                        {message}
                      </Text>
                      <Center>
                        <IconChevronRight />
                      </Center>
                    </Flex>
                  </Paper>
                </Link>
              );
            })
          : null}

        <Link href="/commit/pay?id=1&initial=1&target=3">
          <Paper shadow="sm" m="lg" p="md">
            <Flex>
              <Text fw="bold" fz="lg">
                I want to do slightly better. I commit to doing{" "}
                {calculateTargets(maxActivity)[0]} classes this week.
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
                I'll push myself very hard. I commit to doing{" "}
                {calculateTargets(maxActivity)[1]} classes this week.
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
                I want to go beast mode. I commit to doing{" "}
                {calculateTargets(maxActivity)[2]} classes this week.
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
