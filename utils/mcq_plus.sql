INSERT INTO `app_user` (`id`, `company`, `first_name`, `is_active`, `last_name`, `password`, `role`) VALUES
(1, 'Nous', 'Toto', b'1', 'Boss', 'test', 'ADMINISTRATOR');
INSERT INTO `quiz` (`id`, `description`, `is_active`, `is_shared`, `name`) VALUES
(1, 'Quiz 1 Description', b'1', b'1', 'Quiz 1');
INSERT INTO `question` (`id`, `content`, `is_active`, `quiz_id`) VALUES
(1, 'Question 1', b'1', 1),
(2, 'Question 2', b'1', 1);
INSERT INTO `answer` (`id`, `content`, `is_correct`, `question_id`) VALUES
(1, 'Réponse 1', b'1', 1),
(2, 'Réponse 2', b'0', 1),
(3, 'Réponse 1', b'1', 2),
(4, 'Réponse 2', b'0', 2);
INSERT INTO `result` (`id`, `nbr_right_answers`, `nbr_unanswered`, `nbr_wrong_answers`, `realisation_date`, `score`, `time_used`, `app_user_id`, `quiz_id`) VALUES
(1, 1, 0, 1, '2023-02-14', 10, '50', 1, 1);
INSERT INTO `user_answer` (`id`, `has_answered`, `is_correct`, `app_user_id`, `question_id`) VALUES
(1, b'1', b'1', 1, 1),
(2, b'1', b'0', 1, 2);