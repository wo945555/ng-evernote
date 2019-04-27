"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//为所有controller构造一个公共的父类
//用以校验引用controllers的函数、装饰器
var BaseController = /** @class */ (function () {
    function BaseController() {
    }
    BaseController.prototype.autoRoute = function (req, res) {
    };
    return BaseController;
}());
exports.default = BaseController;
