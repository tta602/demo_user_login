"use strict";

const { logoutAllUserKey } = require("../config/config.app");
const { BadRequestError } = require("../core/error.response");
const {
  CREATED,
  OK,
  SuccessResponse,
  GETLISTOK,
} = require("../core/success.response");
const ErrorMessage = require("../enum/error.message");
const userValidate = require("../helpers/validate/user.validate");
const BaseController = require("./base/base.controller");
const AppRouterName = require("../routers/router.name");

//services
const UserService = require("../services/user.service");

class UserController extends BaseController {
  
  register = async (req, res, next) => {
    super.validate(req.body, userValidate.registerValidate);

    await new CREATED({
      ...(await UserService.register(req.body,)),
    }).send(req, res, {
      deleteCaching: true,
      deleteOptions: [AppRouterName.user],
    });
  };

  login = async (req, res, next) => {
    console.log(req.body);
    this.validate(req.body, userValidate.login);

    await new SuccessResponse({
      ...(await UserService.login(req.body)),
    }).send(req, res);
  };

  logout = async (req, res, next) => {
    await new SuccessResponse({
      ...(await UserService.logout({
        userId: req.user.userId,
      })),
    }).send(req, res);
  };

  getUserCurrent = async (req, res, next) => {
    const result = await UserService.getCurrentUser(req.user.userId);

    //check null
    super.checkDataNotNull(result, ErrorMessage.USER_NOT_FOUND);

    new SuccessResponse({
      message: "",
      data: result,
    }).send(req, res, {
      saveCaching: true,
    });
  };
}

module.exports = new UserController();
