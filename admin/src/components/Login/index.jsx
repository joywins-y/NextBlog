import React, { useState } from "react";
import { Button, Form, Input, message, Spin } from "antd";
import ProCard from "@ant-design/pro-card";
import ProForm from "@ant-design/pro-form";
import { KeyOutlined, UserOutlined } from "@ant-design/icons";
import { useForm } from "antd/lib/form/Form";
import styles from "./index.less";
import axios from 'axios';
import servicePath from "../../config/apiURL";

const Login = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [form] = useForm(null);

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
        setIsLoading(false);
        if (res.data.data == "登录成功") {
          localStorage.setItem("openId", res.data.openId);
          props.history.push("/index");
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
    <div className={styles.login_div}>
      <div>dasdnkjasn</div>
      <Spin tip="Loading..." spinning={isLoading}>
        <ProCard title="Blog System">
          <ProForm form={form} onFinish={handleFinish} submitter={false}>
            <Form.Item name="username">
              <Input
                id="userName"
                size="large"
                placeholder="Enter your userName"
                prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
              />
            </Form.Item>
            <Form.Item name="password">
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
      </Spin>
    </div>
  );
};

export default Login;
