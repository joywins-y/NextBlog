'use strict';

const Controller = require('egg').Controller;

class MainController extends Controller {
  async index() {
    // 首页的文章列表数据
    this.ctx.body = 'hi api';
  }

  /** 判断用户名密码是否正确 */
  async checkLogin() {
    console.log('Login============');
    const userName = this.ctx.request.body.userName;
    const password = this.ctx.request.body.password;
    console.log(userName);
    console.log(password);
    const sql = "SELECT userName FROM admin_user WHERE userName = '" + userName +
                  "' AND password = '" + password + "'";
    const res = await this.app.mysql.query(sql);
    console.log(res);
    if (res.length > 0) {
      // 登录成功，进行session缓存
      const openId = new Date().getTime();
      this.ctx.session.openId = openId;
      this.ctx.body = { data: '登录成功', openId };
    } else {
      this.ctx.body = { data: '登录失败' };
    }
  }

  /** 后台文章分类信息 */
  async getTypeInfo() {
    console.log('get=============');
    const result = await this.app.mysql.select('type');
    console.log(result);
    this.ctx.body = { data: result };
  }

  // 添加文章
  async addArticle() {
    const tmpArticle = this.ctx.request.body;
    // tmpArticle.
    const result = await this.app.mysql.insert('article', tmpArticle);
    console.log(result);
    const sql = 'SELECT LAST_INSERT_ID()';
    const lastInsert = await this.app.mysql.query(sql);
    console.log(lastInsert);
    const insertSuccess = result.affectedRows === 1;
    const insertId = result.insertId;

    this.ctx.body = {
      isSuccess: insertSuccess, insertId,
    };
  }

  // 修改文章
  async updateArticle() {
    const tmpArticle = this.ctx.request.body;
    const result = await this.app.mysql.update('article', tmpArticle);
    const updateSuccess = result.affectedRows === 1;
    console.log(updateSuccess);
    this.ctx.body = { isSuccess: updateSuccess };
  }

  // 获得文章列表
  async getArticleList() {
    const sql = 'SELECT article.id as id,' +
              'article.title as title,' +
              'article.introduce as introduce,' +
              "FROM_UNIXTIME(article.addTime,'%Y-%m-%d' ) as addTime," +
              'type.typeName as typeName ' +
              'FROM article LEFT JOIN type ON article.type_id = type.Id ' +
              'ORDER BY article.id DESC ';
    const resList = await this.app.mysql.query(sql);
    this.ctx.body = { list: resList };
  }

  // 删除文章
  async delArticle() {
    const id = this.ctx.params.id;
    const res = await this.app.mysql.delete('article', { id });
    this.ctx.body = { data: res };
  }


  // 根据文章ID得到文章详情，用于修改文章
  async getArticleById() {
    const id = this.ctx.params.id;
    const sql = 'SELECT article.id as id,' +
    'article.title as title,' +
    'article.introduce as introduce,' +
    'article.article_content as article_content,' +
    "FROM_UNIXTIME(article.addTime,'%Y-%m-%d' ) as addTime," +
    'article.view_count as view_count ,' +
    'type.typeName as typeName ,' +
    'type.id as typeId ' +
    'FROM article LEFT JOIN type ON article.type_id = type.Id ' +
    'WHERE article.id=' + id;
    const result = await this.app.mysql.query(sql);
    this.ctx.body = { data: result };
  }
}

module.exports = MainController;
