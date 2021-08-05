-- Table structure for table 'ukulele'
CREATE TABLE `ukuleles` (
  `id` int(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `brand` varchar(255) NOT NULL,
  `size` varchar(255) NOT NULL,
  `availability` int(255) NOT NULL,
  `price` float NOT NULL,
  `image` varchar(255) NOT NULL
);


-- Dumping data for table 'ukuleles'
INSERT INTO ukulelestd.ukuleles (id, name, brand, size, availability, price) VALUES
(1, 'Cordoba 15CFM Sapphire Blue', 'Cordoba', 'Concert', '3', '1370'),
(2, 'Mahalo Hano Tenor Naturel', 'Mahalo', 'Tenor', '5', '530'),
(3, 'Fullerton Strat® Uke', 'Fender', 'Concert', '2', '2470'),
(4, 'Zuma Classic, Lake Placid Blue', 'Fender', 'Concert', '6', '1630'),
(5, 'Martin 0X Uke Bamboo', 'Martin Guitars', 'Soprano', '1', '4790');


-- Indexes for table 'ukuleles'
ALTER TABLE `ukuleles`
  ADD PRIMARY KEY (`id`);

-- AUTO_INCREMENT for table `ukuleles`
ALTER TABLE `ukuleles`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=1;