/*
 Navicat Premium Data Transfer

 Source Server         : 本地-MySQL-5.7.18
 Source Server Type    : MySQL
 Source Server Version : 50718
 Source Host           : localhost:3306
 Source Schema         : test2

 Target Server Type    : MySQL
 Target Server Version : 50718
 File Encoding         : 65001

 Date: 07/06/2021 23:23:27
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for express
-- ----------------------------
DROP TABLE IF EXISTS `express`;
CREATE TABLE `express` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `express_id` int(10) unsigned DEFAULT '0' COMMENT '物流ID',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Table structure for mony
-- ----------------------------
DROP TABLE IF EXISTS `mony`;
CREATE TABLE `mony` (
  `id` int(11) NOT NULL COMMENT '主键',
  `order_id` int(11) NOT NULL COMMENT '主订单ID',
  `sub_order_id` int(11) NOT NULL COMMENT '子订单ID',
  `buyer_id` int(11) NOT NULL COMMENT '买家ID',
  `seller_id` int(11) NOT NULL COMMENT '卖家ID',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Table structure for sold
-- ----------------------------
DROP TABLE IF EXISTS `sold`;
CREATE TABLE `sold` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Table structure for ticket
-- ----------------------------
DROP TABLE IF EXISTS `ticket`;
CREATE TABLE `ticket` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `ticket_id` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '工单ID',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Table structure for todo
-- ----------------------------
DROP TABLE IF EXISTS `todo`;
CREATE TABLE `todo` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` datetime NOT NULL DEFAULT '1970-01-01 00:00:00' COMMENT '创建时间',
  `shop_id` bigint(20) unsigned NOT NULL DEFAULT '0' COMMENT '店铺ID',
  `type` tinyint(1) unsigned NOT NULL DEFAULT '0' COMMENT '类型',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

SET FOREIGN_KEY_CHECKS = 1;
