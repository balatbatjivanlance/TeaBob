-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 19, 2022 at 08:57 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.3.31

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
  `food_name` varchar(100) NOT NULL,
  `add_pearl` int(11) DEFAULT NULL,
  `add_cpuff` int(11) DEFAULT NULL,
  `add_ccheese` int(11) DEFAULT NULL,
  `add_cookie` int(11) DEFAULT NULL,
  `add_sauce` int(11) DEFAULT NULL,
  `add_spicy` varchar(100) DEFAULT NULL,
  `food_quantity` int(100) NOT NULL,
  `cart_total_price` int(100) NOT NULL,
  `user_id` int(11) NOT NULL,
  `date` datetime NOT NULL,
  `price` int(11) NOT NULL,
  `food_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_category`
--

CREATE TABLE `tbl_category` (
  `category_id` int(10) UNSIGNED NOT NULL,
  `category_name` varchar(100) NOT NULL,
  `category_image` varchar(255) NOT NULL,
  `category_featured` varchar(10) NOT NULL,
  `category_active` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_category`
--

INSERT INTO `tbl_category` (`category_id`, `category_name`, `category_image`, `category_featured`, `category_active`) VALUES
(24, 'Snacks', 'food_category_386.jpg', 'Yes', 'Yes'),
(26, 'Drinks', 'food_category_268.jpg', 'Yes', 'Yes');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_checkout`
--

CREATE TABLE `tbl_checkout` (
  `checkout_id` int(11) NOT NULL,
  `prod_name` varchar(255) NOT NULL,
  `add_pearl` int(11) DEFAULT NULL,
  `add_cpuff` int(11) DEFAULT NULL,
  `add_ccheese` int(11) DEFAULT NULL,
  `add_cookie` int(11) DEFAULT NULL,
  `add_sauce` int(11) DEFAULT NULL,
  `add_spicy` varchar(255) DEFAULT NULL,
  `food_quantity` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `prod_price` int(11) NOT NULL,
  `checkout_date` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `code` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_checkout`
--

INSERT INTO `tbl_checkout` (`checkout_id`, `prod_name`, `add_pearl`, `add_cpuff`, `add_ccheese`, `add_cookie`, `add_sauce`, `add_spicy`, `food_quantity`, `user_id`, `prod_price`, `checkout_date`, `code`) VALUES
(69, 'burger', 0, 0, 0, 0, 10, 'none', 1, 13, 70, '2021-12-22 05:06:02', 32466798),
(70, 'burger', 0, 0, 0, 0, 10, 'none', 1, 12, 70, '2021-12-29 15:32:21', 48219762),
(71, 'burger', 0, 0, 0, 0, 0, 'none', 1, 12, 60, '2021-12-29 15:32:21', 48219762),
(72, 'burger', 0, 0, 0, 0, 0, 'none', 1, 12, 60, '2021-12-29 15:37:09', 88025021),
(73, 'Chocolate Milktea', 0, 0, 0, 0, 0, '0', 1, 12, 50, '2021-12-29 15:37:09', 88025021),
(74, 'burger', 0, 0, 0, 0, 0, 'none', 2, 12, 120, '2021-12-29 15:47:30', 8959137),
(75, 'Chocolate Milktea', 0, 0, 0, 0, 0, '0', 2, 12, 100, '2021-12-29 15:47:30', 8959137),
(76, 'burger', 0, 0, 0, 0, 0, 'none', 0, 14, 60, '2022-01-11 17:08:31', 6029225),
(77, 'burger', 0, 0, 0, 0, 0, 'none', 0, 14, 60, '2022-01-11 17:08:31', 6029225),
(78, 'Chocolate Milktea', 10, 0, 0, 0, 0, '0', 0, 14, 60, '2022-01-11 17:08:31', 6029225),
(79, 'burger', 0, 0, 0, 0, 0, 'none', 0, 14, 60, '2022-01-11 17:41:57', 41842498),
(80, 'burger', 0, 0, 0, 0, 0, 'none', 0, 14, 60, '2022-01-11 17:42:03', 70476113),
(81, 'burger', 0, 0, 0, 0, 0, 'none', 0, 14, 60, '2022-01-11 17:42:10', 66807883),
(82, 'burger', 0, 0, 0, 0, 0, 'none', 0, 14, 60, '2022-01-11 17:45:23', 18067854),
(83, 'burger', 0, 0, 0, 0, 0, 'none', 0, 14, 60, '2022-01-11 17:45:29', 68029058);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_cocode`
--

CREATE TABLE `tbl_cocode` (
  `cocode_id` int(11) NOT NULL,
  `code` int(11) NOT NULL,
  `total_price` int(100) NOT NULL,
  `user_id` int(11) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `user_contact` int(11) NOT NULL,
  `user_address` varchar(255) NOT NULL,
  `is_approved` int(11) NOT NULL DEFAULT 0,
  `date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_cocode`
--

INSERT INTO `tbl_cocode` (`cocode_id`, `code`, `total_price`, `user_id`, `user_name`, `user_contact`, `user_address`, `is_approved`, `date`) VALUES
(58, 101, 100, 1, 'Cyril Santos', 123123, '#100 Anonas Street', 0, '2022-01-19 07:36:13'),
(59, 102, 150, 2, 'Bojo Laguatan', 123123, '31 Natividad Street', 1, '2022-01-19 07:36:13'),
(60, 103, 90, 3, 'Lorenzo Mora', 123123, '100 Dinalupihan Bataan', 2, '2022-01-19 07:36:13'),
(61, 104, 300, 4, 'Jade Magic Dragon', 123123, '102 Pepsi Sta Rita', 3, '2022-01-19 07:36:13');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_food`
--

CREATE TABLE `tbl_food` (
  `food_id` int(10) UNSIGNED NOT NULL,
  `food_name` varchar(150) NOT NULL,
  `food_description` varchar(255) NOT NULL,
  `food_price` int(11) NOT NULL,
  `food_quantity` int(11) NOT NULL,
  `food_image_name` varchar(255) NOT NULL,
  `category_id` int(10) UNSIGNED NOT NULL,
  `food_featured` varchar(10) NOT NULL,
  `food_active` varchar(10) NOT NULL,
  `food_created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_food`
--

INSERT INTO `tbl_food` (`food_id`, `food_name`, `food_description`, `food_price`, `food_quantity`, `food_image_name`, `category_id`, `food_featured`, `food_active`, `food_created_at`) VALUES
(1, 'burger', 'Filled with Vegies and Sauce', 60, 0, 'http://localhost/teabob-order/images/food/food_name_888.jpg', 24, 'Yes', 'Yes', '0000-00-00 00:00:00'),
(4, 'Chocolate Milktea', 'choco', 50, 0, 'http://localhost/teabob-order/images/food/food_name_912.jpg', 26, 'No', 'Yes', '0000-00-00 00:00:00');

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
(2, 'Classic Chocolate', '50.00', 1, '50.00', '2021-07-28 06:34:40', 'Pending', 'john', '12323543453', 'ad922693b0-d867e3@inbox.mailtrap.io', 'barangay bodega zone 1');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user`
--

CREATE TABLE `tbl_user` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(100) NOT NULL,
  `user_lname` varchar(255) NOT NULL,
  `user_uname` varchar(100) NOT NULL,
  `user_pword` varchar(255) NOT NULL,
  `user_contact` longtext NOT NULL,
  `user_address` varchar(255) NOT NULL,
  `user_role` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_user`
--

INSERT INTO `tbl_user` (`user_id`, `user_name`, `user_lname`, `user_uname`, `user_pword`, `user_contact`, `user_address`, `user_role`) VALUES
(2, 'cy', '', 'cy', '$2y$10$Mzk4NGE0MzBiNDI2YTBkNOMDO8s4vU76Ko6njACyT01tM/XRVhm12', '09123456789', 'bodega', 0),
(5, 'users', '', 'users', '$2y$10$YjBjYzY0MzZhNGZhY2IyNOR70sy6zb9r.026NrHkAlbyq60t8hlN.', '32453', 'philippines', 0),
(8, 'Austin Ray Reyes Aranda', '', 'asd', '$2y$10$NDMyZGJkNjZiM2I4NzUwYOzxs57dQrvHQzVwYuwz5uI4qydrJaM9q', '123454', 'test', 0),
(9, 'Austin Ray Aranda', '', 'aaaa', '$2y$10$YjNlNTE2YzYwZjkyODI2ZeyqFy3UR4l3fqW6aKKNMNXFZ6LCPXZx6', '1234567', 'Block 11 Gordon Heights Olongapo City', 0),
(12, 'vanssss', 'van', 'van', '$2y$10$MGQyMmUzYWQ0ZWNhZWI3MuKtZyPjSz85l33XGMmTaPjpl/cIwX.ba', '123', 'van', 0),
(13, 'user', 'user', 'user', '$2y$10$NjRjNjFjZDEwZDUzMGE3M.63Ucb272xqU9Bvd4c2/tx7N2G6gVsd2', '1029343', 'olongapo', 0),
(14, 'vans', 'vans', 'vans', '$2y$10$MmUyMmU2NzZjNWNiZjMxNupPQ4zgP3L4h.hgSuDl15qhe6Bn8knS2', '19238', 'vans', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_variation`
--

CREATE TABLE `tbl_variation` (
  `var_id` int(11) NOT NULL,
  `var_name` varchar(100) NOT NULL,
  `var_price` int(11) NOT NULL,
  `var_quantity` int(11) NOT NULL,
  `var_size` varchar(100) NOT NULL,
  `var_created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `food_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
  ADD PRIMARY KEY (`category_id`);

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
  ADD PRIMARY KEY (`food_id`);

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
-- Indexes for table `tbl_variation`
--
ALTER TABLE `tbl_variation`
  ADD PRIMARY KEY (`var_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_admin`
--
ALTER TABLE `tbl_admin`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `tbl_cart`
--
ALTER TABLE `tbl_cart`
  MODIFY `cart_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_category`
--
ALTER TABLE `tbl_category`
  MODIFY `category_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `tbl_checkout`
--
ALTER TABLE `tbl_checkout`
  MODIFY `checkout_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=84;

--
-- AUTO_INCREMENT for table `tbl_cocode`
--
ALTER TABLE `tbl_cocode`
  MODIFY `cocode_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

--
-- AUTO_INCREMENT for table `tbl_food`
--
ALTER TABLE `tbl_food`
  MODIFY `food_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tbl_order`
--
ALTER TABLE `tbl_order`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tbl_user`
--
ALTER TABLE `tbl_user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `tbl_variation`
--
ALTER TABLE `tbl_variation`
  MODIFY `var_id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
