import React, { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../../index";
import Train from "./Widget/Train";
import LiquidW from "./Widget/LiquidW";
import LinearWeight from "./Widget/LinearWeight";
import PCO from "./Widget/PCO";
import Steps from "./Widget/Steps";
import { Flex } from "antd";

const Widget = () => {
  const { store } = useContext(Context);
  useEffect(() => {
    store.getUserWidget();
  }, []);
  const widget = store.widgets;
  const mapWidget =
    widget.length > 0
      ? widget.map((elem) => {
          return { id: elem.id, data: JSON.parse(elem.data) };
        })
      : [];
  return (
    <Flex vertical gap={30}>
      {mapWidget.length > 0 ? (
        mapWidget.map((widget) => (
          <>
            {widget.data.type === "Train" ? (
              <Train dataFetch={widget} />
            ) : widget.data.type === "LiquidW" ? (
              <LiquidW dataFetch={widget} />
            ) : widget.data.type === "PCO" ? (
              <PCO dataFetch={widget} />
            ) : widget.data.type === "Steps" ? (
              <Steps dataFetch={widget} />
            ) : (
              ""
            )}
          </>
        ))
      ) : (
        <p
          style={{
            textAlign: "center",
            color: "#919191",
          }}
        >
          Создайте новый виджет :)
        </p>
      )}
    </Flex>
  );
};

export default observer(Widget);
