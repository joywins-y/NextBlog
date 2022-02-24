import Image from 'next/image';
import styles from './index.module.scss';
import vscode from '/pages/assets/vscode.png';

const Footer = () => {
  const colors = ["#2C2C31","#FFFFFF","#38C8FE","#1990FF","#FB7299","#FFFFFF","#000000","#40485A","#3160F4", "#FFFFFF"];

  return (
    <div className={styles.footer_container}>
      <div className="footer-div">
        <ul className="tool-list">
          <li>
            <a
              href="https://code.visualstudio.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={vscode} width={30} height={30} alt="vscode" />
              <div className="tool-desc">
                <div className="hide-desc"></div>
                <div className="inner">
                  <p className="title">VS Code</p>
                  <p className="description">
                    我们现在主要开发工具，懂的都懂！
                  </p>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a
              href="https://code.visualstudio.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={vscode} width={30} height={30} alt="vscode" />
              <div className="tool-desc">
                <div className="hide-desc"></div>
                <div className="inner">
                  <p className="title">VS Code</p>
                  <p className="description">
                    我们现在主要开发工具，懂的都懂！
                  </p>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a
              href="https://code.visualstudio.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={vscode} width={30} height={30} alt="vscode" />
              <div className="tool-desc">
                <div className="hide-desc"></div>
                <div className="inner">
                  <p className="title">VS Code</p>
                  <p className="description">
                    我们现在主要开发工具，懂的都懂！
                  </p>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a
              href="https://code.visualstudio.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={vscode} width={30} height={30} alt="vscode" />
              <div className="tool-desc">
                <div className="hide-desc"></div>
                <div className="inner">
                  <p className="title">VS Code</p>
                  <p className="description">
                    我们现在主要开发工具，懂的都懂！
                  </p>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a
              href="https://code.visualstudio.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={vscode} width={30} height={30} alt="vscode" />
              <div className="tool-desc">
                <div className="hide-desc"></div>
                <div className="inner">
                  <p className="title">VS Code</p>
                  <p className="description">
                    我们现在主要开发工具，懂的都懂！
                  </p>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a
              href="https://code.visualstudio.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={vscode} width={30} height={30} alt="vscode" />
              <div className="tool-desc">
                <div className="hide-desc"></div>
                <div className="inner">
                  <p className="title">VS Code</p>
                  <p className="description">
                    我们现在主要开发工具，懂的都懂！
                  </p>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a
              href="https://code.visualstudio.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={vscode} width={30} height={30} alt="vscode" />
              <div className="tool-desc">
                <div className="hide-desc"></div>
                <div className="inner">
                  <p className="title">VS Code</p>
                  <p className="description">
                    我们现在主要开发工具，懂的都懂！
                  </p>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a
              href="https://code.visualstudio.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={vscode} width={30} height={30} alt="vscode" />
              <div className="tool-desc">
                <div className="hide-desc"></div>
                <div className="inner">
                  <p className="title">VS Code</p>
                  <p className="description">
                    我们现在主要开发工具，懂的都懂！
                  </p>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a
              href="https://code.visualstudio.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={vscode} width={30} height={30} alt="vscode" />
              <div className="tool-desc">
                <div className="hide-desc"></div>
                <div className="inner">
                  <p className="title">VS Code</p>
                  <p className="description">
                    我们现在主要开发工具，懂的都懂！
                  </p>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a
              href="https://code.visualstudio.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={vscode} width={30} height={30} alt="vscode" />
              <div className="tool-desc">
                <div className="hide-desc"></div>
                <div className="inner">
                  <p className="title">VS Code</p>
                  <p className="description">
                    我们现在主要开发工具，懂的都懂！
                  </p>
                </div>
              </div>
            </a>
          </li>
        </ul>
        <div>
          <div>系统由 React+Node+Ant Desgin驱动 </div>
          <div>JSPang.com</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
