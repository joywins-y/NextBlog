import React, { Component } from "react";
import ProLayout, { PageContainer } from "@ant-design/pro-layout";
import complexMenu from "./complexMenu";
import Avatar from "antd/lib/avatar/avatar";
import { UserOutlined } from "@ant-design/icons";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <ProLayout
        location={{
          pathname: "/home",
        }}
        collapsedButtonRender={false}
        collapsed
        iconfontUrl="//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js"
        route={{
          routes: [
            {
              path: "/home",
              name: "收藏",
              icon: "icon-shoucang1",
            },
            {
              path: "/home/overview",
              name: "FaceBook",
              icon: "icon-facebook",
            },
            {
              path: "/home/search",
              name: "Twitter",
              icon: "icon-twitter",
            },
          ],
        }}
        headerRender={false}
        disableContentMargin
      >
        <ProLayout
          location={{
            pathname: "/home/overview",
          }}
          route={{
            routes: complexMenu,
          }}
          navTheme="light"
          style={{
            height: 400,
          }}
          rightContentRender={() => {
            return (
              <div>
                <Avatar shape="square" size="small" icon={<UserOutlined />} />
              </div>
            );
          }}
        >
          <PageContainer content="欢迎使用">
            <div>hello</div>
          </PageContainer>
        </ProLayout>
      </ProLayout>
    );
  }
}

export default Index;
