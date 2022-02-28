import Image from "next/image";
import styles from "./index.module.scss";
import { sites, toolList } from "./utils";

const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <div className="footer-div">
        <ul className="tool-list">
          {toolList.map((tool) => {
            return (
              <li className={`li-${tool.value}`} key={tool.value}>
                <a href={tool.url} target="_blank" rel="noreferrer">
                  <Image src={tool.img} width={30} height={30} alt={tool.value} />
                  <div className="tool-desc">
                    <div className="hide-desc"></div>
                    <div className="inner">
                      <p className="title">{tool.title}</p>
                      <p className="description">{tool.desc}</p>
                    </div>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
        <div>
          <div>系统由 React + Node + Ant Desgin 驱动 </div>
          <div>joywins-y.com</div>
        </div>

        <div className="you">
          <div className="social-btns">
            {sites.map((site, index) => {
              return (
                <a key={index} href="#" className={`btn ${site}`}>
                  <i className={`fa fa-${site}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
