import { Text } from "@mantine/core";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.location =
      "curefit://webview?uri=https://curefit.github.io/hackathon-marketplace&title=Cult+Fitness+Apps";
  }, []);

  return <Text>Redirecting to Cult app...</Text>;
}
