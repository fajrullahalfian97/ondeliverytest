-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               PostgreSQL 16.4, compiled by Visual C++ build 1940, 64-bit
-- Server OS:                    
-- HeidiSQL Version:             12.8.0.6908
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES  */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Dumping structure for table public.Room
CREATE TABLE IF NOT EXISTS "Room" (
	"id" SERIAL NOT NULL,
	"name" TEXT NOT NULL,
	"employees" INTEGER NOT NULL,
	"description" TEXT NOT NULL,
	"createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY ("id")
);

-- Dumping data for table public.Room: 1 rows
/*!40000 ALTER TABLE "Room" DISABLE KEYS */;
INSERT INTO "Room" ("id", "name", "employees", "description", "createdAt") VALUES
	(1, 'Meeting Room 101', 10, 'For internal discussions', '2025-04-17 16:17:15.003');
/*!40000 ALTER TABLE "Room" ENABLE KEYS */;

-- Dumping structure for table public.User
CREATE TABLE IF NOT EXISTS "User" (
	"id" SERIAL NOT NULL,
	"username" TEXT NOT NULL,
	"password" TEXT NOT NULL,
	"name" TEXT NOT NULL,
	"role" TEXT NOT NULL,
	"createdAt" TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY ("id"),
	UNIQUE "User_username_key" ("username")
);

-- Dumping data for table public.User: 3 rows
/*!40000 ALTER TABLE "User" DISABLE KEYS */;
INSERT INTO "User" ("id", "username", "password", "name", "role", "createdAt") VALUES
	(1, 'admin', '$2b$10$XoxtHf4i4stJLkFhmGW3L.IU/D9tA1yyDhPQLzNaPCwK3t1pJsWwG', 'Admin HR', 'admin_hr', '2025-04-17 16:03:44.363'),
	(2, 'testuser1', '$2b$10$3Bfc5oW2r.5Acva3CN5odel3yFMm2LDOXMSkM8udKr32hM.p36cUS', 'Test User', 'admin_hr', '2025-04-17 16:17:14.836'),
	(3, 'testuser2', '$2b$10$NCmdchblJxTz8mWwSQxTl.ZDHYq6gsQ0nuFbDWmWI/YaAhG8.78/K', 'Test User 2', 'admin_hr', '2025-04-17 16:17:14.837');
/*!40000 ALTER TABLE "User" ENABLE KEYS */;

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
