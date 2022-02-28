import { Col, Menu, Row } from "antd";
import React from "react";
import styles from "./index.module.scss";
import { HomeOutlined, SmileOutlined, YoutubeOutlined } from "@ant-design/icons";

const Header = () => {
  return (
    <div className={styles.header_container}>
      <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={10} lg={15} xl={12}>
          <span className="header-logo">Windy</span>
          <span className="header-desc">一生所求，爱与自由，你与温柔</span>
        </Col>
        <Col className="menu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
          <Menu mode="horizontal">
            <Menu.Item key="home">
              <HomeOutlined />
              首页
            </Menu.Item>
            <Menu.Item key="video">
              <YoutubeOutlined />
              视频
            </Menu.Item>
            <Menu.Item key="life">
              <SmileOutlined />
              生活
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
