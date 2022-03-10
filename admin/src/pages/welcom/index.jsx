import React from "react";

const Index = () => {
  return (
    <div>
      <h1> Welcome Back !</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
          }}
        >
          <img src="" alt="head" />
          <p>你好，username</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p>代办任务</p>
          <p>num</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
