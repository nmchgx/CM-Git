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
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company`
--

LOCK TABLES `company` WRITE;
/*!40000 ALTER TABLE `company` DISABLE KEYS */;
INSERT INTO `company` VALUES (1,'11201','123','0531','济南','c1','阿里巴巴','上市','互联网','网购','马云','北京市海淀区中关村1号','100000','13269175020','0102834561','577528241@qq.com','true'),(2,'11202','456','0532','青岛','c2','美团','上市','互联网','外卖','刘云','北京市海淀区中关村2号','100000','13269175021','0102834560','577528242@qq.com','true'),(3,'11203','789','0533','淄博','c3','腾讯','上市','互联网','社交','马化腾','北京市海淀区中关村3号','100000','13269175023','0102834562','577528243@qq.com','false'),(4,'11204','321','0534','德州','c4','锤子科技','上市','互联网','手机','罗永浩','北京市海淀区中关村4号','100000','13269175024','0102834563','577528244@qq.com','false'),(5,'11205','654','0535','烟台','c5','小米','私有','互联网','手机','雷军','北京市海淀区中关村5号','100000','13269175025','0102834564','577528245@qq.com','true'),(6,'11206','987','0536','潍坊','c6','魅族','上市','互联网','手机','黄章','北京市海淀区中关村6号','100000','13269175026','0102834565','577528246@qq.com','true'),(7,'11207','qwe','0537','济宁','c7','盛大','上市','互联网','游戏','陈天桥','北京市海淀区中关村7号','100000','13269175027','0102834567','577528247@qq.com','false'),(8,'11208','rty','0538','泰安','c8','网易','上市','互联网','游戏','黄磊','北京市海淀区中关村8号','100000','13269175028','0102834568','577528248@qq.com','false'),(9,'11209','asd','0539','临沂','c9','万达','上市','房地产','房地产','王健林','北京市海淀区中关村9号','100000','13269175029','0102834569','577528249@qq.com','true'),(10,'11210','zxc','0535','烟台','c10','恒大地产','私有','房地产','房地产','张春','北京市海淀区中关村10号','100000','13269175030','0102834570','577528250@qq.com','true'),(11,'11211','zxc','0538','泰安','c11','万科','上市','房地产','房地产','陈晨','北京市海淀区中关村11号','100000','13269175031','0102834571','577528251@qq.com','false'),(12,'11212','zxc','0539','临沂','c12','恒大地产','私有','房地产','房地产','郑阳春','北京市海淀区中关村12号','100000','13269175032','0102834572','577528252@qq.com','true'),(13,'11213','zxc','0535','烟台','c13','平安保险','私有','保险','保险','曹艳辉','北京市海淀区中关村13号','100000','13269175033','0102834573','577528253@qq.com','true'),(14,'11214','qwe','0538','泰安','c14','人寿保险','上市','保险','保险','张平','北京市海淀区中关村14号','100000','13269175034','0102834574','577528254@qq.com','false'),(15,'11215','zxc','0539','临沂','c15','美图','私有','互联网','房地产','王平','北京市海淀区中关村15号','100000','13269175035','0102834575','577528255@qq.com','false'),(16,'11216','qwe','0536','潍坊','c16','软通动力','上市','互联网','外包','李平','北京市海淀区中关村16号','100000','13269175036','0102834576','577528256@qq.com','true'),(17,'11217','zxc','0536','潍坊','c17','华为','上市','硬件','手机','杨平','北京市海淀区中关村17号','100000','13269175037','0102834577','577528257@qq.com','false'),(18,'11218','654','0539','临沂','c18','一加科技','私有','硬件','手机','吴萍','北京市海淀区中关村18号','100000','13269175038','0102834578','577528258@qq.com','false'),(19,'11219','654','0538','泰安','c19','人人科技','上市','互联网','互联网','罗平','北京市海淀区中关村19号','100000','13269175039','0102834579','577528259@qq.com','true'),(20,'11220','654','0539','临沂','c20','知乎','私有','互联网','互联网','张自忠','北京市海淀区中关村20号','100000','13269175040','0102834580','577528260@qq.com','false');
/*!40000 ALTER TABLE `company` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `data`
--

DROP TABLE IF EXISTS `data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `data` (
  `data_id` int(11) NOT NULL AUTO_INCREMENT,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `status` varchar(255) NOT NULL DEFAULT '已上报',
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
  KEY `data_ibfk_2_idx` (`schedule_id`),
  CONSTRAINT `data_ibfk_1` FOREIGN KEY (`company_id`) REFERENCES `company` (`company_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `data_ibfk_2` FOREIGN KEY (`schedule_id`) REFERENCES `schedule` (`schedule_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `data`
--

LOCK TABLES `data` WRITE;
/*!40000 ALTER TABLE `data` DISABLE KEYS */;
INSERT INTO `data` VALUES (1,'2016-01-11 01:23:45','已上报',1,100,20,'老板跑路','裁员','公司转型失败','公司转型失败，资金周转困难','投资人撤资','投资人撤离资金','公司管理混乱','中层人员与竞争公司勾结',1),(2,'2016-01-11 01:34:34','未通过',2,200,50,'工资低','降薪','投资人撤资','投资人撤离资金','公司管理混乱','中层人员与竞争公司勾结','公司转型失败','公司转型失败，资金周转困难',2),(3,'2016-01-11 01:56:23','通过',3,300,60,'工资低','裁员','公司管理混乱','中层人员与竞争公司勾结','投资人撤离资金','投资人撤资','公司转型失败','公司转型失败，资金周转困难',3),(4,'2016-01-10 18:23:45','已上报',4,150,80,'环境差','降薪','投资人撤资','投资人撤离资金','公司管理混乱','中层人员与竞争公司勾结','公司转型失败','公司转型失败，资金周转困难',4),(5,'2016-02-11 01:23:45','通过',5,200,110,'工资低','裁员','公司管理混乱','中层人员与竞争公司勾结','投资人撤离资金','投资人撤资，公司减产','公司转型失败','公司转型失败，资金周转困难',5),(6,'2016-02-20 01:23:49','未通过',6,100,10,'市场发生剧烈变化','辞职','产品滞销','产品失去竞争力','老板自杀','老板破产，压力巨大','员工离职','员工讨薪无果，愤然离职',6),(7,'2016-02-21 01:23:50','已上报',7,1000,500,'中层人员与竞争公司勾结','裁员','公司转型失败','公司转型失败，资金周转困难','公司转型失败','产品失去竞争力','产品滞销','产品失去竞争力',7),(8,'2016-02-21 01:23:51','未通过',8,1000,400,'公司管理混乱','降薪','投资人撤离资金','投资人撤资，公司减产','老板跑路','员工讨薪无果，愤然离职','产品滞销','产品失去竞争力',8),(9,'2016-02-21 01:23:52','未通过',9,200,100,'环境差','裁员','公司转型失败','公司转型失败，资金周转困难','公司转型失败','产品失去竞争力','高管战略选择失误','市场占有率下降',9),(10,'2016-02-22 01:23:49','已上报',10,150,90,'投资人撤离资金','裁员','公司转型失败','公司转型失败，资金周转困难','公司转型失败','产品失去竞争力','竞争对手降价促销','产品销量骤减',10),(11,'2016-02-23 01:23:49','通过',11,100,30,'中层人员与竞争公司勾结','裁员','投资人撤离资金','投资人撤资，公司减产','公司资金周转困难','员工罢工','产品滞销','产品失去竞争力',11),(12,'2016-02-23 03:23:49','未通过',12,1000,100,'投资人撤离资金','辞职','公司转型失败','公司转型失败，资金周转困难','公司转型失败','产品失去竞争力','高管战略选择失误','市场占有率下降',12),(13,'2016-02-24 01:23:49','修改',13,500,180,'公司管理混乱','裁员','投资人撤离资金','投资人撤资，公司减产','公司资金周转困难','员工罢工','竞争对手降价促销','产品销量骤减',13),(14,'2016-02-25 01:23:49','未通过',14,200,130,'环境差','降薪','公司转型失败','公司转型失败，资金周转困难','公司转型失败','产品失去竞争力','产品滞销','产品失去竞争力',14),(15,'2016-02-26 01:23:49','已上报',15,800,200,'公司管理混乱','辞职','投资人撤离资金','投资人撤资，公司减产','公司资金周转困难','员工罢工','高管战略选择失误','市场占有率下降',15),(16,'2016-02-26 16:23:00','重申报',16,500,200,'中层人员与竞争公司勾结','裁员','公司转型失败','公司转型失败，资金周转困难','公司资金周转困难','员工罢工','竞争对手降价促销','产品销量骤减',16),(17,'2016-02-28 01:23:49','已上报',17,200,100,'环境差','辞职','投资人撤离资金','投资人撤资，公司减产','公司转型失败','产品失去竞争力','产品滞销','产品失去竞争力',17),(18,'2016-02-28 02:23:49','未通过',18,800,100,'投资人撤离资金','辞职','公司转型失败','公司转型失败，资金周转困难','公司资金周转困难','员工罢工','竞争对手降价促销','产品销量骤减',18),(19,'2016-02-28 03:23:49','已上报',19,200,50,'中层人员与竞争公司勾结','降薪','投资人撤离资金','投资人撤资，公司减产','公司资金周转困难','员工罢工','产品滞销','产品失去竞争力',19),(20,'2016-02-28 06:23:49','修改',20,500,150,'投资人撤离资金','辞职','公司转型失败','公司转型失败，资金周转困难','公司资金周转困难','员工罢工','产品滞销','产品失去竞争力',20);
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
INSERT INTO `inform` VALUES (1,'2016-01-11 01:23:45','失业人数创新低','在人民群众与政府的鼓励就业政策下，就业比例持续增高，失业率持续走低'),(2,'2016-01-11 01:45:45','政府鼓励创业','为了鼓励创业，政府推出来鼓励创业政策，鼓励人民群众积极参与'),(3,'2016-01-12 01:23:45','政府积极努力解决人民群众就业问题','在人民群众与政府的鼓励就业政策下，就业比例持续增高，失业率持续走低在人民群众与政府的鼓励就业政策下，就业比例持续增高，失业率持续走低'),(4,'2016-01-13 01:23:45','失业人数再创新低','在人民群众与政府的鼓励就业政策下，就业比例持续增高，失业率持续走低'),(5,'2016-01-13 01:23:00','政府积极鼓励创业','为了鼓励创业，政府推出来鼓励创业政策，鼓励人民群众积极参与'),(6,'2016-01-13 01:23:45','政府鼓励创业','为了鼓励创业，政府推出来鼓励创业政策，鼓励人民群众积极参与'),(7,'2016-01-14 01:23:45','失业人数再创新低','在人民群众与政府的鼓励就业政策下，就业比例持续增高，失业率持续走低'),(8,'2016-01-14 02:23:00','政府鼓励创业','为了鼓励创业，政府推出来鼓励创业政策，鼓励人民群众积极参与'),(9,'2016-01-14 02:23:11','政府鼓励创业','在人民群众与政府的鼓励就业政策下，就业比例持续增高，失业率持续走低'),(10,'2016-01-14 02:23:22','政府鼓励创业','在人民群众与政府的鼓励就业政策下，就业比例持续增高，失业率持续走低'),(11,'2016-01-14 02:23:33','失业人数再创新低','在人民群众与政府的鼓励就业政策下，就业比例持续增高，失业率持续走低'),(12,'2016-01-14 02:23:44','政府鼓励创业','为了鼓励创业，政府推出来鼓励创业政策，鼓励人民群众积极参与'),(13,'2016-01-14 02:34:00','政府鼓励创业','为了鼓励创业，政府推出来鼓励创业政策，鼓励人民群众积极参与'),(14,'2016-01-14 02:45:00','政府积极努力解决人民群众就业问题','在人民群众与政府的鼓励就业政策下，就业比例持续增高，失业率持续走低'),(15,'2016-01-17 02:23:00','失业人数再创新低','在人民群众与政府的鼓励就业政策下，就业比例持续增高，失业率持续走低'),(16,'2016-01-18 02:23:00','失业人数再创新低','在人民群众与政府的鼓励就业政策下，就业比例持续增高，失业率持续走低'),(17,'2016-01-19 02:23:00','失业人数再创新低','在人民群众与政府的鼓励就业政策下，就业比例持续增高，失业率持续走低'),(18,'2016-01-20 02:23:00','失业人数再创新低','在人民群众与政府的鼓励就业政策下，就业比例持续增高，失业率持续走低'),(19,'2016-01-21 02:23:00','政府积极努力解决人民群众就业问题','在人民群众与政府的鼓励就业政策下，就业比例持续增高，失业率持续走低'),(20,'2016-01-22 02:23:00','失业人数再创新低','在人民群众与政府的鼓励就业政策下，就业比例持续增高，失业率持续走低');
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
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `province`
--

LOCK TABLES `province` WRITE;
/*!40000 ALTER TABLE `province` DISABLE KEYS */;
INSERT INTO `province` VALUES (1,'22201','123'),(2,'22202','456'),(3,'22203','789'),(4,'22204','qwe'),(5,'22205','weg33e'),(6,'22206','gdfbfdb'),(7,'22207','fdbb'),(8,'22208','wefew'),(9,'22209','wefwg'),(10,'22210','fdbfbgf'),(11,'22211','ymyumu'),(12,'22212','3r43t43'),(13,'22213','sdvxcv'),(14,'22214','sdferger'),(15,'22215','ebr3b'),(16,'22216','ewgb3rg'),(17,'22217','23r2gf'),(18,'22218','ewgrwg2'),(19,'22219','eg24g'),(20,'22220','g34g');
/*!40000 ALTER TABLE `province` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `schedule`
--

DROP TABLE IF EXISTS `schedule`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `schedule` (
  `schedule_id` int(11) NOT NULL AUTO_INCREMENT,
  `year` int(11) NOT NULL,
  `month` int(11) NOT NULL,
  `start` timestamp NULL DEFAULT NULL,
  `end` timestamp NULL DEFAULT NULL,
  `is_report` int(255) NOT NULL DEFAULT '0',
  PRIMARY KEY (`schedule_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `schedule`
--

LOCK TABLES `schedule` WRITE;
/*!40000 ALTER TABLE `schedule` DISABLE KEYS */;
INSERT INTO `schedule` VALUES (1,2015,1,'2015-01-11 01:23:45','2015-05-11 01:23:45',1),(2,2015,1,'2015-01-11 01:34:34','2015-05-11 03:23:45',0),(3,2015,1,'2015-01-11 01:56:23','2015-05-13 01:23:45',1),(4,2015,1,'2015-01-10 18:23:45','2015-06-11 01:23:45',0),(5,2015,2,'2015-02-11 01:23:45','2015-09-11 01:23:45',1),(6,2015,2,'2015-02-11 01:24:45','2015-10-11 01:23:45',0),(7,2015,2,'2015-02-12 01:23:45','2015-10-12 01:00:00',1),(8,2015,2,'2015-02-13 01:23:46','2015-10-12 01:00:01',1),(9,2015,2,'2015-02-14 01:23:46','2015-10-12 01:00:22',0),(10,2015,2,'2015-02-15 01:23:46','2015-10-12 01:00:33',1),(11,2015,2,'2015-02-16 01:23:46','2015-10-13 01:00:33',0),(12,2015,2,'2015-02-17 01:23:46','2015-10-13 01:00:45',1),(13,2015,2,'2015-02-17 01:23:00','2015-10-14 01:00:00',1),(14,2015,2,'2015-02-17 01:23:11','2015-10-14 01:00:23',0),(15,2015,2,'2015-02-17 01:23:23','2015-10-14 01:00:56',1),(16,2015,2,'2015-02-17 01:23:33','2015-10-15 01:00:56',0),(17,2015,2,'2015-02-17 01:23:45','2015-10-16 01:00:56',0),(18,2015,3,'2015-03-17 01:23:00','2015-10-17 01:00:56',1),(19,2015,3,'2015-03-17 03:23:00','2015-10-18 01:00:56',0),(20,2015,3,'2015-03-17 06:23:00','2015-10-19 01:00:56',0);
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

-- Dump completed on 2016-03-23 22:13:02
