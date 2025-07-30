"use strict";

const express = require("express");
const {
  authentication,
  isPermission,
  authForgotPassOtp,
} = require("../../auth/authUtils");

// const { 
//   isCaching, 
//   isLimitRequest 
// } = require("../../middelware/is_limit");

// const { grantAccess } = require("../../middelware/rbac");
// const { RoleActionEnum, SubResourceCodeEnum } = require("../../enum/role.enum");

const userController = require("../../controllers/user.controller");
const asyncHandler = require("../../helpers/asyncHandler");

const router = express.Router();

router.post("/login", asyncHandler(userController.login));

router.post("/register", asyncHandler(userController.register));

/// authentication ////
router.use(authentication);

router.post("/logout", asyncHandler(userController.logout));

router.get("/current", asyncHandler(userController.getUserCurrent));

module.exports = router;
