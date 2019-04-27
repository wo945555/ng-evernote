import BaseController from "../controllers/BaseController";

type methodName = 'get' | 'post' | 'put' | 'delete';
//路由配置的接口
interface IRouter {
  target: BaseController,
  method: methodName,
  path: string
}
interface IController {
  [propName: string]: any
}
//导出路由集合Map key:路由配置的对象， value: controller定义的方法
export class RouterMap {
  static routers: Map<IRouter, any> = new Map();
}

//导出将装饰controllers的装饰器
export function router(path: string, method: methodName) {
  return function (target: BaseController, name: string, descriptor: PropertyDescriptor) {
    console.log('name:',name)
    RouterMap.routers.set({
      target: target,
      method: method,
      path: path
    }, (<IController>target)[name]);
 }
}