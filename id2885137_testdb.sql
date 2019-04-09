-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 09, 2019 at 08:19 AM
-- Server version: 10.3.13-MariaDB
-- PHP Version: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `id2885137_testdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `DatesTable`
--

CREATE TABLE `DatesTable` (
  `Date` date NOT NULL,
  `Time` time NOT NULL,
  `Trainer` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `User` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `Program` varchar(30) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `DatesTable`
--

INSERT INTO `DatesTable` (`Date`, `Time`, `Trainer`, `User`, `Program`) VALUES
('2018-05-31', '18:00:00', 'Conor', 'Pelatis1', 'Yoga'),
('2018-05-23', '14:00:00', 'Conor', 'Teo', 'Yoga'),
('2018-05-30', '18:00:00', 'GENERAL', 'Teo', 'staticOne'),
('2018-05-21', '18:00:00', 'GENERAL', 'Teo', 'staticOne'),
('0000-00-00', '15:00:00', 'Conor', 'pelatis1', 'Yoga'),
('2018-05-31', '18:00:00', 'Conor', 'Teo', 'Yoga'),
('0000-00-00', '17:00:00', 'GENERAL', 'Teo', 'staticServiceTwo'),
('0000-00-00', '17:00:00', 'Conor', 'TeoUser', 'Yoga'),
('2019-05-10', '15:00:00', 'Conor', 'Teo', 'Yoga');

-- --------------------------------------------------------

--
-- Table structure for table `ProgramsTable`
--

CREATE TABLE `ProgramsTable` (
  `Name` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `Description` longtext COLLATE utf8_unicode_ci NOT NULL,
  `Duration` varchar(2) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `ProgramsTable`
--

INSERT INTO `ProgramsTable` (`Name`, `Description`, `Duration`) VALUES
('Yoga', 'An ancient work routine from Japan', '3'),
('Pilates', 'a work routine for girls', '2');

-- --------------------------------------------------------

--
-- Table structure for table `staticProgramsTable`
--

CREATE TABLE `staticProgramsTable` (
  `Name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `Duration` int(2) NOT NULL,
  `Description` varchar(150) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `staticProgramsTable`
--

INSERT INTO `staticProgramsTable` (`Name`, `Duration`, `Description`) VALUES
('staticOne', 2, 'This is a static service'),
('staticServiceTwo', 3, 'Our second static service');

-- --------------------------------------------------------

--
-- Table structure for table `Trainers`
--

CREATE TABLE `Trainers` (
  `UserName` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `Name` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `Surname` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `Password` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `Age` varchar(2) COLLATE utf8_unicode_ci NOT NULL,
  `Yoga` tinyint(1) DEFAULT NULL,
  `Pilates` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `Trainers`
--

INSERT INTO `Trainers` (`UserName`, `Name`, `Surname`, `Password`, `Age`, `Yoga`, `Pilates`) VALUES
('Conor', 'Gregory', 'Mc Gregor', 'pass', '24', 1, 1),
('Yank', 'Anastasia', 'Yankova', 'Pass', '27', 0, 1),
('ertew', 'fghdh', 'dsfsg', '', 'fg', 1, 0),
('noService', 'sdfadfsa', 'asdffd', '', 'sd', 0, 1),
('ertewsdf', 'sdfadfsa', 'sdfgsfdgsdgs', '', 'sd', 1, 0),
('vbncvbmcvm', 'sdfadsf', 'sadfasf', '', '12', 1, 0),
('Conorsdfasf', 'asdfasfa', 'asdffd', '', '12', 1, 0),
('asdfaf fdsf', 'sdfadsf', 'asdffd', '', '12', 1, 0),
('Con2', 'Cono', 'surnam', '1a2b3c', '27', 1, 1),
('TrainerNew', 'Mitsaras', 'Mitsidis', 'pass', '29', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `Name` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `Surname` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `Username` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `Password` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `Phone` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `Address` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `Country` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `City` varchar(30) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`Name`, `Surname`, `Username`, `Password`, `Phone`, `Address`, `Country`, `City`) VALUES
('Teo', 'Theod', 'Teo', 'pass', '45654634563', 'sfg', 'dsfg', 'serres'),
('sdfasdf', 'sdfasfda', 'Member3', 'pass', '45654634563', 'safsdfa', 'gsdfsfg', 'sdfadfsfd'),
('teo', 'theo', 'mem', 'pass', '12346789', 'fhfgjhhff', 'greece', 'thess'),
('namme', 'sirnammm', 'TeoMember', 'pass', '4566786789', 'sjdfkashfj@gmail.com', 'Greece', 'Serres'),
('tejo', 'theodor', 'pelatis1', '12345', '87654321', 'pontou', 'greece', 'serres'),
('Yeo', 'Tgchj', 'TeoUser', 'pass', '456788855', 'Serres', 'Greecr', 'Serres');

-- --------------------------------------------------------

--
-- Table structure for table `WorkHours`
--

CREATE TABLE `WorkHours` (
  `MondayStr` time NOT NULL,
  `TuesdayStr` time NOT NULL,
  `WednesdayStr` time NOT NULL,
  `ThursdayStr` time NOT NULL,
  `FridayStr` time NOT NULL,
  `SaturdayStr` time NOT NULL,
  `SundayStr` time NOT NULL,
  `MondayFinn` time NOT NULL,
  `TuesdayFinn` time NOT NULL,
  `WednesdayFinn` time NOT NULL,
  `ThursdayFinn` time NOT NULL,
  `FridayFinn` time NOT NULL,
  `SaturdayFinn` time NOT NULL,
  `SundayFinn` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `WorkHours`
--

INSERT INTO `WorkHours` (`MondayStr`, `TuesdayStr`, `WednesdayStr`, `ThursdayStr`, `FridayStr`, `SaturdayStr`, `SundayStr`, `MondayFinn`, `TuesdayFinn`, `WednesdayFinn`, `ThursdayFinn`, `FridayFinn`, `SaturdayFinn`, `SundayFinn`) VALUES
('09:00:00', '10:00:00', '08:00:00', '13:00:00', '08:00:00', '11:00:00', '10:00:00', '20:00:00', '23:00:00', '20:00:00', '21:00:00', '18:00:00', '15:00:00', '14:00:00');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
