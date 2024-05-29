import React, { FC, useEffect } from "react";
import { Flex } from "antd";
import Title from "antd/lib/typography/Title";
import { UserInfo } from "../../../models/response/UserInfo";
import styles from "./Header.module.css";

interface HeaderProps {
  user: UserInfo;
}

const getRandomColor = (): string => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const Header: FC<HeaderProps> = ({ user }) => {
  const [color, setColor] = React.useState<string>("");

  useEffect(() => {
    setColor(getRandomColor());
  }, []);

  return (
    <Flex
      className={styles.sky}
      style={{
        inlineSize: "100%",
        padding: "25px 0",
      }}
      justify={"center"}
      align={"center"}
    >
      <Flex style={{ inlineSize: "200px" }} align={"center"} vertical>
        <div
          style={{
            inlineSize: "8em",
            blockSize: "8em",
            backgroundColor: color,
            borderRadius: 80,
            marginBottom: "1em",
          }}
        ></div>
        <Title
          level={5}
          style={{
            marginBottom: "0.5em",
            color: "white",
          }}
        >
          Ваш цвет
        </Title>
        <Title
          level={5}
          style={{
            marginTop: "0.5em",
            marginBottom: "0.5em",
            color: "white",
          }}
        >
          {user?.email}
        </Title>
      </Flex>
    </Flex>
  );
};

export default Header;
