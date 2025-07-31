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

/**
 * @swagger
 * /api/v1/user/login:
 *   post:
 *     summary: Login user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: user001
 *               password:
 *                 type: string
 *                 example: T@123456
 *             required:
 *               - username
 *               - password
 *     responses:
 *       200:
 *         description: Login successful
 *       400:
 *         description: Invalid credentials
 */
router.post("/login", asyncHandler(userController.login));

/**
 * @swagger
 * /api/v1/user/register:
 *   post:
 *     summary: Register a new user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               fullName:
 *                 type: string
 *                 example: Nguyen Van A
 *               username:
 *                 type: string
 *                 example: user001
 *               password:
 *                 type: string
 *                 example: T@123456
 *               confirmPassword:
 *                 type: string
 *                 example: T@123456
 *             required:
 *               - fullName
 *               - username
 *               - password
 *               - confirmPassword
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Validation error or user already exists
 */

router.post("/register", asyncHandler(userController.register));

/// authentication ////
router.use(authentication);

/**
 * @swagger
 * /api/v1/user/logout:
 *   post:
 *     summary: Logout user
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *       - clientId: []
 *     responses:
 *       200:
 *         description: Logout successful
 *       401:
 *         description: Unauthorized
 */
router.post("/logout", asyncHandler(userController.logout));

/**
 * @swagger
 * /api/v1/user/current:
 *   get:
 *     summary: Get current logged-in user info
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *       - clientId: []
 *     responses:
 *       200:
 *         description: Success
 *       401:
 *         description: Unauthorized
 */
router.get("/current", asyncHandler(userController.getUserCurrent));

module.exports = router;
