-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: localhost
-- Thời gian đã tạo: Th12 10, 2021 lúc 07:52 PM
-- Phiên bản máy phục vụ: 10.4.21-MariaDB
-- Phiên bản PHP: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `social_network`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tblComment`
--

CREATE TABLE `tblComment` (
  `id` int(11) NOT NULL,
  `post_body` text COLLATE utf8_unicode_ci NOT NULL,
  `posted_by` varchar(60) COLLATE utf8_unicode_ci NOT NULL,
  `posted_to` varchar(60) COLLATE utf8_unicode_ci NOT NULL,
  `date_added` datetime NOT NULL,
  `removed` varchar(3) COLLATE utf8_unicode_ci NOT NULL,
  `post_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;




CREATE TABLE `tblFriendRequest` (
  `id` int(11) NOT NULL,
  `user_to` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `user_from` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


CREATE TABLE `tblLike` (
  `id` int(11) NOT NULL,
  `username` varchar(60) COLLATE utf8_unicode_ci NOT NULL,
  `post_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tblMessage`
--

CREATE TABLE `tblMessage` (
  `id` int(11) NOT NULL,
  `user_to` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `user_from` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `body` text COLLATE utf8_unicode_ci NOT NULL,
  `date` datetime NOT NULL,
  `opened` varchar(3) COLLATE utf8_unicode_ci NOT NULL,
  `viewed` varchar(3) COLLATE utf8_unicode_ci NOT NULL,
  `deleted` varchar(3) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;



CREATE TABLE `tblNotification` (
  `id` int(11) NOT NULL,
  `user_to` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `user_from` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `message` text COLLATE utf8_unicode_ci NOT NULL,
  `link` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `datetime` datetime NOT NULL,
  `opened` varchar(3) COLLATE utf8_unicode_ci NOT NULL,
  `viewed` varchar(3) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


--
-- Cấu trúc bảng cho bảng `tblPost`
--

CREATE TABLE `tblPost` (
  `id` int(11) NOT NULL,
  `body` text COLLATE utf8_unicode_ci NOT NULL,
  `added_by` varchar(60) COLLATE utf8_unicode_ci NOT NULL,
  `user_to` varchar(60) COLLATE utf8_unicode_ci NOT NULL,
  `date_added` datetime NOT NULL,
  `user_closed` varchar(3) COLLATE utf8_unicode_ci NOT NULL,
  `deleted` varchar(3) COLLATE utf8_unicode_ci NOT NULL,
  `likes` int(11) NOT NULL,
  `image` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tblTrend`
--

CREATE TABLE `tblTrend` (
  `title` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `hits` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;



-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tblUser`
--

CREATE TABLE `tblUser` (
  `id` int(11) NOT NULL,
  `first_name` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `last_name` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `username` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `signup_date` date NOT NULL,
  `profile_pic` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `num_posts` int(11) NOT NULL,
  `num_likes` int(11) NOT NULL,
  `user_closed` varchar(3) COLLATE utf8_unicode_ci NOT NULL,
  `friend_array` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


--
-- Chỉ mục cho bảng `tblComment`
--
ALTER TABLE `tblComment`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `tblFriendRequest`
--
ALTER TABLE `tblFriendRequest`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `tblLike`
--
ALTER TABLE `tblLike`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `tblMessage`
--
ALTER TABLE `tblMessage`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `tblNotification`
--
ALTER TABLE `tblNotification`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `tblPost`
--
ALTER TABLE `tblPost`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `tblUser`
--
ALTER TABLE `tblUser`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `tblComment`
--
ALTER TABLE `tblComment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT cho bảng `tblFriendRequest`
--
ALTER TABLE `tblFriendRequest`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- AUTO_INCREMENT cho bảng `tblLike`
--
ALTER TABLE `tblLike`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=316;

--
-- AUTO_INCREMENT cho bảng `tblMessage`
--
ALTER TABLE `tblMessage`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=98;

--
-- AUTO_INCREMENT cho bảng `tblNotification`
--
ALTER TABLE `tblNotification`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=119;

--
-- AUTO_INCREMENT cho bảng `tblPost`
--
ALTER TABLE `tblPost`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=152;

--
-- AUTO_INCREMENT cho bảng `tblUser`
--
ALTER TABLE `tblUser`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
