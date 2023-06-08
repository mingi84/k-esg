-- --------------------------------------------------------
-- 호스트:                          127.0.0.1
-- 서버 버전:                        5.5.12 - MySQL Community Server (GPL)
-- 서버 OS:                        Win32
-- HeidiSQL 버전:                  11.3.0.6430
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- kesg 데이터베이스 구조 내보내기
CREATE DATABASE IF NOT EXISTS `kesg` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */;
USE `kesg`;

-- 테이블 kesg.category 구조 내보내기
CREATE TABLE IF NOT EXISTS `category` (
  `ID` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sessionID` char(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 테이블 데이터 kesg.category:~17 rows (대략적) 내보내기
DELETE FROM `category`;
INSERT INTO `category` (`ID`, `name`, `sessionID`) VALUES
	(1, '정보공시 형식', 'P'),
	(3, '정보공시 검증', 'P'),
	(1, '환경경영 목표', 'E'),
	(2, '원부자재', 'E'),
	(3, '온실가스', 'E'),
	(4, '에너지', 'E'),
	(5, '용수', 'E'),
	(6, '폐기물', 'E'),
	(7, '오염물질', 'E'),
	(2, '노동', 'S'),
	(3, '다양성 및 양성평등', 'S'),
	(4, '산업안전', 'S'),
	(7, '지역사회', 'S'),
	(1, '이사회구성', 'G'),
	(2, '이사회 활동', 'G'),
	(3, '주주권리', 'G'),
	(4, '윤리경영', 'G');

-- 테이블 kesg.checkhistory 구조 내보내기
CREATE TABLE IF NOT EXISTS `checkhistory` (
  `ID` int(11) NOT NULL,
  `userID` int(11) DEFAULT NULL,
  `sessionpoints` text COLLATE utf8mb4_unicode_ci,
  `categorypoints` text COLLATE utf8mb4_unicode_ci,
  `questionpoints` text COLLATE utf8mb4_unicode_ci,
  `totalpoints` text COLLATE utf8mb4_unicode_ci,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 테이블 데이터 kesg.checkhistory:~1 rows (대략적) 내보내기
DELETE FROM `checkhistory`;
INSERT INTO `checkhistory` (`ID`, `userID`, `sessionpoints`, `categorypoints`, `questionpoints`, `totalpoints`) VALUES
	(1, 1, '+25_+50_+50', '+25_+50_+50', '+25_+50_+50', '75');

-- 테이블 kesg.question 구조 내보내기
CREATE TABLE IF NOT EXISTS `question` (
  `ID` int(11) NOT NULL,
  `question` text COLLATE utf8mb4_unicode_ci,
  `answer` text COLLATE utf8mb4_unicode_ci,
  `SCQID` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 테이블 데이터 kesg.question:~4 rows (대략적) 내보내기
DELETE FROM `question`;
INSERT INTO `question` (`ID`, `question`, `answer`, `SCQID`, `type`) VALUES
	(1, 'ESG정보공시방식', '"조직이 어떠한 방식으로든 ESG정보를 공시하지않는 경우"@+0_"조직의 홈페이지 지속가능경영보고서, 사업보고서, 기타 간행물 등에 ESG 정보를 분산하여 공시하고 있는 경우"@+25_"조직의 홈페이지 지속가능경영보고서, 사업보고서, 기타 간행물 등에 ESG 정보를 통합하여 공시하고 있는 경우"@+50_"ESG 정보를 통합한 조직의 홈페이지, 지속가능경영보고서, 사업보고서, 기타 간행물 등을 지정된 장소에 비치하거나, 특정 URL에 담고 있는 경우"@+75_"ESG 정보를 통합한 조직의 홈페이지, 지속가능경영보고서, 사업보고서, 기타 간행물 등의 발행여부를 \'전자공시시스템-자율공시\' 사항으로 알리는 경우"@+100', 'P-1-1', 1),
	(10, '환경경영 추진체계', '"환경경영 추진을 위한 전사 거버넌스 체계를 구축하고 있는 경우 (전담조직, 실무협의회, 경영회의 및 내부점검체계 등)"_"환경경영 추진을 위한 전사 전담조직을 운영하고 있는 경우 (전사 환경경영 기획, 점검, 성과관리 등 실행업무 담당)"_"환경경영 과제 실행에 필요한 자원을 투입하고 있는 경우 (환경투자 예산, 역량강화 교육, 내외부 전문인력 등)"_"환경경영 추진 현황을 점검/분석/평가하는 시스템이 있는 경우 (IT기반 모니터링 시스템, 과제점검 회의, 제3자 의견수렴 등)"_"환경경영 과제 이행현황이 경영진 포함 관련 구성원의 성과평가지표(KPls)에 반영되어 있는 경우"', 'E-1-2', 2),
	(20, '산업재해율', '"현재수준@직전1개년산업재해율당해년도산업평균@초과-동일-미만"_"추세@지난5개년산업재해율@증가추세-변동없음-감소추세"', 'S-4-2', 3),
	(30, '집중/전자/서면 투표제', '"집중투표제 도입@정관에서 집중투표제를@배제하고있다.-명시하고있다."_"서면투표제도입@정관에서 서면투표제를@배제하고있다._명시하고있다."_"전자투표제 도입@정관에서 전자투표제를@배제하고 있다.-명시하고 있다."', 'G-3-3', 3);

-- 테이블 kesg.session 구조 내보내기
CREATE TABLE IF NOT EXISTS `session` (
  `ID` char(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 테이블 데이터 kesg.session:~4 rows (대략적) 내보내기
DELETE FROM `session`;
INSERT INTO `session` (`ID`, `name`) VALUES
	('E', '환경'),
	('G', '지배구조'),
	('P', '정보공시'),
	('S', '사회');

-- 테이블 kesg.userinfo 구조 내보내기
CREATE TABLE IF NOT EXISTS `userinfo` (
  `ID` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `company` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 테이블 데이터 kesg.userinfo:~1 rows (대략적) 내보내기
DELETE FROM `userinfo`;
INSERT INTO `userinfo` (`ID`, `name`, `company`, `phone`, `email`) VALUES
	(1, '김민기', '가치랩스', '010-1234-1234', 'mingi@gazz.ai');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
