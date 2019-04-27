"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//导出路由集合Map key:路由配置的对象， value: controller定义的方法
var RouterMap = /** @class */ (function () {
    function RouterMap() {
    }
    RouterMap.routers = new Map();
    return RouterMap;
}());
exports.RouterMap = RouterMap;
//导出将装饰controllers的装饰器
function router(path, method) {
    return function (target, name, descriptor) {
        console.log('name:', name);
        RouterMap.routers.set({
            target: target,
            method: method,
            path: path
        }, target[name]);
    };
}
exports.router = router;
