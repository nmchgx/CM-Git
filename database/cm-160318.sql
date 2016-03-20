-- MySQL dump 10.13  Distrib 5.7.9, for osx10.9 (x86_64)
--
-- Host: 127.0.0.1    Database: cm
-- ------------------------------------------------------
-- Server version	5.7.11

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `company`
--

DROP TABLE IF EXISTS `company`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `company` (
  `company_id` int(11) NOT NULL AUTO_INCREMENT,
  `account` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `area` varchar(255) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `industry` varchar(255) DEFAULT NULL,
  `business` varchar(255) DEFAULT NULL,
  `contact` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `post` varchar(255) DEFAULT NULL,
  `tel` varchar(255) DEFAULT NULL,
  `fax` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `check` varchar(255) NOT NULL DEFAULT 'false',
  PRIMARY KEY (`company_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company`
--

LOCK TABLES `company` WRITE;
/*!40000 ALTER TABLE `company` DISABLE KEYS */;
INSERT INTO `company` VALUES (1,'11201','123','0531','济南','c1','阿里巴巴','上市','互联网','网购','马云','北京市海淀区中关村1号','100000','13269175020','0102834561','577528241@qq.com','true'),(2,'11202','456','0532','青岛','c2','美团','上市','互联网','外卖','刘云','北京市海淀区中关村2号','100000','13269175021','0102834560','577528242@qq.com','true'),(3,'11203','789','0533','淄博','c3','腾讯','上市','互联网','社交','马化腾','北京市海淀区中关村3号','100000','13269175023','0102834562','577528243@qq.com','false'),(4,'11204','321','0534','德州','c4','锤子科技','上市','互联网','手机','罗永浩','北京市海淀区中关村4号','100000','13269175024','0102834563','577528244@qq.com','false'),(5,'11205','654','0535','烟台','c5','小米','私有','互联网','手机','雷军','北京市海淀区中关村5号','100000','13269175025','0102834564','577528245@qq.com','true'),(6,'11206','987','0536','潍坊','c6','魅族','上市','互联网','手机','黄章','北京市海淀区中关村6号','100000','13269175026','0102834565','577528246@qq.com','true'),(7,'11207','qwe','0537','济宁','c7','盛大','上市','互联网','游戏','陈天桥','北京市海淀区中关村7号','100000','13269175027','0102834567','577528247@qq.com','false'),(8,'11208','rty','0538','泰安','c8','网易','上市','互联网','游戏','黄磊','北京市海淀区中关村8号','100000','13269175028','0102834568','577528248@qq.com','false'),(9,'11209','asd','0539','临沂','c9','万达','上市','房地产','房地产','王健林','北京市海淀区中关村9号','100000','13269175029','0102834569','577528249@qq.com','true');
/*!40000 ALTER TABLE `company` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `data`
--

DROP TABLE IF EXISTS `data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `data` (
  `data_id` int(11) NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `status` varchar(255) NOT NULL,
  `company_id` int(11) NOT NULL,
  `employment_last` int(11) NOT NULL,
  `employment_now` int(11) NOT NULL,
  `reason` varchar(255) NOT NULL,
  `type` varchar(255) DEFAULT NULL,
  `first_reason` varchar(255) DEFAULT NULL,
  `first_explain` varchar(255) DEFAULT NULL,
  `second_reason` varchar(255) DEFAULT NULL,
  `second_explain` varchar(255) DEFAULT NULL,
  `third_reason` varchar(255) DEFAULT NULL,
  `third_explain` varchar(255) DEFAULT NULL,
  `schedule_id` int(11) NOT NULL,
  PRIMARY KEY (`data_id`),
  KEY `company_id` (`company_id`),
  KEY `schedule_id` (`schedule_id`),
  CONSTRAINT `data_ibfk_1` FOREIGN KEY (`company_id`) REFERENCES `company` (`company_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `data_ibfk_2` FOREIGN KEY (`schedule_id`) REFERENCES `schedule` (`schedule_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `data`
--

LOCK TABLES `data` WRITE;
/*!40000 ALTER TABLE `data` DISABLE KEYS */;
INSERT INTO `data` VALUES (1,'2016-01-11 01:23:45','已上报',1,100,20,'老板跑路','裁员','公司转型失败','公司转型失败，资金周转困难','投资人撤资','投资人撤离资金','公司管理混乱','中层人员与竞争公司勾结',1),(2,'2016-01-11 01:34:34','未通过',2,200,50,'工资低','降薪','投资人撤资','投资人撤离资金','公司管理混乱','中层人员与竞争公司勾结','公司转型失败','公司转型失败，资金周转困难',2),(3,'2016-01-11 01:56:23','通过',3,300,60,'工资低','裁员','公司管理混乱','中层人员与竞争公司勾结','投资人撤离资金','投资人撤资','公司转型失败','公司转型失败，资金周转困难',3),(4,'2016-01-10 18:23:45','已上报',4,150,80,'环境差','降薪','投资人撤资','投资人撤离资金','公司管理混乱','中层人员与竞争公司勾结','公司转型失败','公司转型失败，资金周转困难',4),(5,'2016-02-11 01:23:45','通过',5,200,110,'工资低','裁员','公司管理混乱','中层人员与竞争公司勾结','投资人撤离资金','投资人撤资','公司转型失败','公司转型失败，资金周转困难',5);
/*!40000 ALTER TABLE `data` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inform`
--

DROP TABLE IF EXISTS `inform`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `inform` (
  `inform_id` int(11) NOT NULL AUTO_INCREMENT,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `title` varchar(255) NOT NULL,
  `content` varchar(255) NOT NULL,
  PRIMARY KEY (`inform_id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inform`
--

LOCK TABLES `inform` WRITE;
/*!40000 ALTER TABLE `inform` DISABLE KEYS */;
INSERT INTO `inform` VALUES (21,'2016-01-11 01:23:45','失业人数创新低','在人民群众与政府的鼓励就业政策下，就业比例持续增高，失业率持续走低'),(22,'2016-01-11 01:45:45','政府鼓励创业','为了鼓励创业，政府推出来鼓励创业政策，鼓励人民群众积极参与'),(23,'2016-01-12 01:23:45','政府积极努力解决人民群众就业问题','就业问题如今已成为中国的一座大山，政府解决就业刻不容缓');
/*!40000 ALTER TABLE `inform` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `province`
--

DROP TABLE IF EXISTS `province`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `province` (
  `province_id` int(11) NOT NULL AUTO_INCREMENT,
  `account` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`province_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `province`
--

LOCK TABLES `province` WRITE;
/*!40000 ALTER TABLE `province` DISABLE KEYS */;
INSERT INTO `province` VALUES (1,'22201','123'),(2,'22202','456'),(3,'22203','789');
/*!40000 ALTER TABLE `province` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `schedule`
--

DROP TABLE IF EXISTS `schedule`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `schedule` (
  `schedule_id` int(11) NOT NULL,
  `year` int(11) NOT NULL,
  `month` int(11) NOT NULL,
  `start` timestamp NULL DEFAULT NULL,
  `end` timestamp NULL DEFAULT NULL,
  `is_report` int(255) NOT NULL DEFAULT '0',
  PRIMARY KEY (`schedule_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `schedule`
--

LOCK TABLES `schedule` WRITE;
/*!40000 ALTER TABLE `schedule` DISABLE KEYS */;
INSERT INTO `schedule` VALUES (1,2016,1,'2016-01-11 01:23:45','2016-05-11 01:23:45',1),(2,2016,2,'2016-01-11 01:34:34','2016-05-11 03:23:45',0),(3,2016,3,'2016-01-11 01:56:23','2016-05-13 01:23:45',1),(4,2016,4,'2016-01-10 18:23:45','2016-06-11 01:23:45',0),(5,2016,5,'2016-02-11 01:23:45','2016-09-11 01:23:45',1);
/*!40000 ALTER TABLE `schedule` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-03-18 15:54:31
