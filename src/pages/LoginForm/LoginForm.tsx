import React, { FC, useContext, useEffect, useState } from "react";
import { Button, Card, Flex, Form, FormProps, Input, message } from "antd";
import Title from "antd/lib/typography/Title";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";
import { Link, useLocation, useNavigate } from "react-router-dom";

interface IFieldType {
  email: string;
  password: string;
}

const LoginForm: FC = () => {
  const { store } = useContext(Context);
  const navigate = useNavigate();
  const location = useLocation();

  const onFinish: FormProps<IFieldType>["onFinish"] = (values) => {
    store.login(values.email, values.password);
  };
  useEffect(() => {
    if (store.isAuthenticated) {
      if (location.state?.from) {
        navigate(location.state.from);
      }
      navigate("/profile");
    }
  }, [store.isAuthenticated]);

  if (!store.isConfirmAuthenticated) {
    message.error("Ошибка ввода логина или пароля");
  }

  return (
    <Flex justify="center" align="center" style={{ minHeight: "100vh" }}>
      <Card style={{ height: "50%", width: "clamp(300px, 100%, 600px)" }}>
        <Title level={2} style={{ marginTop: 0, textAlign: "center" }}>
          Вход
        </Title>
        <Flex
          vertical
          style={{
            width: "100%",
          }}
        >
          <Form
            name="login"
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 19 }}
            style={{ width: "100%", marginBottom: 0 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item<IFieldType>
              label="Email"
              name="email"
              rules={[{ required: true, message: "Введите email" }]}
            >
              <Input type="email" />
            </Form.Item>

            <Form.Item<IFieldType>
              label="Пароль"
              hasFeedback
              validateTrigger="onBlur"
              name="password"
              validateDebounce={1000}
              rules={[
                {
                  required: true,
                  message: "Пароль должен содержать 8 символов",
                  min: 8,
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ flex: 1 }}>
              <Flex vertical gap={15}>
                <Button
                  style={{ margin: "auto" }}
                  type="primary"
                  htmlType="submit"
                >
                  Войти
                </Button>
                <Link
                  to={"/registration"}
                  style={{
                    margin: "auto",
                  }}
                >
                  <Button>Зарегистрироваться</Button>
                </Link>
              </Flex>
            </Form.Item>
          </Form>
        </Flex>
      </Card>
    </Flex>
  );
};

export default observer(LoginForm);
