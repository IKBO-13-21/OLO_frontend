import React, { useContext, useState } from "react";
import { Button, Card, Flex, Form, FormProps, Input, message } from "antd";
import Title from "antd/lib/typography/Title";
import { Context } from "../../index";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { theme } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import useRedirectAuth from "../../hooks/useRedirectAuth";
const { useToken } = theme;

interface IFieldType {
  email: string;
  password: string;
}

const RegistrationForm = () => {
  useRedirectAuth();
  const { token } = useToken();
  const navigate = useNavigate();
  const { store } = useContext(Context);

  const onFinish: FormProps<IFieldType>["onFinish"] = async (values) => {
    try {
      await store.registration(values.email, values.password);
      navigate("/login");
      message.success("Регистрация успешна");
    } catch (e) {
      message.error("Возникла ошибка");
    }
  };

  return (
    <Flex justify="center" align="center" style={{ minHeight: "100vh" }}>
      <Card style={{ height: "50%", width: "30%" }}>
        <Title level={2} style={{ marginTop: 0, textAlign: "center" }}>
          Регистрация
        </Title>
        <Flex
          vertical
          style={{
            width: "100%",
          }}
        >
          <Form
            name="registration"
            wrapperCol={{ flex: 1 }}
            style={{ width: "100%", marginBottom: 0 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item<IFieldType>
              name="email"
              rules={[{ required: true, message: "Введите email" }]}
            >
              <Input
                placeholder={"Email"}
                type="email"
                prefix={
                  <UserOutlined
                    style={{
                      color: token.colorBorder,
                    }}
                  />
                }
              />
            </Form.Item>

            <Form.Item<IFieldType>
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
              <Input.Password
                placeholder={"Пароль"}
                prefix={
                  <LockOutlined
                    style={{
                      color: token.colorBorder,
                    }}
                  />
                }
              />
            </Form.Item>
            <Form.Item
              hasFeedback
              name="password2"
              dependencies={["password"]}
              rules={[
                {
                  required: true,
                  message: "Введите пароль снова",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error("Пароли не совпадают"));
                  },
                }),
              ]}
            >
              <Input.Password
                placeholder={"Подтверждение пароля"}
                prefix={
                  <LockOutlined
                    style={{
                      color: token.colorBorder,
                    }}
                  />
                }
              />
            </Form.Item>
            <Form.Item wrapperCol={{ flex: 1 }}>
              <Flex vertical gap={15}>
                <Button
                  style={{ margin: "auto" }}
                  type="primary"
                  htmlType="submit"
                >
                  Зарегистрироваться
                </Button>
                <Link
                  to={"/login"}
                  style={{
                    margin: "auto",
                  }}
                >
                  <Button>Перейти к входу</Button>
                </Link>
              </Flex>
            </Form.Item>
          </Form>
        </Flex>
      </Card>
    </Flex>
  );
};

export default observer(RegistrationForm);
