const ipURL = "http://127.0.0.1:7001/default/";

const servicePath = {
  checkLogin: ipURL + "checkLogin", // 检查用户名密码是否正确
  getTypeInfo: ipURL + "getTypeInfo", // 获得文章类别信息
  addArticle: ipURL + "addArticle", // 添加文章
  updateArticle: ipURL + "updateArticle", // 修改文章
  getArticleList: ipURL + "getArticleList", // 文章列表
  delArticle: ipURL + "delArticle/", // 删除文章
  getArticleById: ipURL + "getArticleById/", // 根据ID获得文章详情
};

export default servicePath;
