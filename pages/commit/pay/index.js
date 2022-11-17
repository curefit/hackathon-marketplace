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
} from "@mantine/core";
import { IconChevronRight } from "@tabler/icons";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  const { id, initial, target } = router.query;

  return (
    <div style={{ backgroundColor: "black", height: 1000 }}>
      <Head>
        <title>Login with Cult</title>
      </Head>

      <Container>
        <Center pt="3rem" pb="1rem" px="2rem">
          <Text fz="xl">
            Commit to doing <b>{target} workouts</b> this week by joining a
            commitment group. The prize money is divided among everyone in the
            group who is able to complete their goal!
          </Text>
        </Center>

        <Center py="1rem" px="2rem">
          <Text fz="xl">
            Typically <b>40%</b> of the people in the group end up winning twice
            the money because they workout more!
          </Text>
        </Center>

        <Link href="/commit/confirm">
          <Paper shadow="sm" m="lg" p="md" bg="teal">
            <Flex>
              <Text fw="bold" fz="lg">
                I commit Rs. 500 towards working out {target} times this week.
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
