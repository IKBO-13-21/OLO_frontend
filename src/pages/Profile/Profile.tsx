import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Flex,
  FloatButton,
  Form,
  Input,
  Modal,
  Tabs,
  TabsProps,
} from "antd";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";
import TabsProfile from "./components/TabsProfile";
import Header from "./components/Header";
import { Context } from "../../index";
import LiquidW from "./components/Widget/LiquidW";
import Train from "./components/Widget/Train";
import LinearWeight from "./components/Widget/LinearWeight";
import PCO from "./components/Widget/PCO";
import Steps from "./components/Widget/Steps";

interface IObjWidget {
  type: string;
  data: any;
}

const Profile = () => {
  const navigate = useNavigate();
  const { store } = useContext(Context);
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
    store.getInfo();
    store.getUserWidget();
  }, []);

  const [open, setOpen] = useState<boolean>(false);
  const [openMinModal, setOpenMinModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingMinModal, setLoadingMinModal] = useState<boolean>(false);
  const [inputText, setInputText] = useState<string>("");
  const [objWidget, setObjWidget] = useState<IObjWidget>({
    type: "LiquidW",
    data: {},
  });

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = async () => {
    setLoading(true);
    if (objWidget.type === "LiquidW" || objWidget.type === "Weight") {
      setOpenMinModal(true);
      return;
    }
    if (objWidget.type === "Train") {
      const now = new Date();
      objWidget.data = [];
      for (let i = 0; i < 5; i++) {
        objWidget.data.push({
          type: now.toLocaleString("default", { month: "long" }),
          Количество: 0,
        });
        now.setMonth(now.getMonth() + 1);
      }
    }
    if (objWidget.type === "PCO") {
      objWidget.data = [
        { type: "Белки", Количество: 0 },
        { type: "Углеводы", Количество: 0 },
        { type: "Жиры", Количество: 0 },
      ];
    }
    if (objWidget.type === "Steps") {
      objWidget.data = 0;
    }

    const jsonObjWidget = JSON.stringify(objWidget);
    await store.addUserWidget(jsonObjWidget);
    await store.getUserWidget();
    setLoading(false);
    setOpen(false);
  };

  const handleOkMinModal = async () => {
    setLoadingMinModal(true);
    objWidget.data = { currentProgress: 0, goal: Number(inputText) };
    const jsonObjWidget = JSON.stringify(objWidget);
    await store.addUserWidget(jsonObjWidget);
    await store.getUserWidget();
    setLoadingMinModal(false);
    setLoading(false);
    setOpenMinModal(false);
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleChange = (activeKey: string) => {
    console.log(activeKey);
    if (activeKey === "1") {
      objWidget.type = "LiquidW";
      setObjWidget(objWidget);
      return;
    }
    if (activeKey === "2") {
      objWidget.type = "Train";
      setObjWidget(objWidget);
      return;
    }
    if (activeKey === "3") {
      objWidget.type = "PCO";

      setObjWidget(objWidget);
      return;
    }
    if (activeKey === "4") {
      objWidget.type = "Steps";
      setObjWidget(objWidget);
      return;
    }
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Треккер",
      children: <LiquidW defaultW={true}></LiquidW>,
    },
    {
      key: "2",
      label: "Тренировки",
      children: <Train />,
    },
    {
      key: "3",
      label: "БЖУ",
      children: <PCO />,
    },
    {
      key: "4",
      label: "Шаги",
      children: <Steps />,
    },
  ];

  const user = store.user!;
  return (
    <>
      <Flex vertical align={"center"}>
        <Header user={user} />
        <TabsProfile />
      </Flex>
      <FloatButton
        tooltip={"Создать виджет"}
        icon={<PlusOutlined />}
        onClick={() => showModal()}
      />
      <Modal
        open={open}
        title="Создание виджетов"
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Отмена
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            Создать
          </Button>,
        ]}
      >
        <Tabs
          centered
          defaultActiveKey="1"
          items={items}
          onChange={handleChange}
        />
      </Modal>
      <Modal
        open={openMinModal}
        title={objWidget.type === "LiquidW" ? "Цель" : "Текущий вес"}
        onCancel={() => setOpenMinModal(false)}
        footer={[
          <Button key="back" onClick={() => setOpenMinModal(false)}>
            Отмена
          </Button>,
          <Button
            key="submit"
            onClick={handleOkMinModal}
            type="primary"
            loading={loadingMinModal}
          >
            Подтвердить
          </Button>,
        ]}
      >
        <Form>
          <Input
            onChange={(e) => setInputText(e.target.value)}
            placeholder={
              objWidget.type === "LiquidW" ? "Введите литры" : "Введите вес"
            }
          />
        </Form>
      </Modal>
    </>
  );
};

export default observer(Profile);
