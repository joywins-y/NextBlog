import React, { useState } from "react";
import { Button, Card, Input, Spin } from "antd";
import ProCard from "@ant-design/pro-card";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="login-div">
      <Spin tip="Loading..." spinning={isLoading}>
        <ProCard title="Blog System">
          <Input id="userName" size="large" placeholder="Enter your userName" />
        </ProCard>
      </Spin>
    </div>
  );
};

export default Login;
