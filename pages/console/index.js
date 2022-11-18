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
  Loader,
  Title,
  Space,
} from "@mantine/core";
import { IconChevronRight } from "@tabler/icons";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getAllCommits } from "../../api/commit";
import { commitsMap } from "../../api/data";

export default function Home() {
  const [commits, setCommits] = useState();
  useEffect(() => {
    getAllCommits().then((data) => {
      console.log("commits", data);
      setCommits(data);
    });
  }, []);

  // refresh the API every few seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      getAllCommits().then((data) => {
        console.log("commits", data);
        setCommits(data);
      });
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  });

  return (
    <div style={{ backgroundColor: "black", height: 1000 }}>
      <Head>
        <title>Login with Cult</title>
      </Head>

      <Container p="xl">
        <Flex justify="space-between">
          <Title>Fit Commit - Live Dashboard</Title>
          <Loader />
        </Flex>

        {commits
          ? commits
              .sort((a, b) => {
                return (
                  new Date(b.createdDate).getTime() -
                  new Date(a.createdDate).getTime()
                );
              })
              .map((commit) => {
                const { commitId, target, createdDate } = commit;
                const { amount } = commitsMap[commitId];
                const relativeTime =
                  Date.now() - new Date(createdDate).getTime();

                return (
                  <Paper key={createdDate} my="lg" p="sm">
                    <Flex>
                      <Flex pr="xl">
                        <Avatar
                          size={80}
                          src={commit.profile.profilePictureUrl}
                        />
                      </Flex>

                      <Flex>
                        <Text fz={24}>
                          <Text span fw="bold" c="blue">
                            {commit.profile.firstName} {commit.profile.lastName}
                          </Text>{" "}
                          has made a commitment of Rs. {amount}.
                          <Text fz="xl">
                            They will do{" "}
                            <Text span fw="bold">
                              {target} classes
                            </Text>{" "}
                            this week.
                          </Text>
                          <Text fz="md">
                            {Math.round(relativeTime / 1000 / 60)} minutes ago
                          </Text>
                        </Text>
                      </Flex>
                    </Flex>
                  </Paper>
                );
              })
          : null}
      </Container>
    </div>
  );
}
