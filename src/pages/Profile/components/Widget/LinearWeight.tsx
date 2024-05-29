import React, { FC } from "react";
import { Line } from "@ant-design/charts";

interface ILinearWeight {
  dataFetch?: any;
}

const LinearWeight: FC<ILinearWeight> = ({ dataFetch }) => {
  const data = dataFetch?.data?.data
    ? dataFetch.data?.data.goal
    : [
        { Месяц: "Май", Вес: 60 },
        { Месяц: "Июнь", Вес: 65 },
        { Месяц: "Июль", Вес: 68 },
        { Месяц: "Август", Вес: 75 },
        { Месяц: "Сентябрь", Вес: 72 },
      ];
  const config = {
    data,
    xField: "Месяц",
    yField: "Вес",
    point: {
      shapeField: "square",
      sizeField: 4,
    },
    interaction: {
      tooltip: {
        marker: true,
      },
    },
    style: {
      lineWidth: 2,
    },
  };
  return <Line {...config} />;
};

export default LinearWeight;
