import React, {
  ChangeEventHandler,
  useContext,
  useEffect,
  useState,
} from "react";
import { Button, Card, Flex, Input } from "antd";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";
import { Articles } from "../../models/response/AuthResponse";

const States = () => {
  const { store } = useContext(Context);
  const [articles, setArticles] = useState<Articles[]>([]);
  const [articlesFiltered, setArticlesFiltered] = useState<Articles[]>([]);

  useEffect(() => {
    store.getArticles();
  }, []);

  useEffect(() => {
    setArticles(store.articles);
    setArticlesFiltered(store.articles);
  }, [store.articles]);

  const filtered = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setArticlesFiltered(articles);
      return;
    }
    setArticlesFiltered(
      articlesFiltered.filter((artical) =>
        artical.header.toLowerCase().includes(e.target.value.toLowerCase()),
      ),
    );
  };
  const save = async (id: number) => {
    await store.addUserArticles(id);
  };

  return (
    <Flex
      vertical
      align={"center"}
      gap={30}
      style={{
        paddingTop: 20,
      }}
    >
      <Input
        onChange={filtered}
        style={{ width: "clamp(100px,100%,300px)" }}
        placeholder={"Поиск..."}
      />
      <Flex vertical align={"center"} gap={25}>
        {articlesFiltered.map((article) => (
          <Card key={article.id}>
            <h2>{article.id}</h2>
            <p>{article.header}</p>
            <Button
              style={{
                marginTop: 25,
              }}
              onClick={() => save(Number(article.id))}
            >
              Добавить в избранное
            </Button>
          </Card>
        ))}
      </Flex>
    </Flex>
  );
};

export default observer(States);
