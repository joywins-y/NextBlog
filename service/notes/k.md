# 关于本项目所遇到的问题记录

## 问题一：关于egg.js在中间件中无法获取session跟cookie的原因
问题：使用中间件middleware判断是否登录，来进行页面跳转出现问题（关于egg.js在中间件中无法获取session跟cookie的原因）
解决：ctx.session.openId 一直获取不到，通过修改apiURL.js中的ipURl：
const ipURL = "http://127.0.0.1:7001/admin/"; ==> const ipURL = "http://localhost:7001/admin/";
参考：https://www.qiyuandi.com/zhanzhang/zonghe/8286.html

## 问题二：关于props是空值，无法控制页面跳转的问题
问题：Login文件夹下index.jsx登录成功或失败都会进行页面的跳转，但是props是空的，props.history.push("/index");无效
解决：
    使用如下代码替代：
    import { useNavigate } from "react-router-dom";
    const navigate = useNavigate();
    navigate("/index");

## 问题三：关于添加文章成功但修改提交失败的问题
问题：添加文章成功后，页面不刷新，原意是在此基础上直接进行修改的话，就是相当于修改文章内容了。再次点击发布时，数据获取文章信息，并获取之前新增文章时返回的insertId，进行文章的update。但是数据库的文章id并不是设置的自增，所以返回的insertId始终为0，导致update失败。
解决：

## 问题四：非自增ID字段，存储13位时间戳失败
问题：非自增ID字段，存储13位时间戳失败
原因：id 设置的数据类型为 int
解决：13位超出int范围，修改为bigint即可
参考：https://blog.csdn.net/helloxiaozhe/article/details/83269152

## 问题五：引入antd css后出现错误警告
问题：引入antd css样式输出Failed to parse source map: 'webpack://antd/./components/time-picker/style/index.less' URL is not supported等信息。虽然不影响项目运行，但始终觉得应该解决该警告错误。
原因：react-script升级到5.0.0之后出现这个警告，问题从14号开始，所有通过npx create-react-app创建的项目，antd.css之后都会看到这个。
解决：使用import 'antd/dist/antd.min.css'; 替换 import 'antd/dist/antd.css
参考：https://github.com/ant-design/ant-design/issues/33327


关于使用样式文件less，原意是使用index.less，然后使用import styles from './index.less'; 的引入方式，但是查找资料发现需要暴露webpack配置，并进行修改，于是改用sass。
参考：https://segmentfault.com/a/1190000018858055
参考：https://create-react-app.dev/docs/adding-a-sass-stylesheet