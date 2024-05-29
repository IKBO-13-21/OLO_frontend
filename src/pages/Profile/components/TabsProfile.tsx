import React from "react";
import { Flex, Tabs, TabsProps } from "antd";
import Widget from "./Widget";
import FavoriteArticles from "./FavoriteArticles";

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Виджеты",
    children: <Widget />,
  },
  {
    key: "2",
    label: "Избранные статьи",
    children: <FavoriteArticles />,
  },
];

const TabsProfile = () => {
  return (
    <Flex
      justify={"center"}
      style={{
        inlineSize: "100%",
      }}
    >
      <Tabs
        style={{
          width: "50%",
        }}
        centered
        items={items}
      ></Tabs>{" "}
    </Flex>
  );
};

export default TabsProfile;
