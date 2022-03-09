import React, { useEffect, useState } from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import ProLayout, { PageContainer } from "@ant-design/pro-layout";
import defaultProps from "./_defaultProps";
import { useNavigate } from "react-router-dom";
import { getMenuData } from '@ant-design/pro-layout';

const Index = (props) => {
  const [settings, setSetting] = useState({});
  const [pathname, setPathname] = useState("/welcome");
  const navigate = useNavigate();
  useEffect(()=>{
    console.log(navigate);
    console.log(props);
    const { breadcrumb, menuData } = getMenuData(defaultProps);
    console.log(breadcrumb, menuData);
  })
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
        onMenuHeaderClick={(e) => console.log(e)}
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
        collapsed={false}
        {...settings}
      >
        <PageContainer></PageContainer>
      </ProLayout>
    </div>
  );
};

export default Index;
