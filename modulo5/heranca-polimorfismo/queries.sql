-- Queries executadas pelo workbench

CREATE TABLE `character` (
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    movie VARCHAR(255) NOT NULL
);


INSERT INTO `character` (name, movie) values
	("Wanda", "Doctor Stranger 2"),
   ("Iron Man", "Civil War"),
   ("Professor X", "X Men");

SELECT * FROM `character`;
