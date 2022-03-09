import React, { useState, useEffect } from "react";
import { marked } from "marked";
import styles from "./index.less";
import { Select, Input, Row, Col, Button, DatePicker, message } from "antd";
import axios from "axios";
import servicePath from "../../../config/apiURL";
import { useNavigate } from "react-router-dom";
import { PageContainer } from "@ant-design/pro-layout";

const { Option } = Select;
const { TextArea } = Input;

const Index = (props) => {
  const navigate = useNavigate();
  // const openId = localStorage.getItem('openId');
  const [articleId, setArticleId] = useState(0); // 文章的ID，如果是0说明是新增加，如果不是0，说明是修改
  const [articleTitle, setArticleTitle] = useState(""); //文章标题
  const [articleContent, setArticleContent] = useState(""); //markdown的编辑内容
  const [markdownContent, setMarkdownContent] = useState("预览内容"); //html内容
  const [introducemd, setIntroducemd] = useState(); //简介的markdown内容
  const [introducehtml, setIntroducehtml] = useState("等待编辑"); //简介的html内容
  const [showDate, setShowDate] = useState(); //发布日期
  // const [updateDate, setUpdateDate] = useState(); //修改日志的日期
  const [typeInfo, setTypeInfo] = useState([]); // 文章类别信息
  const [selectedType, setSelectType] = useState(1); //选择的文章类别

  marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,
  });

  useEffect(() => {
    getTypeInfo();
    // 获得文章ID
    let tmpId = props?.match?.params.id || 0;
    if (tmpId) {
      setArticleId(tmpId);
      getArticleById(tmpId);
    }
  }, []);

  const changeContent = (e) => {
    setArticleContent(e.target.value);
    let html = marked(e.target.value);
    setMarkdownContent(html);
  };

  const changeIntroduce = (e) => {
    setIntroducemd(e.target.value);
    let html = marked(e.target.value);
    setIntroducehtml(html);
  };

  /** 从中台得到文章类别信息 */
  const getTypeInfo = () => {
    axios({
      method: "get",
      url: servicePath.getTypeInfo,
      header: { "Access-Control-Allow-Origin": "*" },
      withCredentials: true,
    }).then((res) => {
      if (res.data.data === "没有登录") {
        sessionStorage.removeItem("openId");
        navigate("/login");
        return;
      } else {
        setTypeInfo(res.data.data);
      }
    });
  };

  const selectTypeHandle = (value) => {
    setSelectType(value);
  };

  const saveArticle = () => {
    // markedContent(); // 先进行转换
    if (!selectedType) {
      message.error("必须选择文章类别");
      return false;
    } else if (!articleTitle) {
      message.error("文章名称不能为空");
      return false;
    } else if (!articleContent) {
      message.error("文章内容不能为空");
      return false;
    } else if (!introducemd) {
      message.error("简介不能为空");
      return false;
    } else if (!showDate) {
      message.error("发布日期不能为空");
      return false;
    }

    let dataProps = {};
    dataProps.type_id = selectedType;
    dataProps.title = articleTitle;
    dataProps.article_content = articleContent;
    dataProps.introduce = introducemd;
    let dataText = showDate.replace("-", "/");
    dataProps.addTime = new Date(dataText).getTime();

    const headers = { "Access-Control-Allow-Origin": "*" };
    if (articleId === 0) {
      const id = new Date().getTime();
      dataProps.id = id;
      setArticleId(id);
      console.log(id);
      console.log("articleId=" + articleId);
      dataProps.view_count = Math.ceil(Math.random() * 100) + 1000;
      axios({
        method: "post",
        url: servicePath.addArticle,
        data: dataProps,
        withCredentials: true,
        headers,
      }).then((res) => {
        setArticleId(res.data.inserId);
        setArticleId(id);
        if (res.data.isSuccess) {
          message.success("文章保存成功");
        } else {
          message.error("文章保存失败");
        }
      });
    } else {
      console.log(articleId);
      dataProps.id = articleId;
      axios({
        method: "post",
        url: servicePath.updateArticle,
        headers,
        data: dataProps,
        withCredentials: true,
      }).then((res) => {
        if (res.data.isSuccess) {
          message.success("文章修改成功");
        } else {
          message.error("修改失败");
        }
      });
    }
  };

  const getArticleById = (id) => {
    const headers = { "Access-Control-Allow-Origin": "*" };
    // if(openId){
    //   headers['authorization'] = openId;
    // }
    axios(servicePath.getArticleById + id, {
      withCredentials: true,
      headers,
    }).then((res) => {
      //let articleInfo= res.data.data[0]
      setArticleTitle(res.data.data[0].title);
      setArticleContent(res.data.data[0].article_content);
      let html = marked(res.data.data[0].article_content);
      setMarkdownContent(html);
      setIntroducemd(res.data.data[0].introduce);
      let tmpInt = marked(res.data.data[0].introduce);
      setIntroducehtml(tmpInt);
      setShowDate(res.data.data[0].addTime);
      setSelectType(res.data.data[0].typeId);
    });
  };

  return (
    <PageContainer>
      <div className={styles.add_article}>
        <Row gutter={5}>
          <Col span={18}>
            <Row gutter={10}>
              <Col span={20}>
                <Input
                  placeholder="博客标题"
                  size="large"
                  onChange={(e) => setArticleTitle(e.target.value)}
                />
              </Col>
              <Col span={4}>
                &nbsp;
                <Select
                  defaultValue={selectedType}
                  size="large"
                  onChange={selectTypeHandle}
                >
                  {/* <Option value="Sign Up">视频教程</Option> */}
                  {typeInfo.map((item, index) => {
                    return (
                      <Option value={item.id} key={index}>
                        {item.typeName}
                      </Option>
                    );
                  })}
                </Select>
              </Col>
            </Row>
            <br />
            <Row gutter={10}>
              <Col span={12}>
                <TextArea
                  value={articleContent}
                  className="markdown-content"
                  rows={35}
                  placeholder="文章内容"
                  onChange={changeContent}
                  onPressEnter={changeContent}
                />
              </Col>
              <Col span={12}>
                <div
                  className="show-html"
                  dangerouslySetInnerHTML={{ __html: markdownContent }}
                ></div>
              </Col>
            </Row>
          </Col>
          <Col span={6}>
            <Row>
              <Col span={24}>
                <Button size="large">暂存文章</Button>&nbsp;
                <Button type="primary" size="large" onClick={saveArticle}>
                  发布文章
                </Button>
                <br />
              </Col>
              <Col span={24}>
                <br />
                <TextArea
                  rows={4}
                  placeholder="文章简介"
                  value={introducemd}
                  onChange={changeIntroduce}
                  onPressEnter={changeIntroduce}
                />
                <br />
                <br />
                <div
                  className="introduce-html"
                  dangerouslySetInnerHTML={{
                    __html: "文章简介: " + introducehtml,
                  }}
                ></div>
              </Col>
              <Col span={12}>
                <div className="date-select">
                  <DatePicker
                    placeholder="发布日期"
                    size="large"
                    onChange={(data, dataString) => setShowDate(dataString)}
                  />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </PageContainer>
  );
};

export default Index;
