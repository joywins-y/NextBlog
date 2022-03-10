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
            component: "../../pages/article/index",
          },
          {
            path: "/article/add",
            name: "新增文章",
            component: "../../pages/article/AddArticle",
          },
          {
            path: "/article/update/:id",
            name: "修改文章",
            hideInMenu: true,
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
