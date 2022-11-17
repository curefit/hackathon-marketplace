import Head from "next/head";
import { Flex, Center, Container, Text, Paper } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons";
import { useRouter } from "next/router";
import Link from "next/link";
import { makeCommitment } from "../../../api/commit";

export default function Home() {
  const router = useRouter();
  const { id, initial, target,amount } = router.query;

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

        <Paper
          shadow="sm"
          m="lg"
          p="md"
          bg="teal"
          onClick={() => {
            makeCommitment({
              commitId: id,
              initial: initial,
              target: target,
              amount: amount,
            }).then(() => {
              router.push("/commit/confirm");
            });
          }}
        >
          <Flex>
            <Text fw="bold" fz="lg">
              I commit Rs. {amount} towards working out {target} times this week.
            </Text>
            <Center>
              <IconChevronRight />
            </Center>
          </Flex>
        </Paper>
      </Container>
    </div>
  );
}
