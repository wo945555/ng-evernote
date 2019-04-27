import express from 'express'

//为所有controller构造一个公共的父类
//用以校验引用controllers的函数、装饰器
export default class BaseController{
  autoRoute(req: express.Request, res: express.Response) :any{

  }
}