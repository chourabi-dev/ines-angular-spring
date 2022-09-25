-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 25, 2022 at 04:05 PM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 7.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `proccess_server`
--

-- --------------------------------------------------------

--
-- Table structure for table `interventions`
--

CREATE TABLE `interventions` (
  `id` bigint(20) NOT NULL,
  `description` varchar(50) DEFAULT NULL,
  `parameters_string` varchar(3000) DEFAULT NULL,
  `util_timestamp` datetime DEFAULT NULL,
  `machines_id` bigint(20) DEFAULT NULL,
  `users_id` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `interventions`
--

INSERT INTO `interventions` (`id`, `description`, `parameters_string`, `util_timestamp`, `machines_id`, `users_id`) VALUES
(1, 'lorem lorem', '{\"arretProgrammee\":[{\"key\":\"Reunion-Formation\",\"selected\":true}],\"changementSerie\":[{\"key\":\"Demmarage/arrêt de ligne\",\"selected\":true}],\"repture\":[],\"pannesMachines\":[{\"key\":\"MY200-1\",\"selected\":true}],\"derivesProccess\":[],\"nonQuality\":[]}', '2022-09-25 14:03:42', 1, 2);

-- --------------------------------------------------------

--
-- Table structure for table `machines`
--

CREATE TABLE `machines` (
  `id` bigint(20) NOT NULL,
  `name` varchar(50) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `machines`
--

INSERT INTO `machines` (`id`, `name`) VALUES
(1, 'Machine A');

-- --------------------------------------------------------

--
-- Table structure for table `moredata`
--

CREATE TABLE `moredata` (
  `id` bigint(20) NOT NULL,
  `trs_instantane` varchar(255) DEFAULT NULL,
  `trs_poste` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `notifications`
--

CREATE TABLE `notifications` (
  `id` bigint(20) NOT NULL,
  `adddate` datetime DEFAULT NULL,
  `is_seen` bit(1) NOT NULL,
  `message` varchar(250) DEFAULT NULL,
  `title` varchar(250) DEFAULT NULL,
  `users_id` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `notifications`
--

INSERT INTO `notifications` (`id`, `adddate`, `is_seen`, `message`, `title`, `users_id`) VALUES
(1, '2022-09-25 14:03:42', b'1', 'chourabi taher a ajouté une nouvelle intervention sur machine Machine A', 'Nouvelle interventions', 1),
(2, '2022-09-25 14:03:42', b'1', 'chourabi taher a ajouté une nouvelle intervention sur machine Machine A', 'Nouvelle interventions', 3);

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) NOT NULL,
  `name` varchar(60) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`) VALUES
(1, 'ROLE_USER'),
(2, 'ROLE_PM'),
(3, 'ROLE_ADMIN');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) NOT NULL,
  `cin_id` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `username` varchar(50) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `cin_id`, `email`, `name`, `password`, `username`) VALUES
(1, '11223366', 'ines@gmail.com', 'Ines', '$2a$10$O3j6sj1VQo7pqqyhJrhLI.Jrj3ZtV5Kdt6yGQupQbksizVHXIdDoO', 'admin'),
(2, '11223366', 'tchourabi@gmail.com', 'chourabi taher', '$2a$10$Ud3SPk4ljtRt6GVEkFE70uVNCcPFUlpt7bUQH3SgtWkqU4gLfXShO', 'chourabi'),
(3, '22556633', 'proccess@gmail.com', 'Ali', '$2a$10$a/fG06Egnm2.TFji3Okzs.l9wftfb2xwYIpg0US/tZHJoXN2.9Mv2', 'proccess');

-- --------------------------------------------------------

--
-- Table structure for table `user_roles`
--

CREATE TABLE `user_roles` (
  `user_id` bigint(20) NOT NULL,
  `role_id` bigint(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_roles`
--

INSERT INTO `user_roles` (`user_id`, `role_id`) VALUES
(1, 3),
(2, 1),
(3, 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `interventions`
--
ALTER TABLE `interventions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKeyuvk9mskpsday2cle5bf1fqv` (`machines_id`),
  ADD KEY `FKoj1qbk2d834hsr7c5iqlnns9m` (`users_id`);

--
-- Indexes for table `machines`
--
ALTER TABLE `machines`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `moredata`
--
ALTER TABLE `moredata`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKqnglqgfoheb8hbegdbhrv6l2a` (`users_id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UK_nb4h0p6txrmfc0xbrd1kglp9t` (`name`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UKr43af9ap4edm43mmtq01oddj6` (`username`),
  ADD UNIQUE KEY `UK6dotkott2kjsp8vw4d0m25fb7` (`email`);

--
-- Indexes for table `user_roles`
--
ALTER TABLE `user_roles`
  ADD PRIMARY KEY (`user_id`,`role_id`),
  ADD KEY `FKh8ciramu9cc9q3qcqiv4ue8a6` (`role_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `interventions`
--
ALTER TABLE `interventions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `machines`
--
ALTER TABLE `machines`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `moredata`
--
ALTER TABLE `moredata`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `notifications`
--
ALTER TABLE `notifications`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
