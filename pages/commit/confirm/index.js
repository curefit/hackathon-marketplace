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
  Box,
  ThemeIcon,
  RingProgress,
} from "@mantine/core";
import { IconCheck, IconChevronRight } from "@tabler/icons";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const { id, initial, target } = router.query;

  return (
    <div style={{ backgroundColor: "black", height: 1000 }}>
      <Head>
        <title>Login with Cult</title>
      </Head>

      <Container>
        <Center mt="3rem">
          <ThemeIcon
            radius={50}
            size={100}
            variant="gradient"
            gradient={{ from: "teal", to: "green", deg: 105 }}
          >
            <IconCheck size={80} />
          </ThemeIcon>
        </Center>

        <Center pt="1rem" pb="1rem" px="2rem">
          <Text fz="xl">
            Payment complete. You have successfully participated in the group by
            making a commitment.
          </Text>
        </Center>

        <Center pt="4rem">
          <RingProgress
            size={160}
            thickness={20}
            roundCaps
            sections={[{ value: 40, color: "green" }]}
            label={
              <Text size="xl" align="center" px="xs">
                1 / 6
              </Text>
            }
          />
        </Center>

        <Center py="1rem" px="2rem">
          <Text fz="xl">
            You have completed 1 class already this week. 5 more to go...
          </Text>
        </Center>

        <Paper shadow="sm" m="lg" p="md" bg="gray" radius="md">
          <Flex>
            <Text fz="lg">
              Till now <b>23 people</b> have participated in your group. If only
              half of them complete their commitment, then you can double your
              money by making sure you meet your commitment!
            </Text>
          </Flex>
        </Paper>
      </Container>
    </div>
  );
}
