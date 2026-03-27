-- AdminNeo 5.0.0 MySQL 8.0.35 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

DROP TABLE IF EXISTS `creadores`;
CREATE TABLE `creadores` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `nacionalidad` varchar(100) DEFAULT NULL,
  `fecha_nacimiento` date DEFAULT NULL,
  `fecha_muerte` date DEFAULT NULL,
  `imagen` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

INSERT INTO `creadores` (`id`, `nombre`, `nacionalidad`, `fecha_nacimiento`, `fecha_muerte`, `imagen`) VALUES
(1,	'Leonardo da Vinci',	'Italia',	'1452-04-15',	'1519-05-02',	'img/creadores/leonardo.jpg'),
(2,	'Pablo Picasso',	'España',	'1881-10-25',	'1973-04-08',	'img/creadores/picasso.jpg'),
(3,	'Stanley Kubrick',	'EEUU',	'1928-07-26',	'1999-03-07',	'img/creadores/kubrick.jpg'),
(4,	'Ludwig van Beethoven',	'Alemania',	'1770-12-17',	'1827-03-26',	'img/creadores/beethoven.jpg'),
(5,	'Antoni Gaudí',	'España',	'1852-06-25',	'1926-06-10',	'img/creadores/gaudi.jpg'),
(6,	'Salvador Dalí',	'España',	'1904-05-11',	'1989-01-23',	'img/creadores/dali.jpg'),
(7,	'David Lynch',	'EEUU',	'1946-01-20',	NULL,	'img/creadores/lynch.jpg'),
(8,	'Banksy',	'Reino Unido',	'1974-01-01',	NULL,	'img/creadores/banksy.jpg'),
(11,	'Vincent van Gogh',	'Países Bajos',	'1853-03-30',	'1890-07-29',	'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400'),
(12,	'Frida Kahlo',	'México',	'1907-07-06',	'1954-07-13',	'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=400'),
(13,	'Akira Kurosawa',	'Japón',	'1910-03-23',	'1998-09-06',	'https://images.unsplash.com/photo-1493020256266-db76d530db0e?w=400'),
(14,	'Wolfgang Amadeus Mozart',	'Austria',	'1756-01-27',	'1791-12-05',	'https://images.unsplash.com/photo-1584033100366-26792f39294f?w=400'),
(15,	'Zaha Hadid',	'Irak',	'1950-10-31',	'2016-03-31',	'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400'),
(16,	'Claude Monet',	'Francia',	'1840-11-14',	'1926-12-05',	'https://images.unsplash.com/photo-1576016773942-3344d55737ee?w=400'),
(17,	'Quentin Tarantino',	'EEUU',	'1963-03-27',	NULL,	'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=400'),
(18,	'Virginia Woolf',	'Reino Unido',	'1882-01-25',	'1941-03-28',	'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400'),
(19,	'Frank Lloyd Wright',	'EEUU',	'1867-06-08',	'1959-04-09',	'https://images.unsplash.com/photo-1503387762-592dee58c460?w=400'),
(20,	'Yayoi Kusama',	'Japón',	'1929-03-22',	NULL,	'https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=400'),
(21,	'Alfred Hitchcock',	'Reino Unido',	'1899-08-13',	'1980-04-29',	'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400'),
(22,	'Edvard Munch',	'Noruega',	'1863-12-12',	'1944-01-23',	'https://images.unsplash.com/photo-1579783901586-d88db74b4fe1?w=400'),
(23,	'Wes Anderson',	'EEUU',	'1969-05-01',	NULL,	'https://images.unsplash.com/photo-1518709287705-e69c008afcd6?w=400'),
(24,	'Gustav Klimt',	'Austria',	'1862-07-14',	'1918-02-06',	'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=400'),
(25,	'Michelangelo',	'Italia',	'1475-03-06',	'1564-02-18',	'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=400'),
(26,	'Federico Fellini',	'Italia',	'1920-01-20',	'1993-10-31',	'https://images.unsplash.com/photo-1542204172-556a50353540?w=400'),
(27,	'Oscar Wilde',	'Irlanda',	'1854-10-16',	'1900-11-30',	'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400'),
(28,	'Le Corbusier',	'Suiza',	'1887-10-06',	'1965-08-27',	'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400'),
(29,	'Agatha Christie',	'Reino Unido',	'1890-09-15',	'1976-01-12',	'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400'),
(30,	'Hans Zimmer',	'Alemania',	'1957-09-12',	NULL,	'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400');

