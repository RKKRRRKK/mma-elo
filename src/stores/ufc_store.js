import { defineStore } from 'pinia'

export const useUFCStore = defineStore('ufc', {
  state: () => ({
    fighters: [
      {
        rank_elo: 1,
        ufc_rank: 0,
        weightclass: 'Bantamweight',
        name: 'Merab Testing',
        current_elo: 1703.77
      },
      {
        rank_elo: 2,
        ufc_rank: 2,
        weightclass: 'Bantamweight',
        name: 'Umar Nurmagomedov',
        current_elo: 1679.45
      },
      {
        rank_elo: 3,
        ufc_rank: 5,
        weightclass: 'Bantamweight',
        name: 'Deiveson Figueiredo',
        current_elo: 1667.31
      },
      {
        rank_elo: 4,
        ufc_rank: 1,
        weightclass: 'Bantamweight',
        name: "Sean O'Malley",
        current_elo: 1641.41
      },
      {
        rank_elo: 5,
        ufc_rank: 11,
        weightclass: 'Bantamweight',
        name: 'Jose Aldo',
        current_elo: 1640.83
      },
      {
        rank_elo: 6,
        ufc_rank: 3,
        weightclass: 'Bantamweight',
        name: 'Petr Yan',
        current_elo: 1638.86
      },
      {
        rank_elo: 7,
        ufc_rank: 7,
        weightclass: 'Bantamweight',
        name: 'Henry Cejudo',
        current_elo: 1626.94
      },
      {
        rank_elo: 8,
        ufc_rank: 4,
        weightclass: 'Bantamweight',
        name: 'Cory Sandhagen',
        current_elo: 1622.65
      },
      {
        rank_elo: 9,
        ufc_rank: 10,
        weightclass: 'Bantamweight',
        name: 'Mario Bautista',
        current_elo: 1597.96
      },
      {
        rank_elo: 10,
        ufc_rank: 6,
        weightclass: 'Bantamweight',
        name: 'Marlon Vera',
        current_elo: 1575.76
      },
      {
        rank_elo: 11,
        ufc_rank: 9,
        weightclass: 'Bantamweight',
        name: 'Rob Font',
        current_elo: 1573.93
      },
      {
        rank_elo: 12,
        ufc_rank: 8,
        weightclass: 'Bantamweight',
        name: 'Yadong Song',
        current_elo: 1569.84
      },
      {
        rank_elo: 13,
        ufc_rank: 15,
        weightclass: 'Bantamweight',
        name: 'Montel Jackson',
        current_elo: 1557.44
      },
      {
        rank_elo: 14,
        ufc_rank: 12,
        weightclass: 'Bantamweight',
        name: 'Kyler Phillips',
        current_elo: 1500.29
      },
      {
        rank_elo: 15,
        ufc_rank: 13,
        weightclass: 'Bantamweight',
        name: 'Aiemann Zahabi',
        current_elo: 1494.78
      },
      {
        rank_elo: 16,
        ufc_rank: 14,
        weightclass: 'Bantamweight',
        name: 'missing - not top 1000',
        current_elo: 417
      },
      {
        rank_elo: 1,
        ufc_rank: 2,
        weightclass: 'Featherweight',
        name: 'Max Holloway',
        current_elo: 1734.17
      },
      {
        rank_elo: 2,
        ufc_rank: 1,
        weightclass: 'Featherweight',
        name: 'Alexander Volkanovski',
        current_elo: 1726.62
      },
      {
        rank_elo: 3,
        ufc_rank: 4,
        weightclass: 'Featherweight',
        name: 'Movsar Evloev',
        current_elo: 1722.92
      },
      {
        rank_elo: 4,
        ufc_rank: 9,
        weightclass: 'Featherweight',
        name: 'Aljamain Sterling',
        current_elo: 1714.59
      },
      {
        rank_elo: 5,
        ufc_rank: 0,
        weightclass: 'Featherweight',
        name: 'Ilia Topuria',
        current_elo: 1685.52
      },
      {
        rank_elo: 6,
        ufc_rank: 7,
        weightclass: 'Featherweight',
        name: 'Arnold Allen',
        current_elo: 1638.77
      },
      {
        rank_elo: 7,
        ufc_rank: 3,
        weightclass: 'Featherweight',
        name: 'Diego Lopes',
        current_elo: 1621
      },
      {
        rank_elo: 8,
        ufc_rank: 11,
        weightclass: 'Featherweight',
        name: 'Lerone Murphy',
        current_elo: 1607.97
      },
      {
        rank_elo: 9,
        ufc_rank: 8,
        weightclass: 'Featherweight',
        name: 'Josh Emmett',
        current_elo: 1606.15
      },
      {
        rank_elo: 10,
        ufc_rank: 6,
        weightclass: 'Featherweight',
        name: 'Brian Ortega',
        current_elo: 1574.66
      },
      {
        rank_elo: 11,
        ufc_rank: 5,
        weightclass: 'Featherweight',
        name: 'Yair Rodriguez',
        current_elo: 1572.06
      },
      {
        rank_elo: 12,
        ufc_rank: 13,
        weightclass: 'Featherweight',
        name: 'Bryce Mitchell',
        current_elo: 1568.42
      },
      {
        rank_elo: 13,
        ufc_rank: 10,
        weightclass: 'Featherweight',
        name: 'Calvin Kattar',
        current_elo: 1547.14
      },
      {
        rank_elo: 14,
        ufc_rank: 15,
        weightclass: 'Featherweight',
        name: 'Edson Barboza',
        current_elo: 1541.62
      },
      {
        rank_elo: 15,
        ufc_rank: 12,
        weightclass: 'Featherweight',
        name: 'Giga Chikadze',
        current_elo: 1515.4
      },
      {
        rank_elo: 16,
        ufc_rank: 14,
        weightclass: 'Featherweight',
        name: 'Dan Ige',
        current_elo: 1507.85
      },
      {
        rank_elo: 1,
        ufc_rank: 0,
        weightclass: 'Flyweight',
        name: 'Alexandre Pantoja',
        current_elo: 1718.62
      },
      {
        rank_elo: 2,
        ufc_rank: 8,
        weightclass: 'Flyweight',
        name: 'Asu Almabaev',
        current_elo: 1626.61
      },
      {
        rank_elo: 3,
        ufc_rank: 14,
        weightclass: 'Flyweight',
        name: 'Kai Asakura',
        current_elo: 1620.17
      },
      {
        rank_elo: 4,
        ufc_rank: 2,
        weightclass: 'Flyweight',
        name: 'Brandon Moreno',
        current_elo: 1603.77
      },
      {
        rank_elo: 5,
        ufc_rank: 1,
        weightclass: 'Flyweight',
        name: 'Brandon Royval',
        current_elo: 1584.46
      },
      {
        rank_elo: 6,
        ufc_rank: 5,
        weightclass: 'Flyweight',
        name: 'Tatsuro Taira',
        current_elo: 1566.64
      },
      {
        rank_elo: 7,
        ufc_rank: 11,
        weightclass: 'Flyweight',
        name: 'Tagir Ulanbekov',
        current_elo: 1555.06
      },
      {
        rank_elo: 8,
        ufc_rank: 4,
        weightclass: 'Flyweight',
        name: 'Kai Kara-France',
        current_elo: 1551.86
      },
      {
        rank_elo: 9,
        ufc_rank: 3,
        weightclass: 'Flyweight',
        name: 'Amir Albazi',
        current_elo: 1551.3
      },
      {
        rank_elo: 10,
        ufc_rank: 6,
        weightclass: 'Flyweight',
        name: 'Manel Kape',
        current_elo: 1540.71
      },
      {
        rank_elo: 11,
        ufc_rank: 7,
        weightclass: 'Flyweight',
        name: 'Alex Perez',
        current_elo: 1514.3
      },
      {
        rank_elo: 12,
        ufc_rank: 12,
        weightclass: 'Flyweight',
        name: 'Charles Johnson',
        current_elo: 1500.41
      },
      {
        rank_elo: 13,
        ufc_rank: 10,
        weightclass: 'Flyweight',
        name: 'Tim Elliott',
        current_elo: 1487.51
      },
      {
        rank_elo: 14,
        ufc_rank: 9,
        weightclass: 'Flyweight',
        name: 'missing - not top 1000',
        current_elo: 417
      },
      {
        rank_elo: 15,
        ufc_rank: 13,
        weightclass: 'Flyweight',
        name: 'missing - not top 1000',
        current_elo: 417
      },
      {
        rank_elo: 16,
        ufc_rank: 15,
        weightclass: 'Flyweight',
        name: 'missing - not top 1000',
        current_elo: 417
      },
      {
        rank_elo: 1,
        ufc_rank: 0,
        weightclass: 'Heavyweight',
        name: 'Jon Jones',
        current_elo: 1911.32
      },
      {
        rank_elo: 2,
        ufc_rank: 3,
        weightclass: 'Heavyweight',
        name: 'Alexander Volkov',
        current_elo: 1658.19
      },
      {
        rank_elo: 3,
        ufc_rank: 2,
        weightclass: 'Heavyweight',
        name: 'Ciryl Gane',
        current_elo: 1644.27
      },
      {
        rank_elo: 4,
        ufc_rank: 6,
        weightclass: 'Heavyweight',
        name: 'Jailton Almeida',
        current_elo: 1627.91
      },
      {
        rank_elo: 5,
        ufc_rank: 5,
        weightclass: 'Heavyweight',
        name: 'Curtis Blaydes',
        current_elo: 1620.08
      },
      {
        rank_elo: 6,
        ufc_rank: 1,
        weightclass: 'Heavyweight',
        name: 'Tom Aspinall',
        current_elo: 1618.56
      },
      {
        rank_elo: 7,
        ufc_rank: 8,
        weightclass: 'Heavyweight',
        name: 'Marcin Tybura',
        current_elo: 1601.28
      },
      {
        rank_elo: 8,
        ufc_rank: 4,
        weightclass: 'Heavyweight',
        name: 'Sergei Pavlovich',
        current_elo: 1594.01
      },
      {
        rank_elo: 9,
        ufc_rank: 10,
        weightclass: 'Heavyweight',
        name: 'Derrick Lewis',
        current_elo: 1580.43
      },
      {
        rank_elo: 10,
        ufc_rank: 7,
        weightclass: 'Heavyweight',
        name: 'Serghei Spivac',
        current_elo: 1568.3
      },
      {
        rank_elo: 11,
        ufc_rank: 9,
        weightclass: 'Heavyweight',
        name: 'Jairzinho Rozenstruik',
        current_elo: 1540.32
      },
      {
        rank_elo: 12,
        ufc_rank: 12,
        weightclass: 'Heavyweight',
        name: 'Marcos Rogerio de Lima',
        current_elo: 1526.63
      },
      {
        rank_elo: 13,
        ufc_rank: 13,
        weightclass: 'Heavyweight',
        name: 'Waldo Cortes-Acosta',
        current_elo: 1507.17
      },
      {
        rank_elo: 14,
        ufc_rank: 14,
        weightclass: 'Heavyweight',
        name: 'Shamil Gaziev',
        current_elo: 1506.79
      },
      {
        rank_elo: 15,
        ufc_rank: 15,
        weightclass: 'Heavyweight',
        name: 'missing - not top 1000',
        current_elo: 417
      },
      {
        rank_elo: 16,
        ufc_rank: 11,
        weightclass: 'Heavyweight',
        name: 'missing - not top 1000',
        current_elo: 417
      },
      {
        rank_elo: 1,
        ufc_rank: 1,
        weightclass: 'Light Heavyweight',
        name: 'Magomed Ankalaev',
        current_elo: 1714.39
      },
      {
        rank_elo: 2,
        ufc_rank: 2,
        weightclass: 'Light Heavyweight',
        name: 'Jiri Prochazka',
        current_elo: 1668.72
      },
      {
        rank_elo: 3,
        ufc_rank: 0,
        weightclass: 'Light Heavyweight',
        name: 'Alex Pereira',
        current_elo: 1652.41
      },
      {
        rank_elo: 4,
        ufc_rank: 4,
        weightclass: 'Light Heavyweight',
        name: 'Jan Blachowicz',
        current_elo: 1648.4
      },
      {
        rank_elo: 5,
        ufc_rank: 8,
        weightclass: 'Light Heavyweight',
        name: 'Nikita Krylov',
        current_elo: 1607.14
      },
      {
        rank_elo: 6,
        ufc_rank: 12,
        weightclass: 'Light Heavyweight',
        name: 'Azamat Murzakanov',
        current_elo: 1567.9
      },
      {
        rank_elo: 7,
        ufc_rank: 11,
        weightclass: 'Light Heavyweight',
        name: 'Dominick Reyes',
        current_elo: 1552.22
      },
      {
        rank_elo: 8,
        ufc_rank: 6,
        weightclass: 'Light Heavyweight',
        name: 'Carlos Ulberg',
        current_elo: 1542.71
      },
      {
        rank_elo: 9,
        ufc_rank: 3,
        weightclass: 'Light Heavyweight',
        name: 'Jamahal Hill',
        current_elo: 1536.96
      },
      {
        rank_elo: 10,
        ufc_rank: 9,
        weightclass: 'Light Heavyweight',
        name: 'Volkan Oezdemir',
        current_elo: 1518.72
      },
      {
        rank_elo: 11,
        ufc_rank: 14,
        weightclass: 'Light Heavyweight',
        name: 'Anthony Smith',
        current_elo: 1517.73
      },
      {
        rank_elo: 12,
        ufc_rank: 10,
        weightclass: 'Light Heavyweight',
        name: 'Johnny Walker',
        current_elo: 1506.13
      },
      {
        rank_elo: 13,
        ufc_rank: 5,
        weightclass: 'Light Heavyweight',
        name: 'Aleksandar Rakic',
        current_elo: 1502.05
      },
      {
        rank_elo: 14,
        ufc_rank: 13,
        weightclass: 'Light Heavyweight',
        name: 'Bogdan Guskov',
        current_elo: 1498.6
      },
      {
        rank_elo: 15,
        ufc_rank: 7,
        weightclass: 'Light Heavyweight',
        name: 'Khalil Rountree',
        current_elo: 1490.17
      },
      {
        rank_elo: 16,
        ufc_rank: 15,
        weightclass: 'Light Heavyweight',
        name: 'missing - not top 1000',
        current_elo: 417
      },
      {
        rank_elo: 1,
        ufc_rank: 0,
        weightclass: 'Lightweight',
        name: 'Islam Makhachev',
        current_elo: 1853.54
      },
      {
        rank_elo: 2,
        ufc_rank: 5,
        weightclass: 'Lightweight',
        name: 'Max Holloway',
        current_elo: 1734.17
      },
      {
        rank_elo: 3,
        ufc_rank: 2,
        weightclass: 'Lightweight',
        name: 'Charles Oliveira',
        current_elo: 1779.57
      },
      {
        rank_elo: 4,
        ufc_rank: 4,
        weightclass: 'Lightweight',
        name: 'Dustin Poirier',
        current_elo: 1731.23
      },
      {
        rank_elo: 5,
        ufc_rank: 3,
        weightclass: 'Lightweight',
        name: 'Justin Gaethje',
        current_elo: 1729.26
      },
      {
        rank_elo: 6,
        ufc_rank: 1,
        weightclass: 'Lightweight',
        name: 'Arman Tsarukyan',
        current_elo: 1729.19
      },
      {
        rank_elo: 7,
        ufc_rank: 8,
        weightclass: 'Lightweight',
        name: 'Mateusz Gamrot',
        current_elo: 1690.62
      },
      {
        rank_elo: 8,
        ufc_rank: 9,
        weightclass: 'Lightweight',
        name: 'Beneil Dariush',
        current_elo: 1661.09
      },
      {
        rank_elo: 9,
        ufc_rank: 13,
        weightclass: 'Lightweight',
        name: 'Paddy Pimblett',
        current_elo: 1643.23
      },
      {
        rank_elo: 10,
        ufc_rank: 10,
        weightclass: 'Lightweight',
        name: 'Renato Carneiro',
        current_elo: 1637.96
      },
      {
        rank_elo: 11,
        ufc_rank: 15,
        weightclass: 'Lightweight',
        name: 'Joel Alvarez',
        current_elo: 1632.44
      },
      {
        rank_elo: 12,
        ufc_rank: 7,
        weightclass: 'Lightweight',
        name: 'Michael Chandler',
        current_elo: 1626.15
      },
      {
        rank_elo: 13,
        ufc_rank: 6,
        weightclass: 'Lightweight',
        name: 'Dan Hooker',
        current_elo: 1623.47
      },
      {
        rank_elo: 14,
        ufc_rank: 12,
        weightclass: 'Lightweight',
        name: 'Benoit St. Denis',
        current_elo: 1535.69
      },
      {
        rank_elo: 15,
        ufc_rank: 11,
        weightclass: 'Lightweight',
        name: 'Rafael Fiziev',
        current_elo: 1527.66
      },
      {
        rank_elo: 16,
        ufc_rank: 14,
        weightclass: 'Lightweight',
        name: 'missing - not top 1000',
        current_elo: 417
      },
      {
        rank_elo: 1,
        ufc_rank: 0,
        weightclass: 'Middleweight',
        name: 'Dricus Du Plessis',
        current_elo: 1745.73
      },
      {
        rank_elo: 2,
        ufc_rank: 1,
        weightclass: 'Middleweight',
        name: 'Sean Strickland',
        current_elo: 1680.01
      },
      {
        rank_elo: 3,
        ufc_rank: 3,
        weightclass: 'Middleweight',
        name: 'Khamzat Chimaev',
        current_elo: 1672.88
      },
      {
        rank_elo: 4,
        ufc_rank: 4,
        weightclass: 'Middleweight',
        name: 'Robert Whittaker',
        current_elo: 1670.96
      },
      {
        rank_elo: 5,
        ufc_rank: 2,
        weightclass: 'Middleweight',
        name: 'Israel Adesanya',
        current_elo: 1666.65
      },
      {
        rank_elo: 6,
        ufc_rank: 9,
        weightclass: 'Middleweight',
        name: 'Brendan Allen',
        current_elo: 1659.54
      },
      {
        rank_elo: 7,
        ufc_rank: 6,
        weightclass: 'Middleweight',
        name: 'Caio Borralho',
        current_elo: 1646.17
      },
      {
        rank_elo: 8,
        ufc_rank: 14,
        weightclass: 'Middleweight',
        name: 'Sharabutdin Magomedov',
        current_elo: 1604.15
      },
      {
        rank_elo: 9,
        ufc_rank: 12,
        weightclass: 'Middleweight',
        name: 'Jack Hermansson',
        current_elo: 1602.37
      },
      {
        rank_elo: 10,
        ufc_rank: 15,
        weightclass: 'Middleweight',
        name: 'Michel Pereira',
        current_elo: 1599.91
      },
      {
        rank_elo: 11,
        ufc_rank: 5,
        weightclass: 'Middleweight',
        name: 'Nassourdine Imavov',
        current_elo: 1590.17
      },
      {
        rank_elo: 12,
        ufc_rank: 7,
        weightclass: 'Middleweight',
        name: 'Marvin Vettori',
        current_elo: 1573.45
      },
      {
        rank_elo: 13,
        ufc_rank: 8,
        weightclass: 'Middleweight',
        name: 'Jared Cannonier',
        current_elo: 1564.85
      },
      {
        rank_elo: 14,
        ufc_rank: 13,
        weightclass: 'Middleweight',
        name: 'Anthony Hernandez',
        current_elo: 1563.67
      },
      {
        rank_elo: 15,
        ufc_rank: 10,
        weightclass: 'Middleweight',
        name: 'Roman Dolidze',
        current_elo: 1553.3
      },
      {
        rank_elo: 16,
        ufc_rank: 11,
        weightclass: 'Middleweight',
        name: 'Paulo Costa',
        current_elo: 1518.43
      },
      {
        rank_elo: 1,
        ufc_rank: 0,
        weightclass: 'Welterweight',
        name: 'Belal Muhammad',
        current_elo: 1789.79
      },
      {
        rank_elo: 2,
        ufc_rank: 1,
        weightclass: 'Welterweight',
        name: 'Leon Edwards',
        current_elo: 1743.89
      },
      {
        rank_elo: 3,
        ufc_rank: 2,
        weightclass: 'Welterweight',
        name: 'Shavkat Rakhmonov',
        current_elo: 1730.25
      },
      {
        rank_elo: 4,
        ufc_rank: 3,
        weightclass: 'Welterweight',
        name: 'Kamaru Usman',
        current_elo: 1682.93
      },
      {
        rank_elo: 5,
        ufc_rank: 6,
        weightclass: 'Welterweight',
        name: 'Joaquin Buckley',
        current_elo: 1654.34
      },
      {
        rank_elo: 6,
        ufc_rank: 15,
        weightclass: 'Welterweight',
        name: 'Michael Page',
        current_elo: 1648.52
      },
      {
        rank_elo: 7,
        ufc_rank: 5,
        weightclass: 'Welterweight',
        name: 'Sean Brady',
        current_elo: 1644.79
      },
      {
        rank_elo: 8,
        ufc_rank: 4,
        weightclass: 'Welterweight',
        name: 'Jack Della Maddalena',
        current_elo: 1644.74
      },
      {
        rank_elo: 9,
        ufc_rank: 7,
        weightclass: 'Welterweight',
        name: 'Ian Garry',
        current_elo: 1617.76
      },
      {
        rank_elo: 10,
        ufc_rank: 13,
        weightclass: 'Welterweight',
        name: 'Carlos Prates',
        current_elo: 1612.25
      },
      {
        rank_elo: 11,
        ufc_rank: 12,
        weightclass: 'Welterweight',
        name: 'Michael Morales',
        current_elo: 1610.41
      },
      {
        rank_elo: 12,
        ufc_rank: 9,
        weightclass: 'Welterweight',
        name: 'Colby Covington',
        current_elo: 1606.38
      },
      {
        rank_elo: 13,
        ufc_rank: 14,
        weightclass: 'Welterweight',
        name: 'Vicente Luque',
        current_elo: 1604.08
      },
      {
        rank_elo: 14,
        ufc_rank: 8,
        weightclass: 'Welterweight',
        name: 'Gilbert Burns',
        current_elo: 1601.1
      },
      {
        rank_elo: 15,
        ufc_rank: 10,
        weightclass: 'Welterweight',
        name: 'Geoff Neal',
        current_elo: 1556.92
      },
      {
        rank_elo: 16,
        ufc_rank: 11,
        weightclass: 'Welterweight',
        name: 'Stephen Thompson',
        current_elo: 1534.78
      }
    ]
  })
})
