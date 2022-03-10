import React, { useState } from "react";
import { Button, Form, Input, message } from "antd";
import ProCard from "@ant-design/pro-card";
import ProForm from "@ant-design/pro-form";
import { KeyOutlined, UserOutlined } from "@ant-design/icons";
import { useForm } from "antd/lib/form/Form";
import axios from "axios";
import servicePath from "../../config/apiURL";
import { useNavigate } from "react-router-dom";
import "./index.scss";

const Login = (props) => {
  const navigate = useNavigate();
  const [form] = useForm(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFinish = () => {
    form.validateFields().then(async (values) => {
      console.log(values);
      setIsLoading(true);
      axios({
        method: "post",
        url: servicePath.checkLogin,
        data: values,
        withCredentials: true,
      }).then((res) => {
        console.log(res);
        setIsLoading(false);
        if (res.data.data === "登录成功") {
          sessionStorage.setItem("openId", res.data.openId);
          navigate("/welcome");
        } else {
          message.error("用户名密码错误");
        }
      });
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    });
  };

  return (
    <ProCard className="login-card-container">
      <ProForm
        form={form}
        onFinish={handleFinish}
        submitter={false}
        className="login-form"
      >
        <div className="form-logo">
          <div>Welcome!</div>
          <h1>Blog System</h1>
        </div>
        <Form.Item name="userName" label="User Name">
          <Input
            id="userName"
            size="large"
            placeholder="Enter your userName"
            prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
          />
        </Form.Item>
        <Form.Item name="password" label="Password">
          <Input.Password
            id="password"
            size="large"
            placeholder="Enter your password"
            prefix={<KeyOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" size="large" block htmlType="submit">
            Login in
          </Button>
        </Form.Item>
      </ProForm>
    </ProCard>
  );
};

export default Login;
