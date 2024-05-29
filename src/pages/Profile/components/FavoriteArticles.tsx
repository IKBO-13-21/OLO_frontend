import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../../index";
import { Articles } from "../../../models/response/AuthResponse";
import { Button, Card, Flex, Input } from "antd";
import { observer } from "mobx-react-lite";

const FavoriteArticles = () => {
  const { store } = useContext(Context);
  const [articles, setArticles] = useState<Articles[]>([]);

  useEffect(() => {
    store.getUserArticles();
  }, []);

  useEffect(() => {
    setArticles(store.articlesUser);
  }, [store.articlesUser]);

  const handleDelete = async (id: number) => {
    await store.deleteUserArticles(id);
    await store.getUserArticles();
  };

  return (
    <Flex
      vertical
      align={"center"}
      gap={30}
      style={{
        marginTop: 20,
      }}
    >
      <Flex vertical align={"center"} gap={25}>
        {articles.map((article) => (
          <Card key={article.id}>
            <h2>{article.id}</h2>
            <p>{article.header}</p>
            <Button
              style={{
                marginTop: 25,
              }}
              danger
              onClick={() => handleDelete(Number(article.id))}
            >
              Удалить
            </Button>
          </Card>
        ))}
      </Flex>
    </Flex>
  );
};

export default observer(FavoriteArticles);
