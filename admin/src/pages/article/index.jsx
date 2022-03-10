import { PageContainer } from '@ant-design/pro-layout';
import { Button, Col, List, message, Modal, Row, Space } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import servicePath from '../../config/apiURL';
import ProTable from '@ant-design/pro-table';
import { useNavigate } from 'react-router';

const Index = (props) => {
  const [list, setList] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    getList();
  }, []);

  //得到文章列表
  const getList = () => {
    axios({
      method: 'get',
      url: servicePath.getArticleList,
      withCredentials: true,
      header: { 'Access-Control-Allow-Origin': '*' },
    }).then((res) => {
      setList(res.data.list);
    });
  };

  //删除文章的方法
  const delArticle = (id) => {
    Modal.confirm({
      title: '确定要删除这篇博客文章吗?',
      content: '如果你点击OK按钮，文章将会永远被删除，无法恢复。',
      onOk() {
        axios(servicePath.delArticle + id, { withCredentials: true }).then(
          (res) => {
            message.success('文章删除成功');
            getList();
          }
        );
      },
      onCancel() {
        message.info('没有任何改变');
      },
    });
  };

  //修改文章
  const updateArticle = (id, checked) => {
    // props.history.push('/index/add/' + id);
    navigate(`/article/update/${id}`);
  };

  const columns = [
    { title: '文章ID', dataIndex: 'id', align: 'center' },
    { title: '标题', dataIndex: 'title', align: 'center' },
    { title: '类别', dataIndex: 'typeName', align: 'center' },
    { title: '发布时间', dataIndex: 'addTime', align: 'center' },
    { title: '集数', dataIndex: 'part_count', align: 'center' },
    { title: '浏览量', dataIndex: 'view_count', align: 'center' },
    { title: '操作', dataIndex: 'option', align: 'center', render: (_, record) => {
      return <Space>
        <Button type="primary" onClick={() => updateArticle(record.id)}>修改</Button>
        <Button  onClick={() => delArticle(record.id)}>删除</Button>
      </Space>
    } },
  ];

  return (
    <PageContainer>
      <ProTable
        columns={columns}
        dataSource={list}
        options={false}
        pagination={{ pageSize: 10 }}
      />
      {/* <div>
        <List
          header={
            <Row className="list-div">
              <Col span={8}>
                <b>标题</b>
              </Col>
              <Col span={3}>
                <b>类别</b>
              </Col>
              <Col span={3}>
                <b>发布时间</b>
              </Col>
              <Col span={3}>
                <b>集数</b>
              </Col>
              <Col span={3}>
                <b>浏览量</b>
              </Col>

              <Col span={4}>
                <b>操作</b>
              </Col>
            </Row>
          }
          bordered
          dataSource={list}
          renderItem={(item) => (
            <List.Item>
              <Row className="list-div">
                <Col span={8}>{item.title}</Col>
                <Col span={3}>{item.typeName}</Col>
                <Col span={3}>{item.addTime}</Col>
                <Col span={3}>
                  共<span>{item.part_count}</span>集
                </Col>
                <Col span={3}>{item.view_count}</Col>

                <Col span={4}>
                  <Button type="primary" onClick={() => updateArticle(item.id)}>
                    修改
                  </Button>
                  &nbsp;
                  <Button onClick={() => delArticle(item.id)}>删除</Button>
                </Col>
              </Row>
            </List.Item>
          )}
        />
      </div>
    */}
    </PageContainer>
  );
};

export default Index;
