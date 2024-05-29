import React, { FC, useContext } from "react";
import { Column } from "@ant-design/charts";
import { Button, Card, Flex } from "antd";
import { Context } from "../../../../index";

interface ITrain {
  dataFetch?: any;
}

const Train: FC<ITrain> = ({ dataFetch }) => {
  const { store } = useContext(Context);
  const data = dataFetch?.data.data
    ? dataFetch.data.data
    : [
        { type: "Май", Количество: 2 },
        { type: "Июнь", Количество: 5 },
        { type: "Июль", Количество: 10 },
        { type: "Август", Количество: 16 },
        { type: "Сентябрь", Количество: 8 },
      ];

  const handleOnClick = async () => {
    dataFetch?.data.data.forEach(
      (elem: { type: string; Количество: number }) => {
        if (
          elem.type === new Date().toLocaleString("default", { month: "long" })
        ) {
          elem.Количество = elem.Количество + 1;
        }
      },
    );
    await store.updateUserWidget(
      Number(dataFetch.id),
      JSON.stringify(dataFetch.data),
    );
    await store.getUserWidget();
  };

  const handleDelete = async () => {
    await store.deleteUserWidget(Number(dataFetch.id));
    await store.getUserWidget();
  };

  const config = {
    data,
    xField: "type",
    yField: "Количество",
    style: {
      fill: "#2989FF",
    },
    legend: false,
  };

  return (
    <Card>
      <Column {...config} />
      <Flex justify="space-between">
        {dataFetch?.data.data ? (
          <>
            <Button onClick={handleOnClick} type={"default"}>
              Добавить
            </Button>
            <Button danger onClick={handleDelete} type={"default"}>
              Удалить
            </Button>
          </>
        ) : (
          ""
        )}
      </Flex>
    </Card>
  );
};

export default Train;
