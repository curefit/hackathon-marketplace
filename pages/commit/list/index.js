import Head from "next/head";
import {
  Flex,
  Center,
  Container,
  Text,
  Paper,
  Avatar,
  Divider,
} from "@mantine/core";
import { IconChevronRight } from "@tabler/icons";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getSavedUser, getUserActivity } from "../../../api";
import { getCommits } from "../../../api/commit";
import { commitsMap } from "../../../api/data";

export default function Home() {
  const [user, setUser] = useState();
  const [maxActivity, setMaxActivity] = useState();
  const [commits, setCommits] = useState();

  useEffect(() => {
    const u = getSavedUser();
    setUser(u);

    getUserActivity(u.id).then((activity) => {
      setMaxActivity(activity.maxActivity);
      console.log("user activity", activity);
    });

    getCommits().then((data) => {
      console.log("getCommits", data);
      setCommits(data);
    });
  }, []);

  return (
    <div style={{ backgroundColor: "black" }}>
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
                  <Text fz="s">{user.email}</Text>
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
              const { commitId } = commit;
              const { amount,getTarget, getMessage } = commitsMap[commitId];
              const target = getTarget(maxActivity);
              const message = getMessage(target);

              return (
                <Link
                  key={commitId}
                  href={`/commit/pay?id=${commitId}&initial=${maxActivity}&target=${target}&amount=${amount}`}
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
                    {commit.users?.length ?<Divider mt="md" />:null}
                    {commit.users?.length ? (
                      <Flex direction="column">
                        <Flex my="md">
                          {commit.users.map((user) => {
                            return <Avatar src={user.profilePictureUrl} />;
                          })}
                        </Flex>
                        <Text>
                          These members have already committed making total prize
                          pool as Rs. {amount * commit.users.length}.
                        </Text>
                      </Flex>
                    ) : null}
                  </Paper>
                </Link>
              );
            })
          : null}
      </Container>
    </div>
  );
}
