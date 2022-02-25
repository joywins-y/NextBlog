import {
  CalendarOutlined,
  FireOutlined,
  FolderOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Button, Col, Row, Affix } from "antd";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import styles from "../styles/details.module.scss";
import Author from "../components/Author";
import Advert from "../components/Advert";
import ReactMarkdown from "react-markdown";
import MarkNav from "markdown-navbar";
import "markdown-navbar/dist/navbar.css";

const Details = () => {
  const markdown1 = `Just a link: https://reactjs.com.`;
  const markdown =
    "# P01:课程介绍和环境搭建\n" +
    "[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n" +
    "> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n" +
    "**这是加粗的文字**\n\n" +
    "*这是倾斜的文字*`\n\n" +
    "***这是斜体加粗的文字***\n\n" +
    "~~这是加删除线的文字~~ \n\n" +
    "`console.log(111)` \n\n" +
    "# p02:来个Hello World 初始Vue3.0\n" +
    "> aaaaaaaaa\n" +
    ">> bbbbbbbbb\n" +
    ">>> cccccccccc\n" +
    "***\n\n\n" +
    "# p03:Vue3.0基础知识讲解\n" +
    "> aaaaaaaaa\n" +
    ">> bbbbbbbbb\n" +
    ">>> cccccccccc\n\n" +
    "# p04:Vue3.0基础知识讲解\n" +
    "> aaaaaaaaa\n" +
    ">> bbbbbbbbb\n" +
    ">>> cccccccccc\n\n" +
    "#5 p05:Vue3.0基础知识讲解\n" +
    "> aaaaaaaaa\n" +
    ">> bbbbbbbbb\n" +
    ">>> cccccccccc\n\n" +
    "# p06:Vue3.0基础知识讲解\n" +
    "> aaaaaaaaa\n" +
    ">> bbbbbbbbb\n" +
    ">>> cccccccccc\n\n" +
    "# p07:Vue3.0基础知识讲解\n" +
    "> aaaaaaaaa\n" +
    ">> bbbbbbbbb\n" +
    ">>> cccccccccc\n\n" +
    "``` var a=11; ```";
  return (
    <div className={styles.details_container}>
      <Head>
        <title>博客详细页</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <div>
            <div className="bread-div">
              <Breadcrumb>
                <Breadcrumb.Item>
                  <Link href="/">
                    <a>首页</a>
                  </Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>视频列表</Breadcrumb.Item>
                <Breadcrumb.Item>xxxx</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div>
              <div className="details-title">React实战视频教程</div>
              <div className="list-icon center">
                <span>
                  <CalendarOutlined />
                  2022-02-21
                </span>
                <span>
                  <FolderOutlined />
                  视频教程
                </span>
                <span>
                  <FireOutlined />
                  1024人
                </span>
              </div>
              {/* <div className="details-content">
                内容
               
              </div> */}
              <div className="details-content">
                {/* <ReactMarkdown source={markdown} escapeHtml={false} /> */}
                {/* <ReactMarkdown source={markdown} escapeHtml={false}>
                  {children}
                </ReactMarkdown> */}
              </div>
            </div>
          </div>
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
        </Col>
      </Row>
      <Affix offsetTop={5}>
        <div className="details-nav comm-box">
          <div className="nav-title">文章目录</div>
          <MarkNav className="article-menu" source={markdown} ordered={false} />
        </div>
      </Affix>
    </div>
  );
};

export default Details;