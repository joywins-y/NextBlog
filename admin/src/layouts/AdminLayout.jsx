import React, { useState } from "react";
import { Avatar, message } from "antd";
import { UserOutlined } from "@ant-design/icons";
import ProLayout from "@ant-design/pro-layout";
import defaultProps from "./_defaultProps";
import { Outlet, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const AdminLayout = (props) => {
  const [settings, setSetting] = useState({});
  const [pathname, setPathname] = useState("/welcome");
  const navigate = useNavigate();

  return (
    <div
      id="test-pro-layout"
      style={{
        height: "100vh",
      }}
    >
      <ProLayout
        style={{
          minHeight: "100vh",
        }}
        {...defaultProps}
        location={{
          pathname,
        }}
        waterMarkProps={{
          content: "Pro Layout",
        }}
        menuFooterRender={(props) => {
          return <div>footer</div>;
        }}
        menuHeaderRender={() => (
          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <img src={logo} alt="windy" style={{ width: "70%" }} />
          </div>
        )}
        onMenuHeaderClick={(e) => {
          message.info("点击了菜单头部");
          navigate("/welcome");
        }}
        // onMenuHeaderClick={() => history.push('/welcome')}
        menuItemRender={(item, dom) => (
          <a
            onClick={() => {
              setPathname(item.path || "/welcome");
            }}
          >
            {dom}
          </a>
        )}
        rightContentRender={() => (
          <div>
            <Avatar shape="square" size="small" icon={<UserOutlined />} />
          </div>
        )}
        // itemRender: (route, params, routes, paths) => <span>{route.breadcrumbName}</span>,
        itemRender={(route, params, routes, paths) => (
          <span>{route.breadcrumbName}</span>
        )}
        onPageChange={(location) => {
          console.log(location);
          const currentLocal = window.location.pathname;
          console.log(currentLocal);
          if(currentLocal.indexOf('welcome') === -1){
            navigate(location);
          }
        }}
        collapsed={false}
        {...settings}
      >
        <Outlet />
      </ProLayout>
    </div>
  );
};

export default AdminLayout;
