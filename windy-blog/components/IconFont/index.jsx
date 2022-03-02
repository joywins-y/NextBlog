import React from "react";
import { createFromIconfontCN } from "@ant-design/icons";

const Index = ({ type }) => {
  const IconFont = createFromIconfontCN({
    scriptUrl: [
      "//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js", // icon-javascript, icon-java, icon-shoppingcart (overrided)
      "//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js", // icon-shoppingcart, icon-python
    ],
  });

  return <IconFont type={type} />;
};

export default Index;
