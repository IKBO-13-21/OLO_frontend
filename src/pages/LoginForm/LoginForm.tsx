import React, { FC, useContext, useState } from "react";
import { Button, Card, Flex, Input } from "antd";
import Title from "antd/lib/typography/Title";
import { Context } from "../../index";

const LoginForm: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { store } = useContext(Context);

  return (
    <Flex justify="center" align="center" style={{ minHeight: "100vh" }}>
      <Card style={{ height: "50%", width: "30%" }}>
        <Title level={2} style={{ marginTop: 0, textAlign: "center" }}>
          Вход
        </Title>
        <Flex
          gap={20}
          vertical
          style={{
            width: "100%",
          }}
        >
          <Input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="E-mail"
          />
          <Input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Password"
          />

          <Button
            onClick={() => store.login(email, password)}
            type="primary"
            size={"middle"}
          >
            Войти
          </Button>
          <Button
            onClick={() => store.registration(email, password)}
            size={"middle"}
          >
            Зарегистрироваться
          </Button>
        </Flex>
      </Card>
    </Flex>
  );
};

export default LoginForm;
