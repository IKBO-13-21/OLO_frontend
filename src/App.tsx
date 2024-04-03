import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Button, Form, FormProps, Input} from "antd";
import {Navigate} from "react-router-dom";
import axios from "axios";

interface AppProps {}

interface AppState {

}

type FieldType = {
  email?: string;
  password?: string;
};

const baseURL = "http://localhost:5070";

class App extends React.Component<AppProps, AppState> {

  constructor(props: any) {
    super(props);
  }

  render() {
    //const [redirect, setRedirect] = useState<boolean>(false);
    const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
      console.log(values);
      await axios.post(`${baseURL}/sso/v2/auth/register`, values)
          .then((response) => {
              console.log(response);
          })
          .catch((error) => {
              console.error(error)
          })
      //setRedirect(true);
    };

    const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };


    // if (redirect){
    //   return <Navigate to="/login"/>
    // }

    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            autoComplete="off"
            onFinish={onFinish}
        >

          <Form.Item<FieldType>
              label="Username"
              name="email"
              rules={[{ required: true, message: 'Please input your username!' }]} >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]} >
            <Input.Password />
          </Form.Item>

          <Form.Item
              wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
    );
  }
}

export default App;
