-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Хост: localhost:3306
-- Время создания: Мар 03 2022 г., 19:04
-- Версия сервера: 10.4.22-MariaDB
-- Версия PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `coffeeshop`
--

-- --------------------------------------------------------

--
-- Структура таблицы `products`
--

CREATE TABLE `products` (
  `id` int(10) NOT NULL,
  `product` varchar(150) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `src` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='Список товаров';

--
-- Дамп данных таблицы `products`
--

INSERT INTO `products` (`id`, `product`, `description`, `src`) VALUES
(1, 'Арабика', 'Вид рода Кофе трибы Кофейные семейства Мареновые. Наиболее распространенный и культивируемый вид. Возделывается во многих тропических странах, составляя около 60% мировых насаждений кофе. Известен также под названием арабика.', 'prodImg/arabica.png'),
(2, 'Робуста', 'Робуста — второй по распространенности сорт кофе после арабики. Ее производство занимает 30-40% мирового рынка и обеспечивает экономику многих стран. В основном это — Юго-Восточная Азия (Вьетнам, Индонезия), Индия, а также Западная и Центральная Африка. Считается, что кофе из робусты — низкого качества, т.к. в ней больше проявляется горечь и практически отсутствуют фруктовые и сладкие оттенки. Ценители спешиалти арабики, привыкшие к чистой, кислотной чашке, обходят ее стороной.', 'prodImg/canephora.png'),
(3, 'Либерика ', 'Вид цветковых растений рода Кофе трибы Кофейные семейства Мареновые. Это третий по распространенности в культуре вид после арабики и робусты. Кофе либерийский произрастает в природе в западной и центральной Африке от Либерии до Уганды и Анголы и натурализовался на Филиппинах, в Индонезии, на Сейшельских островах, на Андаманских и Никобарских островах, во Французской Полинезии, Центральной Америке, Вест-Индии, Венесуэле, Колумбии, Малайзии и Бразилии.', 'prodImg/liberica.png'),
(4, 'Эксцельса ', 'Эксцельза (эксцельса, excelsa) – вид кофе, впервые обнаруженный учёными в 1903 году в Центральной Африке, на берегах озера Чад. Посадки эксцельзы составляют около 1–2% от суммарной площади кофейных плантаций в мире.', 'prodImg/excelsa.png'),
(5, 'Стенофила', 'Стенофила – В противоположность Арабике спелые ягоды Стенофилы тёмно-фиолетового цвета. Может превосходить арабику во вкусовых качествах. Увы, растение невыгодно возделывать из-за долго интервала между посадкой и первым урожаем (4 года) в течение которого она вырастает до 3-4 метров в высоту.', 'prodImg/stenophylla.png');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
