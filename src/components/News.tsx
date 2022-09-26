import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Image, Text } from "@mantine/core";

function News() {
  const [articles, setArticles] = useState<string[]>([]);

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=tr&apiKey=500fc5f9f6d44a728e4e5ee15d5bef66"
      );
      console.log(response);
      setArticles(response.data.articles);
    };
    getArticles();
  }, []);
  return (
    <div>
      <Card
        shadow="sm"
        p="xl"
        component="a"
      >
        <Card.Section>
          <Image
            src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=8"
            height={160}
            alt="No way!"
          />
        </Card.Section>

        <Text weight={500} size="lg" mt="md">
          You&apos;ve won a million dollars in cash!
        </Text>

        <Text mt="xs" color="dimmed" size="sm">
          Please click anywhere on this card to claim your reward, this is not a
          fraud, trust us
        </Text>
      </Card>
    </div>
  );
}

export default News;
