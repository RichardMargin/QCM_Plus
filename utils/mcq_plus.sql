-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mar. 14 fév. 2023 à 14:30
-- Version du serveur : 10.4.27-MariaDB
-- Version de PHP : 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `mcq_plus`
--

--
-- Déchargement des données de la table `answer`
--

INSERT INTO `answer` (`id`, `content`, `is_correct`, `question_id`) VALUES
(1, 'Réponse 1', b'1', 1),
(2, 'Réponse 2', b'0', 1),
(3, 'Réponse 3', b'0', 1),
(4, 'Réponse 4', b'0', 1);

--
-- Déchargement des données de la table `app_user`
--

INSERT INTO `app_user` (`id`, `company`, `first_name`, `is_active`, `last_name`, `password`, `role`) VALUES
(1, 'The best', 'Admin', b'1', 'BigBoss', 'toto', 'ADMINISTRATOR'),
(2, 'Cap', 'Lambda', b'1', 'Test', 'tata', 'INTERN');

--
-- Déchargement des données de la table `question`
--

INSERT INTO `question` (`id`, `content`, `is_active`, `quiz_id`) VALUES
(1, 'Question top', b'1', 1);

--
-- Déchargement des données de la table `quiz`
--

INSERT INTO `quiz` (`id`, `description`, `is_active`, `is_shared`, `name`) VALUES
(1, 'Questionnaire numéro 1', b'1', b'1', 'Mon super questionnaire');

--
-- Déchargement des données de la table `result`
--

INSERT INTO `result` (`id`, `nbr_right_answers`, `nbr_unanswered`, `nbr_wrong_answers`, `realisation_date`, `time_used`, `quiz_id`, `app_user_id`, `score`) VALUES
(1, 1, 0, 0, '2023-02-14', '10 secondes', 1, 2, 10);

--
-- Déchargement des données de la table `user_answer`
--

INSERT INTO `user_answer` (`id`, `has_answered`, `is_correct`, `question_id`, `app_user_id`) VALUES
(1, b'1', b'1', 1, 2);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
