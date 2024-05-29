import React from "react";
import { MenuProps, Menu } from "antd";
import {
  BookOutlined,
  ContainerOutlined,
  SettingOutlined,
  TrophyOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "1",
    icon: (
      <Link to={"/profile"}>
        <UserOutlined />{" "}
      </Link>
    ),
    label: "Профиль",
  },
  {
    key: "2",
    icon: (
      <Link to={"/traning"}>
        <TrophyOutlined />
      </Link>
    ),
    label: "Тренировки",
  },
  {
    key: "3",
    icon: (
      <Link to={"/recipe"}>
        <BookOutlined />
      </Link>
    ),
    label: "Рецепты",
  },
  {
    key: "4",
    icon: (
      <Link to={"/states"}>
        <ContainerOutlined />
      </Link>
    ),
    label: "Статьи",
  },
  {
    key: "5",
    icon: (
      <Link to={"/settings"}>
        {" "}
        <SettingOutlined />
      </Link>
    ),
    label: "Настройки",
  },
];

const CustomMenu = () => {
  return (
    <>
      <Menu
        style={{
          position: "fixed",
          right: 0,
          inlineSize: "4em",
          blockSize: "100%",
        }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        inlineCollapsed={true}
        items={items}
      />
    </>
  );
};

export default CustomMenu;
