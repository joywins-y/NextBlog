const ipURL = "http://127.0.0.1:7001/default/";

const servicePath = {
  checkLogin: ipURL + 'checkLogin', // 检查用户名密码是否正确
  getTypeInfo: ipURL + 'getTypeInfo', // 获得文章类别信息
};

export default servicePath;
