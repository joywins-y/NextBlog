import React, { useEffect, useState } from "react";
import { Col, Menu, Row } from "antd";
import styles from "./index.module.scss";
import { HomeOutlined } from "@ant-design/icons";
import servicePath from "../../config/apiURL";
import axios from "axios";
import Router from "next/router";
import IconFont from "../IconFont";

const Header = () => {
  const [navList, setNavList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(servicePath.getTypeInfo).then((res) => {
        setNavList(res.data.data);
        return res.data.data;
      });
      setNavList(result);
    };
    fetchData();
  }, []);

  /** 跳转到列表页 */
  const handleClick = (e) => {
    console.log(e.key);
    if (e.key === "home") {
      Router.push("/");
    } else {
      Router.push("/list?id=" + e.key);
    }
  };

  return (
    <div className={styles.header_container}>
      <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={10} lg={15} xl={12}>
          <span className="header-logo">Windy</span>
          <span className="header-desc">一生所求，爱与自由，你与温柔</span>
        </Col>
        <Col className="menu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
          <Menu mode="horizontal" onClick={handleClick}>
            <Menu.Item key="home" key="home">
              <HomeOutlined />
              <span>首页</span>
            </Menu.Item>
            {navList.map((item) => {
              return (
                <Menu.Item key={item.id}>
                  <IconFont type={`icon-youtube`} />
                  <span>{item.typeName}</span>
                </Menu.Item>
              );
            })}
          </Menu>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
