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

export default function Home() {
  return (
    <div style={{ backgroundColor: "black", height: 1000 }}>
      <Head>
        <title>Show my buddy - Fit Buddy</title>
      </Head>

      <Container>
        <Paper mt="xl" p="xl">
          <Flex>
            <Flex>
              <Avatar size="xl" radius="xl" />
            </Flex>
            <Flex ml="xl" direction="column">
              <Flex>
                <Text fw="bold" fz="xl">
                  John Appleseed
                </Text>
              </Flex>
              <Flex>
                <Text fz="xl">Cult HSR 19th Main</Text>
              </Flex>
            </Flex>
          </Flex>
        </Paper>

        <SimpleGrid mt="2rem" cols={2}>
          <Flex direction="column">
            <Center>
              <Avatar size="xl" radius="xl" />
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
              <Avatar size="xl" radius="xl" />
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
          <Link href="/buddy/find">
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
