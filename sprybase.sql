-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Gazdă: 127.0.0.1
-- Timp de generare: iul. 10, 2020 la 11:02 PM
-- Versiune server: 10.4.11-MariaDB
-- Versiune PHP: 7.4.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Bază de date: `sprybase`
--

-- --------------------------------------------------------

--
-- Structură tabel pentru tabel `listings`
--

CREATE TABLE `listings` (
  `id` int(8) NOT NULL,
  `title` varchar(150) NOT NULL,
  `description` varchar(500) NOT NULL,
  `rooms` int(2) NOT NULL,
  `address` varchar(150) NOT NULL,
  `price` int(10) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `photos` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Eliminarea datelor din tabel `listings`
--

INSERT INTO `listings` (`id`, `title`, `description`, `rooms`, `address`, `price`, `phone`, `photos`) VALUES
(28, 'Luxurious 3 Room Apartment', 'Comfy and luxurious 3 room apartment in the heart of Iasi, next to Palas and Iulius', 3, 'Sf. Lazar, 32', 450, '0743123556', 'app11.jpg,app12.jpg,app13.jpg,app14.jpg'),
(29, 'Lovely, cozy flat in Copou', 'Cozy yet spacious flat, 50 square meters, one dormitory', 2, 'Bvd. Carol I, 12', 300, '0721894454', 'app21.jpg,app22.jpg'),
(30, 'Amazing hotel room, 100m from the beach in Constanta', 'One 4 star hotel room in a private villa that your and your significant other will definitely love!', 1, 'Bvd. Mamaia, 44', 500, '0744344565', 'app31.jpg,app32.jpg,app33.jpg,app34.jpg'),
(31, 'Grandious 3 room apartment in the center of Bucharest', '80 square meters apartment near Bucharest University, with all amenities you may need.', 3, 'Bvd. Aviatorilor, 142', 550, '0734211298', 'app41.jpg,app42.jpg,app43.jpg,app44.jpg');

--
-- Indexuri pentru tabele eliminate
--

--
-- Indexuri pentru tabele `listings`
--
ALTER TABLE `listings`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pentru tabele eliminate
--

--
-- AUTO_INCREMENT pentru tabele `listings`
--
ALTER TABLE `listings`
  MODIFY `id` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