DROP TABLE IF EXISTS `disciplinas`;
CREATE TABLE `disciplinas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `imagen` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

INSERT INTO `disciplinas` (`id`, `nombre`, `imagen`) VALUES
(1,	'Pintura',	'img/disciplinas/pintura.jpg'),
(2,	'Escultura',	'img/disciplinas/escultura.jpg'),
(3,	'Arquitectura',	'img/disciplinas/arquitectura.jpg'),
(4,	'Música',	'img/disciplinas/musica.jpg'),
(5,	'Cine',	'img/disciplinas/cine.jpg'),
(6,	'Fotografía',	'img/disciplinas/fotografia.jpg'),
(7,	'Literatura',	'img/disciplinas/literatura.jpg'),
(9,	'Diseño Gráfico',	'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400'),
(10,	'Videojuegos',	'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400'),
(11,	'Danza',	'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=400'),
(12,	'Teatro',	'https://images.unsplash.com/photo-1503095396549-80705a160867?w=400'),
(13,	'Arte Digital',	'https://images.unsplash.com/photo-1633167606207-d840b5070fc2?w=400'),
(14,	'Moda',	'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400'),
(15,	'Poesía',	'https://images.unsplash.com/photo-1473186505569-9c61870c11f9?w=400'),
(16,	'Gastronomía',	'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400'),
(17,	'Grabado',	'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=400'),
(18,	'Instalación',	'https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=400'),
(19,	'Animación',	'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400'),
(20,	'Cómic',	'https://images.unsplash.com/photo-1588497859490-85d1c17db96d?w=400'),
(21,	'Ópera',	'https://images.unsplash.com/photo-1503095396549-80705a160867?w=400'),
(22,	'Joyas',	'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400'),
(23,	'Paisajismo',	'https://images.unsplash.com/photo-1558905619-17254263bc89?w=400'),
(24,	'Cerámica',	'https://images.unsplash.com/photo-1565191999001-551c187427bb?w=400'),
(25,	'Performance',	'https://images.unsplash.com/photo-1514525253361-b83f85dfd75c?w=400'),
(26,	'Publicidad',	'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=400'),
(27,	'Mosaico',	'https://images.unsplash.com/photo-1576016773942-3344d55737ee?w=400'),
(28,	'Arte Textil',	'https://images.unsplash.com/photo-1528813143419-22244a27555d?w=400');

DROP TABLE IF EXISTS `obras`;
CREATE TABLE `obras` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) NOT NULL,
  `año` int DEFAULT NULL,
  `descripcion` text,
  `imagen` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

INSERT INTO `obras` (`id`, `titulo`, `año`, `descripcion`, `imagen`) VALUES
(1,	'La Mona Lisa',	1503,	'Retrato renacentista icónico',	'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Leonardo_da_Vinci_-_Mona_Lisa_%28Louvre%2C_Paris%29.jpg/500px-Leonardo_da_Vinci_-_Mona_Lisa_%28Louvre%2C_Paris%29.jpg'),
(2,	'La última cena',	1498,	'Fresco religioso',	'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/The_Last_Supper_-_Leonardo_Da_Vinci_-_High_Resolution_32x16.jpg/1280px-The_Last_Supper_-_Leonardo_Da_Vinci_-_High_Resolution_32x16.jpg'),
(3,	'Guernica',	1937,	'Pintura sobre la guerra civil española',	'https://upload.wikimedia.org/wikipedia/commons/6/6f/Mural_del_Gernika.jpg'),
(4,	'El perro andaluz',	1929,	'Cortometraje surrealista',	'https://picsum.photos/id/11/800/600'),
(5,	'2001: Una odisea del espacio',	1968,	'Película de ciencia ficción',	'https://picsum.photos/id/22/800/600'),
(6,	'Sinfonía nº 9',	1824,	'Obra musical clásica',	'https://picsum.photos/id/33/800/600'),
(7,	'La Sagrada Familia',	1882,	'Basílica en Barcelona',	'https://picsum.photos/id/44/800/600'),
(8,	'El gran masturbador',	1929,	'Pintura surrealista',	'https://picsum.photos/id/55/800/600'),
(9,	'Mulholland Drive',	2001,	'Película de misterio',	'https://picsum.photos/id/66/800/600'),
(10,	'Girl with Balloon',	2002,	'Arte urbano',	'https://picsum.photos/id/77/800/600'),
(14,	'La noche estrellada',	1889,	'Paisaje nocturno con remolinos',	'https://picsum.photos/id/25/800/600'),
(15,	'Las dos Fridas',	1939,	'Autorretrato doble',	'https://picsum.photos/id/30/800/600'),
(16,	'Los siete samuráis',	1954,	'Cine épico japonés',	'https://picsum.photos/id/35/800/600'),
(17,	'Requiem',	1791,	'Misa de difuntos inacabada',	'https://picsum.photos/id/40/800/600'),
(18,	'Centro Heydar Aliyev',	2012,	'Arquitectura neofuturista',	'https://picsum.photos/id/45/800/600'),
(19,	'Impresión, sol naciente',	1872,	'Origen del impresionismo',	'https://picsum.photos/id/50/800/600'),
(20,	'Pulp Fiction',	1994,	'Cine negro posmoderno',	'https://picsum.photos/id/55/800/600'),
(21,	'Al faro',	1927,	'Novela modernista',	'https://picsum.photos/id/60/800/600'),
(22,	'Fallingwater',	1935,	'Arquitectura orgánica',	'https://picsum.photos/id/65/800/600'),
(23,	'Dots Obsession',	2003,	'Instalación de lunares',	'https://picsum.photos/id/70/800/600'),
(24,	'Psicosis',	1960,	'Thriller de terror psicológico',	'https://picsum.photos/id/75/800/600'),
(25,	'El Grito',	1893,	'Expresionismo puro',	'https://picsum.photos/id/80/800/600'),
(26,	'The Grand Budapest Hotel',	2014,	'Comedia visualmente simétrica',	'https://picsum.photos/id/85/800/600'),
(27,	'El Beso',	1907,	'Obra del simbolismo austríaco',	'https://picsum.photos/id/90/800/600'),
(28,	'David de Miguel Ángel',	1504,	'Escultura renacentista en mármol',	'https://picsum.photos/id/95/800/600'),
(29,	'8 y medio',	1963,	'Cine sobre la creación artística',	'https://picsum.photos/id/100/800/600'),
(30,	'El retrato de Dorian Gray',	1890,	'Novela filosófica',	'https://picsum.photos/id/653/800/600'),
(31,	'Villa Savoye',	1929,	'Manifiesto de arquitectura moderna',	'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800'),
(32,	'Asesinato en el Orient Express',	1934,	'Novela de misterio',	'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800'),
(33,	'Interstellar (Soundtrack)',	2014,	'Banda sonora orquestal y electrónica',	'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800');

DROP TABLE IF EXISTS `obras_creadores`;
CREATE TABLE `obras_creadores` (
  `obra_id` int NOT NULL,
  `creador_id` int NOT NULL,
  PRIMARY KEY (`obra_id`,`creador_id`),
  KEY `creador_id` (`creador_id`),
  CONSTRAINT `obras_creadores_ibfk_1` FOREIGN KEY (`obra_id`) REFERENCES `obras` (`id`) ON DELETE CASCADE,
  CONSTRAINT `obras_creadores_ibfk_2` FOREIGN KEY (`creador_id`) REFERENCES `creadores` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

INSERT INTO `obras_creadores` (`obra_id`, `creador_id`) VALUES
(1,	1),
(2,	1),
(3,	2),
(5,	3),
(6,	4),
(7,	5),
(4,	6),
(8,	6),
(9,	7),
(10,	8),
(14,	11),
(15,	12),
(16,	13),
(17,	14),
(18,	15),
(19,	16),
(20,	17),
(21,	18),
(22,	19),
(23,	20),
(24,	21),
(25,	22),
(26,	23),
(27,	24),
(28,	25),
(29,	26),
(30,	27),
(31,	28),
(32,	29),
(33,	30);

DROP TABLE IF EXISTS `obras_disciplinas`;
CREATE TABLE `obras_disciplinas` (
  `obra_id` int NOT NULL,
  `disciplina_id` int NOT NULL,
  PRIMARY KEY (`obra_id`,`disciplina_id`),
  KEY `disciplina_id` (`disciplina_id`),
  CONSTRAINT `obras_disciplinas_ibfk_1` FOREIGN KEY (`obra_id`) REFERENCES `obras` (`id`) ON DELETE CASCADE,
  CONSTRAINT `obras_disciplinas_ibfk_2` FOREIGN KEY (`disciplina_id`) REFERENCES `disciplinas` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

INSERT INTO `obras_disciplinas` (`obra_id`, `disciplina_id`) VALUES
(1,	1),
(2,	1),
(3,	1),
(8,	1),
(14,	1),
(15,	1),
(19,	1),
(25,	1),
(27,	1),
(28,	2),
(7,	3),
(18,	3),
(22,	3),
(31,	3),
(6,	4),
(17,	4),
(33,	4),
(4,	5),
(5,	5),
(9,	5),
(16,	5),
(20,	5),
(24,	5),
(26,	5),
(29,	5),
(10,	6),
(21,	7),
(30,	7),
(32,	7),
(23,	18);

-- 2026-03-27 12:18:30 UTC
