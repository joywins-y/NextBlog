const ipURL = "http://127.0.0.1:7001/default/";

const servicePath = {
  getArticleList: ipURL + "getArticleList", // 首页文章列表接口
  getArticleById: ipURL + "getArticleById/", // 文章详情页内容接口
  getTypeInfo: ipURL + "getTypeInfo", // 类型信息接口
  getListById: ipURL + "getListById/", // 根据类别ID获取文章列表
  checkLogin: ipURL + 'checkLogin', // 检查用户名密码是否正确
};

export default servicePath;
