-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 21, 2021 at 07:12 PM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 8.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `teabob-order`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_admin`
--

CREATE TABLE `tbl_admin` (
  `id` int(10) UNSIGNED NOT NULL,
  `full_name` varchar(100) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_admin`
--

INSERT INTO `tbl_admin` (`id`, `full_name`, `username`, `password`) VALUES
(3, 'Yrrej Laguatan', 'admin1', 'e00cf25ad42683b3df678c61f42c6bda'),
(4, 'Jivan Balatbat', 'admin2', 'c84258e9c39059a89ab77d846ddab909'),
(5, 'Cyril Santos', 'admin3', '32cacb2f994f6b42183a1300d9a3e8d6');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_cart`
--

CREATE TABLE `tbl_cart` (
  `cart_id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `description` varchar(100) NOT NULL,
  `image_name` varchar(255) NOT NULL,
  `user_id` int(11) NOT NULL,
  `date` datetime NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_cart`
--

INSERT INTO `tbl_cart` (`cart_id`, `title`, `description`, `image_name`, `user_id`, `date`, `price`) VALUES
(8, 'Shawarama', 'Shawarmasarap', '', 4, '0000-00-00 00:00:00', 60),
(9, 'qweq', 'sdfsdf', '', 4, '0000-00-00 00:00:00', 34),
(10, 'qweq', 'sdfsdf', '', 4, '0000-00-00 00:00:00', 34),
(11, 'Shawarama', 'Shawarmasarap', '', 4, '0000-00-00 00:00:00', 60),
(12, 'qweq', 'sdfsdf', '', 4, '0000-00-00 00:00:00', 34),
(22, 'Shawarama', 'Shawarmasarap', '', 5, '0000-00-00 00:00:00', 60),
(29, 'Shawarma', 'Filled beef and Vegies', 'http://localhost/teabob-order/images/food/Food-name-2237.jpg', 1, '0000-00-00 00:00:00', 60),
(30, 'Okinawa', 'Classic Okinawa Milktea', 'http://localhost/teabob-order/images/food/Food-name-2033.jpg', 1, '0000-00-00 00:00:00', 50),
(31, 'Chocolate', 'Classic Chocolate Milktea', 'http://localhost/teabob-order/images/food/Food-name-4458.jpg', 1, '0000-00-00 00:00:00', 50);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_category`
--

CREATE TABLE `tbl_category` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(100) NOT NULL,
  `image_name` varchar(255) NOT NULL,
  `featured` varchar(10) NOT NULL,
  `active` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_category`
--

INSERT INTO `tbl_category` (`id`, `title`, `image_name`, `featured`, `active`) VALUES
(24, 'Snacks', 'food_category_330.jpg', 'Yes', 'Yes'),
(26, 'Drinks', 'food_category_154.jpg', 'Yes', 'Yes');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_checkout`
--

