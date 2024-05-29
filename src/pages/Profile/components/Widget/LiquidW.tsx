import React, { FC, useContext, useState } from "react";
import { Button, Card, Flex, Form, Input, Modal } from "antd";
import Title from "antd/lib/typography/Title";
import { Typography } from "antd";
import { Liquid } from "@ant-design/charts";
import { Context } from "../../../../index";

const { Text } = Typography;

interface ILiquidW {
  defaultW?: boolean;
  dataFetch?: any;
}

const LiquidW: FC<ILiquidW> = ({ defaultW, dataFetch }) => {
  const { store } = useContext(Context);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [inputText, setInputText] = useState("");
  const config = {
    percent: defaultW
      ? 0.55
      : dataFetch.data.data?.currentProgress / dataFetch.data.data.goal!,
    style: {
      outlineBorder: 4,
      outlineDistance: 8,
      textFill: "rgb(67 67 67 / 88%)",
      waveLength: 128,
    },
    interaction: { tooltip: false },
  };

  const handleDelete = async () => {
    await store.deleteUserWidget(Number(dataFetch.id));
    await store.getUserWidget();
  };

  const handleChange = async () => {
    dataFetch.data.data.currentProgress += Number(inputText);
    await store.updateUserWidget(
      Number(dataFetch.id),
      JSON.stringify(dataFetch.data),
    );
    await store.getUserWidget();
    setOpen(false);
    setInputText("");
  };

  return (
    <Card
      style={{
        width: "100%",
      }}
    >
      <Flex
        style={{
          width: "100%",
          margin: "auto",
        }}
        vertical
        gap={"3em"}
        align={"center"}
      >
        <Title
          level={2}
          style={{
            margin: 0,
            fontWeight: 400,
          }}
        >
          Трекер воды
        </Title>
        <Liquid width={200} height={200} {...config} />
        <Flex
          style={{
            width: "100%",
          }}
          justify={"space-between"}
          vertical
        >
          {defaultW ? (
            ""
          ) : (
            <Text>Цель: {dataFetch.data.data?.goal} литров</Text>
          )}
          <Flex
            style={{
              marginTop: 25,
            }}
            justify={"space-between"}
          >
            {defaultW ? (
              ""
            ) : (
              <Button onClick={() => setOpen(true)}>Добавить</Button>
            )}
            {defaultW ? (
              ""
            ) : (
              <Button onClick={handleDelete} danger>
                Удалить
              </Button>
            )}
          </Flex>
        </Flex>
      </Flex>
      <Modal
        open={open}
        title={"Треккер воды"}
        onCancel={() => setOpen(false)}
        footer={[
          <Button key="back" onClick={() => setOpen(false)}>
            Отмена
          </Button>,
          <Button
            key="submit"
            onClick={handleChange}
            type="primary"
            loading={loading}
          >
            Подтвердить
          </Button>,
        ]}
      >
        <Form>
          <Input
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder={"Введите литры"}
          />
        </Form>
      </Modal>
    </Card>
  );
};

export default LiquidW;
