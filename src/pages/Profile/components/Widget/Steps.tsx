import React, { FC, useContext, useState } from "react";
import { Button, Card, Flex, Form, Input, Modal, Statistic } from "antd";
import { NodeIndexOutlined } from "@ant-design/icons";
import { Context } from "../../../../index";

interface ISteps {
  dataFetch?: any;
}

const Steps: FC<ISteps> = ({ dataFetch }) => {
  const { store } = useContext(Context);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [inputText, setInputText] = useState("");

  const handleOk = async () => {
    setLoading(true);
    dataFetch.data.data += Number(inputText);
    await store.updateUserWidget(
      Number(dataFetch.id),
      JSON.stringify(dataFetch.data),
    );
    await store.getUserWidget();
    setOpen(false);
    setLoading(false);
    setInputText("");
  };

  const handleDelete = async () => {
    await store.deleteUserWidget(Number(dataFetch.id));
    await store.getUserWidget();
  };

  return (
    <Card>
      <Statistic
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
        title="Шаги"
        value={dataFetch?.data?.data ? dataFetch.data?.data : 0}
        prefix={<NodeIndexOutlined />}
      />
      <Flex justify={"space-between"}>
        <>
          {" "}
          <Button onClick={() => setOpen(true)}>Добавить</Button>
          <Button onClick={handleDelete} danger>
            Удалить
          </Button>
        </>
      </Flex>
      <Modal
        open={open}
        title={"Шаги"}
        onCancel={() => setOpen(false)}
        footer={[
          <Button key="back" onClick={() => setOpen(false)}>
            Отмена
          </Button>,
          <Button
            key="submit"
            onClick={handleOk}
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
            placeholder={"Введите количество шагов"}
          />
        </Form>
      </Modal>
    </Card>
  );
};

export default Steps;
