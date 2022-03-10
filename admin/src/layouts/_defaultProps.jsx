import React from "react";
import { CrownOutlined } from "@ant-design/icons";

const _defaultProps = {
  route: {
    path: "/",
    routes: [
      {
        path: '/welcome',
        name: 'welcom',
        hideInMenu: true,
        component: './welcom/index',
      },
      {
        path: "/article",
        name: "文章管理",
        icon: <CrownOutlined />,
        // access: "canAdmin",
        component: "./article",
        routes: [
          {
            path: "/article/list",
            name: "文章列表",
            icon: <CrownOutlined />,
            component: "../../pages/article/index",
          },
          {
            path: "/article/add",
            name: "新增文章",
            icon: <CrownOutlined />,
            component: "../../pages/article/AddArticle",
          },
          {
            path: "/article/update",
            name: "修改文章",
            icon: <CrownOutlined />,
            component: "../../pages/article/AddArticle",
          },
        ],
      },
    ],
  },
  location: {
    pathname: "/",
  },
};

export default _defaultProps;
