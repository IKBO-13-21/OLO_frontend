import React, { FC, useContext, useState } from "react";
import { Pie } from "@ant-design/charts";
import { Button, Card, Flex, Form, Input, Modal } from "antd";
import { Context } from "../../../../index";

interface IText {
  type: string;
  Количество: number;
}

interface IProps {
  dataFetch?: any;
}

const Pco: FC<IProps> = ({ dataFetch }) => {
  const { store } = useContext(Context);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [inputTextP, setInputTextP] = useState("");
  const [inputTextC, setInputTextC] = useState("");
  const [inputTextO, setInputTextO] = useState("");

  const config = {
    data: dataFetch?.data?.data
      ? dataFetch.data?.data
      : [
          { type: "Белки", Количество: 60 },
          { type: "Углеводы", Количество: 200 },
          { type: "Жиры", Количество: 100 },
        ],
    angleField: "Количество",
    colorField: "type",
    innerRadius: 0.6,
    label: {
      text: (d: IText) => `${d.type}\n ${d.Количество}`,
      style: {},
    },
    interaction: {
      tooltip: false,
    },
    legend: false,
    annotations: [
      {
        type: "text",
        style: {
          text: "БЖУ",
          x: "50%",
          y: "50%",
          textAlign: "center",
          fontSize: 40,
        },
      },
    ],
  };
  const handleOk = async () => {
    setLoading(true);
    dataFetch.data.data[0].Количество += Number(inputTextP);
    dataFetch.data.data[1].Количество += Number(inputTextC);
    dataFetch.data.data[2].Количество += Number(inputTextO);
    await store.updateUserWidget(
      Number(dataFetch.id),
      JSON.stringify(dataFetch.data),
    );
    await store.getUserWidget();
    setOpen(false);
    setLoading(false);
    setInputTextP("");
    setInputTextC("");
    setInputTextO("");
  };

  const handleDelete = async () => {
    await store.deleteUserWidget(Number(dataFetch.id));
    await store.getUserWidget();
  };

  return (
    <Card>
      <Pie {...config} />

      <Flex justify={"space-between"}>
        {dataFetch?.data?.data ? (
          <>
            <Button onClick={() => setOpen(true)}>Добавить</Button>
            <Button danger onClick={handleDelete}>
              Удалить
            </Button>
          </>
        ) : (
          ""
        )}
      </Flex>
      <Modal
        open={open}
        title={"БЖУ"}
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
        <Form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 15,
          }}
        >
          <Input
            value={inputTextP}
            onChange={(e) => setInputTextP(e.target.value)}
            placeholder={"Введите количество белков"}
          />
          <Input
            value={inputTextC}
            onChange={(e) => setInputTextC(e.target.value)}
            placeholder={"Введите количество жиров"}
          />
          <Input
            value={inputTextO}
            onChange={(e) => setInputTextO(e.target.value)}
            placeholder={"Введите количество углеводов"}
          />
        </Form>
      </Modal>
    </Card>
  );
};

export default Pco;