CREATE TABLE `tbl_checkout` (
  `checkout_id` int(11) NOT NULL,
  `prod_name` varchar(255) NOT NULL,
  `prod_desc` varchar(255) NOT NULL,
  `user_id` int(11) NOT NULL,
  `prod_price` int(11) NOT NULL,
  `checkout_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `total_price` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_checkout`
--

INSERT INTO `tbl_checkout` (`checkout_id`, `prod_name`, `prod_desc`, `user_id`, `prod_price`, `checkout_date`, `total_price`) VALUES
(1, 'Shawarama', 'Shawarmasarap', 1, 60, '2021-11-19 14:14:23', 0),
(2, 'Shawarama', 'Shawarmasarap', 1, 60, '2021-11-19 14:14:23', 0),
(3, 'Shawarama', 'Shawarmasarap', 1, 60, '2021-11-19 14:14:23', 0),
(4, 'Shawarama', 'Shawarmasarap', 1, 60, '2021-11-19 14:42:50', 0),
(5, 'Shawarama', 'Shawarmasarap', 1, 60, '2021-11-19 14:42:50', 0),
(6, 'Shawarama', 'Shawarmasarap', 1, 60, '2021-11-19 14:42:50', 0),
(7, 'Shawarama', 'Shawarmasarap', 1, 60, '2021-11-19 14:46:32', 0),
(8, 'Shawarama', 'Shawarmasarap', 1, 60, '2021-11-19 14:46:32', 0),
(9, 'Shawarama', 'Shawarmasarap', 1, 60, '2021-11-19 14:46:32', 0),
(10, 'Shawarama', 'Shawarmasarap', 1, 60, '2021-11-19 14:52:11', 0),
(11, 'Shawarama', 'Shawarmasarap', 1, 60, '2021-11-19 14:52:11', 0),
(12, 'Shawarama', 'Shawarmasarap', 1, 60, '2021-11-19 14:52:11', 0),
(13, 'Shawarama', 'Shawarmasarap', 1, 60, '2021-11-19 14:52:28', 0),
(14, 'Shawarama', 'Shawarmasarap', 1, 60, '2021-11-19 14:52:28', 0),
(15, 'Shawarama', 'Shawarmasarap', 1, 60, '2021-11-19 14:52:28', 0),
(16, 'Shawarama', 'Shawarmasarap', 1, 60, '2021-11-19 14:57:40', 0),
(17, 'Shawarama', 'Shawarmasarap', 1, 60, '2021-11-19 14:57:40', 0),
(18, 'Shawarama', 'Shawarmasarap', 1, 60, '2021-11-19 14:57:40', 0),
(19, 'Shawarama', 'Shawarmasarap', 1, 60, '2021-11-19 14:58:38', 0),
(20, 'Shawarama', 'Shawarmasarap', 1, 60, '2021-11-19 14:58:38', 0),
(21, 'Shawarama', 'Shawarmasarap', 1, 60, '2021-11-19 14:58:38', 0);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_cocode`
--

CREATE TABLE `tbl_cocode` (
  `cocode_id` int(11) NOT NULL,
  `code` int(11) NOT NULL,
  `total_price` int(100) NOT NULL,
  `user_id` int(11) NOT NULL,
  `is_approved` text NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_cocode`
--

INSERT INTO `tbl_cocode` (`cocode_id`, `code`, `total_price`, `user_id`, `is_approved`, `date`) VALUES
(8, 88543732, 180, 1, '', '2021-11-19 14:58:38');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_food`
--

CREATE TABLE `tbl_food` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(150) NOT NULL,
  `description` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `image_name` varchar(255) NOT NULL,
  `category_id` int(10) UNSIGNED NOT NULL,
  `featured` varchar(10) NOT NULL,
  `active` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_food`
--

INSERT INTO `tbl_food` (`id`, `title`, `description`, `price`, `image_name`, `category_id`, `featured`, `active`) VALUES
(36, 'Shawarma', 'Filled beef and Vegies', '60.00', 'http://localhost/teabob-order/images/food/Food-name-2237.jpg', 24, 'Yes', 'Yes'),
(37, 'Nachos', 'Filled with beef and vegies', '55.00', 'http://localhost/teabob-order/images/food/Food-name-975.jpg', 24, 'Yes', 'Yes'),
(38, 'Okinawa', 'Classic Okinawa Milktea', '50.00', 'http://localhost/teabob-order/images/food/Food-name-2033.jpg', 26, 'Yes', 'Yes'),
(39, 'Chocolate', 'Classic Chocolate Milktea', '50.00', 'http://localhost/teabob-order/images/food/Food-name-4458.jpg', 26, 'Yes', 'Yes'),
(40, 'Mango Shake', 'Classic Matcha Milktea', '50.00', 'http://localhost/teabob-order/images/food/Food-Name-99.jpg', 26, 'Yes', 'Yes'),
(41, 'Mango Graham Float', 'Mango Shake with Graham Float', '65.00', 'http://localhost/teabob-order/images/food/Food-Name-6947.jpg', 26, 'Yes', 'Yes');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_order`
--

CREATE TABLE `tbl_order` (
  `id` int(10) UNSIGNED NOT NULL,
  `food` varchar(150) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `qty` int(11) NOT NULL,
  `total` decimal(10,2) NOT NULL,
  `order_date` datetime NOT NULL,
  `status` varchar(50) NOT NULL,
  `customer_name` varchar(150) NOT NULL,
  `customer_contact` varchar(20) NOT NULL,
  `customer_email` varchar(150) NOT NULL,
  `customer_address` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_order`
--

INSERT INTO `tbl_order` (`id`, `food`, `price`, `qty`, `total`, `order_date`, `status`, `customer_name`, `customer_contact`, `customer_email`, `customer_address`) VALUES
(1, 'Shawarma', '60.00', 1, '60.00', '2021-07-28 06:33:16', 'Delivered', 'jivan', '09123435950', 'user@app.com', 'pampanga'),
(2, 'Classic Chocolate', '50.00', 1, '50.00', '2021-07-28 06:34:40', 'Ordered', 'john', '12323543453', 'ad922693b0-d867e3@inbox.mailtrap.io', 'barangay bodega zone 1');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user`
--

CREATE TABLE `tbl_user` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(100) NOT NULL,
  `user_uname` varchar(100) NOT NULL,
  `user_pword` varchar(255) NOT NULL,
  `user_contact` int(11) NOT NULL,
  `user_address` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_user`
--

INSERT INTO `tbl_user` (`user_id`, `user_name`, `user_uname`, `user_pword`, `user_contact`, `user_address`) VALUES
(1, 'van', 'van', '$2y$10$Y2Q2ZjVjMmI2NDczNjExMuXO/NBAi34meUPJqCaEEWgf7c3HNkQR.', 0, ''),
(2, 'cy', 'cy', '$2y$10$Mzk4NGE0MzBiNDI2YTBkNOMDO8s4vU76Ko6njACyT01tM/XRVhm12', 2147483647, 'bodega'),
(3, 'qwe', 'qwe', '$2y$10$ZDA4YjRjYmJkMDc2ZDc2MObABMj/VpRooPgzHSZ9UM1wbVCgksyDu', 2147483647, 'asdasd'),
(4, 'sese', 'sese', '$2y$10$MjMwODgwMzJiNzRmNmZmN.PnEk62Ydqh7vCFpJV7BuUFIzw9s3nrG', 2147483647, 'sdggfdgdfgd'),
(5, 'user', 'user', '$2y$10$YjBjYzY0MzZhNGZhY2IyNOR70sy6zb9r.026NrHkAlbyq60t8hlN.', 2147483647, 'philippines');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_admin`
--
ALTER TABLE `tbl_admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_cart`
--
ALTER TABLE `tbl_cart`
  ADD PRIMARY KEY (`cart_id`);

--
-- Indexes for table `tbl_category`
--
ALTER TABLE `tbl_category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_checkout`
--
ALTER TABLE `tbl_checkout`
  ADD PRIMARY KEY (`checkout_id`);

--
-- Indexes for table `tbl_cocode`
--
ALTER TABLE `tbl_cocode`
  ADD PRIMARY KEY (`cocode_id`);

--
-- Indexes for table `tbl_food`
--
ALTER TABLE `tbl_food`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_order`
--
ALTER TABLE `tbl_order`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_user`
--
ALTER TABLE `tbl_user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_admin`
--
ALTER TABLE `tbl_admin`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `tbl_cart`
--
ALTER TABLE `tbl_cart`
  MODIFY `cart_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `tbl_category`
--
ALTER TABLE `tbl_category`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `tbl_checkout`
--
ALTER TABLE `tbl_checkout`
  MODIFY `checkout_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `tbl_cocode`
--
ALTER TABLE `tbl_cocode`
  MODIFY `cocode_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `tbl_food`
--
ALTER TABLE `tbl_food`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `tbl_order`
--
ALTER TABLE `tbl_order`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tbl_user`
--
ALTER TABLE `tbl_user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
