import Head from "next/head";
import {
  Center,
  Container,
  Button,
  Text,
  Paper,
  Avatar,
  SimpleGrid,
  ThemeIcon,
  Flex,
} from "@mantine/core";

import { IconCircle, IconCircleCheck, IconCircleX } from "@tabler/icons";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getSavedUser } from "../../../api";
import { getAllCommits } from "../../../api/commit";

export default function Home() {
  const [user, setUser] = useState();
  const [buddy, setBuddy] = useState();

  useEffect(() => {
    const u = getSavedUser();
    setUser(u);

    getAllCommits().then((data) => {
      const commits = data.filter((commit) => commit.profile.id !== u.id);
      const randomIndex = Math.floor(Math.random() * commits.length);
      const randomBuddy = commits[randomIndex].profile;
      console.log(randomBuddy);
      setBuddy(randomBuddy);
    });
  }, []);

  if (!buddy) return null;

  return (
    <div>
      <Head>
        <title>Show my buddy - Fit Buddy</title>
      </Head>

      <Container style={{ backgroundColor: "black", height: 1000 }}>
        <Paper mt="xl" p="xl">
          <Flex>
            <Flex>
              <Avatar size="xl" radius="xl" src={buddy.profilePictureUrl} />
            </Flex>
            <Flex ml="xl" direction="column">
              <Flex>
                <Text fw="bold" fz="xl">
                  Your new buddy!
                </Text>
              </Flex>
              <Flex>
                <Text fz="xl">
                  {buddy.firstName} {buddy.lastName}
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Paper>

        <SimpleGrid mt="2rem" cols={2}>
          <Flex direction="column">
            <Center>
              <Avatar size="xl" radius="xl" src={user.profilePictureUrl} />
            </Center>
            <Flex my="md">
              <ThemeIcon color="green" radius="xl">
                <IconCircleCheck />
              </ThemeIcon>
              <Text ml="xl">Monday</Text>
            </Flex>
            <Flex my="md">
              <ThemeIcon color="red" radius="xl">
                <IconCircleX />
              </ThemeIcon>
              <Text ml="xl">Tuesday</Text>
            </Flex>
            <Flex my="md">
              <ThemeIcon color="red" radius="xl">
                <IconCircleX />
              </ThemeIcon>
              <Text ml="xl">Wednesday</Text>
            </Flex>
            <Flex my="md">
              <ThemeIcon color="red" radius="xl">
                <IconCircleX />
              </ThemeIcon>
              <Text ml="xl">Thursday</Text>
            </Flex>
            <Flex my="md">
              <ThemeIcon color="green" radius="xl">
                <IconCircleCheck />
              </ThemeIcon>
              <Text ml="xl">Friday</Text>
            </Flex>
            <Flex my="md">
              <ThemeIcon color="gray" radius="xl">
                <IconCircle />
              </ThemeIcon>
              <Text ml="xl">Saturday</Text>
            </Flex>
            <Flex my="md">
              <ThemeIcon color="gray" radius="xl">
                <IconCircle />
              </ThemeIcon>
              <Text ml="xl">Sunday</Text>
            </Flex>
          </Flex>
          <Flex direction="column">
            <Center>
              <Avatar size="xl" radius="xl" src={buddy.profilePictureUrl} />
            </Center>
            <Flex my="md">
              <ThemeIcon color="green" radius="xl">
                <IconCircleCheck />
              </ThemeIcon>
              <Text ml="xl">Monday</Text>
            </Flex>
            <Flex my="md">
              <ThemeIcon color="green" radius="xl">
                <IconCircleCheck />
              </ThemeIcon>
              <Text ml="xl">Tuesday</Text>
            </Flex>
            <Flex my="md">
              <ThemeIcon color="green" radius="xl">
                <IconCircleCheck />
              </ThemeIcon>
              <Text ml="xl">Wednesday</Text>
            </Flex>
            <Flex my="md">
              <ThemeIcon color="green" radius="xl">
                <IconCircleCheck />
              </ThemeIcon>
              <Text ml="xl">Thursday</Text>
            </Flex>
            <Flex my="md">
              <ThemeIcon color="red" radius="xl">
                <IconCircleX />
              </ThemeIcon>
              <Text ml="xl">Friday</Text>
            </Flex>
            <Flex my="md">
              <ThemeIcon color="gray" radius="xl">
                <IconCircle />
              </ThemeIcon>
              <Text ml="xl">Saturday</Text>
            </Flex>
            <Flex my="md">
              <ThemeIcon color="gray" radius="xl">
                <IconCircle />
              </ThemeIcon>
              <Text ml="xl">Sunday</Text>
            </Flex>
          </Flex>
        </SimpleGrid>

        <Container mt="2rem" mb="2rem">
          <Link href="/">
            <Button fullWidth color="green">
              BOOK NEXT CLASS
            </Button>
          </Link>
        </Container>

        <Container mt="2rem" mb="6rem">
          <Link href="/buddy/find">
            <Button fullWidth variant="gray" color="gray">
              CHANGE BUDDY
            </Button>
          </Link>
        </Container>
      </Container>
    </div>
  );
}
