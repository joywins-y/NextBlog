import { GithubOutlined, QqOutlined, WechatOutlined } from "@ant-design/icons";
import { Avatar, Divider } from "antd";
import author from "../../pages/assets/author.jpeg";
import styles from "./index.module.scss";

const Author = () => {
  return (
    <div className={styles.author_container}>
      <div className="author-div comm-box">
        <div>
          <Avatar size={100} src={author} />
        </div>
        <div className="author-introduction">
          hhhh
          <Divider>社交账号</Divider>
          <Avatar size={28} icon={<GithubOutlined />} className="account" />
          <Avatar size={28} icon={<QqOutlined />} className="account" />
          <Avatar size={28} icon={<WechatOutlined />} className="account" />
        </div>
      </div>
    </div>
  );
};

export default Author;
