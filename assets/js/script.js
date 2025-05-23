//Global variables
//Array with objects containing the tourist spots
const spots = [{
        name: 'Royal Palace',
        img: 'assets/img/royal-palace.jpg',
        alt: 'picture of Stockholm Royal Palace from the sky',
        text: 'The Royal Palace in Stockholm is one of the biggest in europe, with over 600 rooms. The Royal Palace is the official residence and official workplace of the Swedish King Carl XVI Gustaf Bernadotte. The palace was built between 1697 and 1760 and was built on the same spot in old town as the previous palace that was destroyed in a fire 1697.',
        open: 'Mon-Sun 10-17',
        price: 'Adult: 200 SEK <br>Student: 180 SEK <br>Age 7-17: 100 SEK',
        address: 'Slottsbacken 1, Old Town',
        type: 'Indoor',
        category: 'Museum',
        familyFriendly: true,
        id: 'royalPalace',
        button: 'royalPalaceBtn',
        map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5745.672261870116!2d18.069149842216365!3d59.326821474718805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d587e4c4a01%3A0xbdf97a9648763e36!2sKungliga%20slottet!5e1!3m2!1ssv!2sse!4v1744190854519!5m2!1ssv!2sse" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
        mapId: 'royalPalaceMap'
    },
    {
        name: 'City Hall',
        img: 'assets/img/city-hall.jpg',
        alt: 'picture of Stockholm City Hall',
        text: 'Stockholm City Hall (Swedish: Stockholms stadshus, Stadshuset locally) is the seat of Stockholm Municipality in Stockholm, Sweden. It stands on the eastern tip of Kungsholmen island. It houses offices and conference rooms as well as ceremonial halls. It is the venue of the Nobel Prize banquet and is one of the major tourist attractions in Stockholm.',
        open: 'Mon-Sun 9:30-15',
        price: 'Adult: 150 SEK <br>Student: 130 SEK <br>Age 7-17: 60 SEK',
        address: 'Hantverkargatan 1, Stockholm',
        type: 'Indoor',
        category: 'Museum',
        familyFriendly: true,
        id: 'cityHall',
        button: 'cityHallBtn',
        map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2912.5032688650654!2d18.052577613175252!3d59.327826411034714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f77df9092cde9%3A0xaeafc90d911394c0!2sStockholms%20stadshus!5e1!3m2!1ssv!2sse!4v1744319207089!5m2!1ssv!2sse" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
        mapId: 'cityHallMap'
    },
    {
        name: 'Royal Opera',
        img: 'assets/img/opera.jpg',
        alt: 'picture of opera',
        text: `Sweden's national stage for opera and ballet was founded by Gustav III in 1773 and thus celebrated our 250th anniversary in 2023. The opera house is located in the middle of Stockholm, opposite the Royal Palace and the Parliament: today's opera house was designed by architect Axel Anderberg and inaugurated in 1898. It stands on the same site as Stockholm's first large opera house from 1782. Inspiration was taken from the Paris Opera, with a neo-Renaissance style exterior and staircase, foyer and auditorium in neo-baroque design. Today, the Royal Swedish Opera House is a listed building monument.`,
        open: '2 hours before show',
        price: 'check operan.se',
        address: 'Gustav Adolfs torg 2, Stockholm',
        type: 'Indoor',
        category: 'Museum',
        familyFriendly: false,
        id: 'royalOpera',
        button: 'royalOperaBtn',
        map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2912.3397298585915!2d18.06790261317529!3d59.329734510881984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d592bf2a53d%3A0x5afe7e58cbd3397b!2sKungliga%20Operan!5e1!3m2!1ssv!2sse!4v1744319271875!5m2!1ssv!2sse" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
        mapId: 'royalOperaMap'
    },
    {
        name: 'Gröna Lund',
        img: 'assets/img/grona-lund.jpg',
        alt: 'picture of Grona Lund amusement park',
        text: `Gröna Lund, or colloquially Grönan, is an amusement park in Stockholm, Sweden. Located on the seaward side of Djurgården Island, it is relatively small compared to other amusement parks, mainly because of its central location, which limits expansion. The 3.8 ha (9.4 acres) amusement park has over 30 attractions and is a popular venue for concerts in the summer. It was founded in 1883 by Jacob Schultheis.`,
        open: 'Mon-Sun 11-22',
        price: 'from 160 SEK for entrance',
        address: 'Lilla Allmänna Gränd 9, Stockholm',
        type: 'Outdoor',
        category: 'Parks',
        familyFriendly: true,
        id: 'gronaLund',
        button: 'gronaLundBtn',
        map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2912.8866711394394!2d18.093767183761745!3d59.32335289733475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f82aac87aa537%3A0xd53ee16e34a5e131!2sGr%C3%B6na%20Lund!5e1!3m2!1ssv!2sse!4v1744319327761!5m2!1ssv!2sse" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
        mapId: 'gronaLundMap'
    },
    {
        name: 'ABBA the Museum',
        img: 'assets/img/abba.jpg',
        alt: 'picture of ABBA',
        text: `ABBA The Museum is a Swedish interactive exhibition about the pop band ABBA that opened in Stockholm, Sweden in May 2013. ABBA's collected works are showcased in a contemporary, interactive setting at Djurgården, Stockholm.`,
        open: 'Mon-Sun 09-20',
        price: 'Adult: 239 SEK <br>Student: 200 SEK <br>Age 7-15: 100 SEK',
        address: 'Djurgårdsvägen 68, Stockholm',
        type: 'Indoor',
        category: 'Museum',
        familyFriendly: true,
        id: 'abba',
        button: 'abbaBtn',
        map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2912.7527322652577!2d18.09438551317515!3d59.324915711267614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f82aad341ff05%3A0x4a15f07835978e47!2sABBA%20The%20Museum!5e1!3m2!1ssv!2sse!4v1744319370002!5m2!1ssv!2sse" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
        mapId: 'abbaMap'
    },
    {
        name: 'Old Town',
        img: 'assets/img/old-town.jpg',
        alt: 'picture of Old Town Stockholm',
        text: `The Old Town dates from the 13th century but most buildings are from the 1600s and 1700s. It is a glorious labyrinth of charming cobbled streets, alleyways, faded mustard and rust-coloured townhouses and meeting squares. Stortorget is the main square and all the big attractions lead off it, including the baroque style Royal Palace (Kungliga Slottet) and The Royal Chapel (Storkyrkan) around the corner, where Crown Princess Victoria married Daniel Westling in June 2010. Old Town today Some 3,000 people live in the Old Town and it is packed with cafés, restaurants, tourist shops, studios, galleries and museums, including the Nobel Prize Museum.`,
        open: '',
        price: 'Free',
        address: 'Old Town, Stockholm',
        type: 'Outdoor',
        category: 'Parks',
        familyFriendly: true,
        id: 'oldTown',
        button: 'oldTownBtn',
        map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11650.986493754708!2d18.060366881720743!3d59.32498698914416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f77e2669ff92b%3A0x2600fef435168b11!2sGamla%20stan%2C%20S%C3%B6dermalm%2C%20Stockholm!5e1!3m2!1ssv!2sse!4v1744319411518!5m2!1ssv!2sse" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
        mapId: 'oldTownMap'
    },
    {
        name: `Haymarket`,
        img: 'assets/img/hotorget.jpg',
        alt: 'picture of Haymarket square',
        text: `Haymarket (Hötorget) is a city square in the center of Stockholm, Sweden that has been transitioning since the Early Medieval Period. To its east lies the Royal Concert Hall, to its south lies Filmstaden Sergel, one of the largest multiscreen cinemas in inner-city Stockholm, and the adjacent Hötorgshallen food market hall.`,
        open: '',
        price: 'Free',
        address: 'Hötorget, Stockholm',
        type: 'Outdoor',
        category: 'Parks',
        familyFriendly: true,
        id: 'hayMarket',
        button: 'hayMarketBtn',
        map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2911.903855761831!2d18.059654913175496!3d59.33481991047487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d67674b1659%3A0xe87d05663d192851!2sH%C3%B6torget%2C%20Stockholm!5e1!3m2!1ssv!2sse!4v1744319450160!5m2!1ssv!2sse" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
        mapId: 'hayMarketMap'
    },
    {
        name: `Stockholm Metro, Underground Art`,
        img: 'assets/img/metro.jpg',
        alt: 'picture of metro station',
        text: `Considered the world's longest art gallery, Stockholm metro consist of many unique underground stations each decorated by different swedish artists. Take a trip in the metro system and explore stations like Kungsträdgården (King's garden), T-centralen, Stadshuset (City Hall) or Stadion (Stadium) as shown in the picture.`,
        open: '',
        price: 'Adult: 43 SEK<br>Children up to 20 years: 26 SEK',
        address: 'Stockholm',
        type: 'Indoor',
        category: 'Parks',
        familyFriendly: true,
        id: 'metro',
        button: 'metroBtn',
        map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2912.223602432464!2d18.057090313175394!3d59.33108941077355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d60812e6cc7%3A0xbe2201dc8bf32611!2sT-Centralen!5e1!3m2!1ssv!2sse!4v1744319496176!5m2!1ssv!2sse" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
        mapId: 'metroMap'
    },
    {
        name: `Östermalm Food Hall`,
        img: 'assets/img/food-hall.jpg',
        alt: 'picture of food hall stand',
        text: `Visit Östermalm's premium food hall with a wide selection of food to buy home or sit down and have a glas of wine with some food in one of the many restaurants inside.`,
        open: 'Mon-fri: 9:30-19<br>Sat-Sun: 9:30-17',
        price: 'Free',
        address: 'Östermalmstorg, Stockholm',
        type: 'Indoor',
        category: 'Parks',
        familyFriendly: true,
        id: 'foodHall',
        button: 'foodHallBtn',
        map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2911.8063822133226!2d18.075108513175643!3d59.335957110383916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d5b24096139%3A0x3d784e22bab4355a!2s%C3%96stermalms%20Saluhall!5e1!3m2!1ssv!2sse!4v1744319542256!5m2!1ssv!2sse" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
        mapId: 'foodHallMap'
    },
    {
        name: `Stockholm City Museum`,
        img: 'assets/img/cityMuseum.jpg',
        alt: 'picture of Stockholm city museum',
        text: `A magnificent 17th-century palace filled to the brim with Stockholm's history. Trace the city's development from a little, medieval harbor town to today’s multicultural metropolis. The Stockholm City Museum is documenting, preserving and exhibiting the history of Stockholm. The museum is housed in Södra Stadshuset at Slussen on Södermalm.`,
        open: 'Tuesday, Thursday, Friday, Saturday, Sunday 11.00-17.00<br>Wednesday 11.00-20.00',
        price: 'Free',
        address: 'Ryssgården, Stockholm',
        type: 'Indoor',
        category: 'Museum',
        familyFriendly: true,
        id: 'cityMuseum',
        button: 'cityMuseumBtn',
        map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6324.745243095819!2d18.06832371330097!3d59.319697711685215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f77e4a61197c9%3A0x68648d883aed683d!2sStadsmuseet%20i%20Stockholm!5e1!3m2!1ssv!2sse!4v1744654980766!5m2!1ssv!2sse" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
        mapId: 'cityMuseumMap'
    },
    {
        name: `King's Garden (Kungsträdgården)`,
        img: 'assets/img/kingsGarden.jpg',
        alt: 'picture of Kings Garden park',
        text: `King's Garden (In Swedish "Kungsträdgården") is a park in central Stockholm, Sweden. It is colloquially known as Kungsan. The park's central location and its outdoor cafés makes it one of the most popular hangouts and meeting places in Stockholm. It also hosts open-air concerts and events in summer, while offering an ice rink during winters. There is also a number of cafés, art galleries and restaurants; for example Galleri Doktor Glas, a name taken from the novel Doctor Glas by Hjalmar Söderberg published in 1905.`,
        open: '',
        price: 'Free',
        address: 'Jussi Björlings allé, Stockholm',
        type: 'Outdoor',
        category: 'Parks',
        familyFriendly: true,
        id: 'kingsGarden',
        button: 'kingsGardenBtn',
        map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3161.308852488446!2d18.066732362944443!3d59.331131745627225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d5945458205%3A0x1df0a2acc2aa00fc!2zS3VuZ3N0csOkZGfDpXJkZW4!5e1!3m2!1ssv!2sse!4v1744655469610!5m2!1ssv!2sse" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
        mapId: 'kingsGardenMap'
    },
    {
        name: `Drottningholm Palace`,
        img: 'assets/img/drottningholm-palace.jpg',
        alt: 'picture of Drottningholm Palace',
        text: `Drottningholm Palace (Swedish: Drottningholms slott), one of Sweden's royal palaces, situated near Sweden's capital Stockholm, is the private residence of the Swedish royal family. Located on Lovön island in Stockholm County's Ekerö Municipality, it was built in the late 17th century and was a regular summer residence of the Swedish royal court through most of the 18th century. Drottningholm Palace is a popular tourist attraction where you can both buy a ticket and enter parts of the palace or walk around the garden for free. The most senic route to the palace would be by boat from the city center and arrive right infront of the palace.`,
        open: 'Mon-Sun: 10-17',
        price: 'Adult: from 160 SEK<br>Student: from 140 SEK<br>Age 7-17: from 80 SEK<br>Garden: Free',
        address: 'Drottningholms slott, Drottningholm',
        type: 'Indoor',
        category: 'Museum',
        familyFriendly: true,
        id: 'drottningholm',
        button: 'drottningholmBtn',
        map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12646.636263926734!2d17.878777333738707!3d59.327367588393884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f75b9dd16af4d%3A0x3996037125378858!2sDrottningholms%20Slott!5e1!3m2!1ssv!2sse!4v1744657477930!5m2!1ssv!2sse" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
        mapId: 'drottningholmMap'
    },
    {
        name: `Vasa Museum`,
        img: 'assets/img/vasa.jpg',
        alt: 'picture of the ship Vasa',
        text: `The Vasa Museum (Swedish: Vasamuseet) is a maritime museum in Stockholm, located on the island of Djurgården. The Vasa ship is the best-preserved seventeenth-century ship in the world and a unique art treasure. More than 98 percent of the ship is original, and it is decorated with hundreds of carved sculptures. The 69 meter-long warship Vasa sank on its maiden voyage in Stockholm harbor in 1628 and was salvaged 333 years later in 1961. For nearly half a century the ship has been slowly, deliberately, and painstakingly restored to a state approaching its original glory. The three masts on the roof of the tailor-made museum show the height of the ship's original masts.`,
        open: 'Mon-Sun: 10-17<br>Wednesday: 10-20',
        price: 'Adult (18+): 195 SEK<br>Children: Free',
        address: 'Galärvarvsvägen 14, Stockholm',
        type: 'Indoor',
        category: 'Museum',
        familyFriendly: true,
        id: 'vasa',
        button: 'vasaBtn',
        map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6323.195615943604!2d18.088816113301295!3d59.32802601101863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d546d8329af%3A0xcff09af1b4c13241!2sVasamuseet!5e1!3m2!1ssv!2sse!4v1744659214504!5m2!1ssv!2sse" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
        mapId: 'vasaMap'
    },
    {
        name: `Nordic Museum`,
        img: 'assets/img/nordicMuseum.jpg',
        alt: 'picture of the Nordic Museum',
        text: `The Nordic Museum is a museum located on Djurgården, an island in central Stockholm, Sweden, dedicated to the cultural history and ethnography of Sweden from the early modern period to the contemporary period.`,
        open: 'Mon-Sun: 10-17',
        price: 'Adult (18+): 170 SEK<br>Student: 150 SEK<br>Children: Free',
        address: 'Djurgårdsvägen 6-16, Stockholm',
        type: 'Indoor',
        category: 'Museum',
        familyFriendly: true,
        id: 'nordicMuseum',
        button: 'nordicMuseumBtn',
        map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3161.5061931514424!2d18.091687713301294!3d59.32901071093975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d538319a8c5%3A0xd78b9c1c85cfa918!2sNordiska%20museet!5e1!3m2!1ssv!2sse!4v1744659950188!5m2!1ssv!2sse" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
        mapId: 'nordicMuseumMap'
    },
    {
        name: `Skansen Open-air Museum`,
        img: 'assets/img/skansen.jpg',
        alt: 'picture of a house at Skansen',
        text: `Skansen is the oldest open-air museum and zoo in Sweden located on the island Djurgården in Stockholm. It was opened on 11 October 1891 to show the way of life in the different parts of Sweden before the industrial era. The site include a full replica of an average 19th-century town, in which craftsmen in traditional dress such as tanners, shoemakers, silversmiths, bakers and glass-blowers demonstrate their skills in period surroundings. There is also an open-air zoo containing a wide range of Scandinavian animals including the brown bear, moose, grey seal, Eurasian lynx, wolf, fox, otter, reindeer, harbour seal, Eurasian eagle owl, great grey owl and wolverine, as well as some non-Scandinavian animals.`,
        open: 'Mon-Sun: 10-18',
        price: 'Adult: 285 SEK<br>Student: 265 SEK<br>Age 4-15: 85 SEK',
        address: 'Djurgårdsslätten 49-51, Stockholm',
        type: 'Outdoor',
        category: 'Museum',
        familyFriendly: true,
        id: 'skansen',
        button: 'skansenBtn',
        map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6323.512053433474!2d18.10327791330111!3d59.326325411154784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f82aafeda9437%3A0x2c35b6cfd6468531!2sSkansen!5e1!3m2!1ssv!2sse!4v1744661687119!5m2!1ssv!2sse" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
        mapId: 'skansenMap'
    },
    {
        name: `Vaxholm`,
        img: 'assets/img/vaxholm.jpg',
        alt: 'picture of vaxholm hotel',
        text: `Start exploring the Stockholm archipelago by going to Vaxholm. It's a city, urban area and the seat of Vaxholm Municipality, Stockholm County, Sweden. It occupies the islands of Vaxön and Kullö in the Stockholm archipelago. The name Vaxholm comes from Vaxholm Fortress, which was constructed in 1549 on the adjacent islet of Vaxholmen. For historical reasons it has always been referred to as a city, despite the small number of inhabitants, which as of 2020 total was 6,151. Vaxholm Municipality prefers to use the designation Vaxholms stad (City of Vaxholm) for its whole territory, including 64 islets in the Stockholm archipelago, a usage which is somewhat confusing. You can go to Vaxholm by both buss and boat, the most senic route would be by boat from central Stockholm.`,
        open: '',
        price: 'Free',
        address: 'Vaxholm island',
        type: 'Outdoor',
        category: 'Parks',
        familyFriendly: true,
        id: 'vaxholm',
        button: 'vaxholmBtn',
        map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21220.54780683792!2d18.32550425450693!3d59.40478691034756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465ef319667a1fc1%3A0xca12483bf0358351!2sVaxholm!5e1!3m2!1ssv!2sse!4v1744662406412!5m2!1ssv!2sse" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
        mapId: 'vaxholmMap'
    }
];
//Array with weekdays, 2 weeks so it can rotate 1 week ahead of today
const weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//Tracker if hidden element 24h forecast is visible or not
let hourlyVisible = false;

//Generate all spots when open site
$(document).ready(() => generateCards(spots));

//Add event listeners for all filters
["parks", "museums", "indoor", "outdoor", "familyFriendly", "free"].forEach(id => {
    document.getElementById(id).addEventListener("change", filter);
});

//Eventlistener for weather
document.getElementById("weatherBtn").addEventListener("click", weather);

//Eventlistener for back to spots
document.getElementById("spotsBtn").addEventListener("click", toggleToContent);

/**
 * Live filter function that updates the the content shown
 */
function filter() {
    const parks = document.getElementById("parks").checked;
    const museums = document.getElementById("museums").checked;
    const indoor = document.getElementById("indoor").checked;
    const outdoor = document.getElementById("outdoor").checked;
    const family = document.getElementById("familyFriendly").checked;
    const free = document.getElementById("free").checked;

    const filtered = spots.filter(spot => {
        const matchCategory = (!parks && !museums) ||
            (parks && spot.category === 'Parks') ||
            (museums && spot.category === 'Museum');

        const matchType = (!indoor && !outdoor) ||
            (indoor && spot.type === 'Indoor') ||
            (outdoor && spot.type === 'Outdoor');

        const matchFamily = !family || spot.familyFriendly;
        const matchFree = !free || spot.price === 'Free';
        return matchCategory && matchType && matchFamily && matchFree;
    });
    checkResult(filtered);
}

/**
 * Checks the result from filter function, if 0 then generate text no result otherwise generate cards
 * @param {*} array 
 */
function checkResult(array) {
    if (array.length === 0) {
        document.getElementById("content").innerHTML = '<p class="text-center">No Results...Try to change the filters</p>';
    } else {
        generateCards(array);
    }

}

/**
 * Function to generate code for the cards containing every spot, different cards are used depening on screen size
 * @param {*} items 
 */
function generateCards(items) {
    // Clear content of previus result
    document.getElementById("content").innerHTML = "";
    let width = window.innerWidth;

    if (width < 768) {
        for (let item of items) {
            document.getElementById("content").innerHTML += `<div class="card col-12">
            <img src="${item.img}" class="card-img-top" alt="${item.alt}">
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">${item.text}</p>
                <button id="${item.button}" class="float-end">Show more <i class="fa-solid fa-angle-down"></i></button>
                <div id="${item.id}" class="hide">
                <p class="card-text"><small class="text-body-secondary">Opening hours: ${item.open}<br>Price: ${item.price}<br>Address: ${item.address}</small></p>
                    <div class="map">
                    ${item.map}
                    </div>
                </div>
            </div>
        </div>`;
        }

    } else if (width >= 768 && width <= 992) {
        for (let item of items) {
            document.getElementById("content").innerHTML += `<div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4 sideImg">
             <img src="${item.img}" class="img-fluid" alt="${item.alt}">
           </div>
           <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">${item.text}</p>
                    <button id="${item.button}" class="float-end">Show more <i class="fa-solid fa-angle-down"></i></button>
                    <div id="${item.id}" class="hide">
                        <p class="card-text"><small class="text-body-secondary">Opening hours: ${item.open}<br>Price: ${item.price}<br>Address: ${item.address}</small></p>
                    </div>
                </div>
            </div>
        </div>
        <div id="${item.mapId}" class="row g-0 hide">
            <div class="col-12">
                <div class="map">
                    ${item.map}
                </div>
            </div>
        </div>
    </div>`;
        }
    } else {
        for (let item of items) {
            document.getElementById("content").innerHTML += `<div class="card mb-3">
            <div class="row g-0">
                <div class="col-md-4 sideImg">
                    <img src="${item.img}" class="img-fluid" alt="${item.alt}">
                </div>
                <div class="col-md-5">
                    <div class="card-body">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="card-text">${item.text}</p>
                    </div>
                </div>
                <div class="col-md-3 sideInfo">
                    <div class="card-body">
                        <p class="card-text"><small class="text-body-secondary">Opening hours: ${item.open}<br>Price: ${item.price}<br>Address: ${item.address}</small></p>
                        <button id="${item.button}">Show more <i class="fa-solid fa-angle-down"></i></button>
                    </div>
                </div>
                <div id="${item.id}" class="hide">
                    <div class="map">
                    ${item.map}
                    </div>
                </div>
            </div>
        </div>`;
        }
    }
}

//Toggle hiden text
document.getElementById("content").addEventListener("click", function(event) {
    if (event.target.tagName == "BUTTON") {
        let id = event.target.id.slice(0, event.target.id.length - 3);

        if (document.getElementById(id).getAttribute("style") === "display: block;") {
            document.getElementById(`${event.target.id}`).innerHTML = `Show more <i class="fa-solid fa-angle-down"></i>`;
            $(`#${id}`).toggle("slow");
            $(`#${id}Map`).toggle("slow");
        } else {
            document.getElementById(`${event.target.id}`).innerHTML = `Show less <i class="fa-solid fa-angle-up"></i>`;
            $(`#${id}`).toggle("slow");
            $(`#${id}Map`).toggle("slow");
        }
    }
});

/**
 * Weather function that hide spots content div and shows weather div, API for weather with open-meteo.com
 */
async function weather() {

    const weatherAPI = 'https://api.open-meteo.com/v1/forecast?latitude=59.3294&longitude=18.0687&daily=weather_code,temperature_2m_max,temperature_2m_min,wind_speed_10m_max,precipitation_sum&hourly=temperature_2m,weather_code,wind_speed_10m,precipitation&current=temperature_2m,wind_speed_10m,precipitation,weather_code&timezone=Europe%2FBerlin&wind_speed_unit=ms';
    const weatherResponse = await fetch(weatherAPI);
    const weatherData = await weatherResponse.json();

    if (weatherResponse.ok) {
        //Check the day
        let currentDay = checkDay(weatherData.current.time);
        //Show current weather
        const currentWeather = checkWeatherCode(weatherData.current.weather_code);

        document.getElementById("currentDay").innerHTML = `${currentDay}`;
        document.getElementById("currentDateData").innerHTML = `${weatherData.current.time}`;
        document.getElementById("currentSymbol").innerHTML = `${currentWeather[0]}`;
        document.getElementById("currentText").innerHTML = `${currentWeather[1]}`;
        document.getElementById("currentTempData").innerHTML = `${Math.round(weatherData.current.temperature_2m)}`;
        document.getElementById("currentWindData").innerHTML = `${Math.round(weatherData.current.wind_speed_10m)}`;
        document.getElementById("currentPrecipitationData").innerHTML = `${weatherData.current.precipitation}`;

        //Show hourly 24h forward from present time
        detailedForecast(weatherData);
        //Create daily forecast for a week
        weeklyForecast(weatherData.daily);

        //Hide places/spots div and show weather div
        document.getElementById("content").classList.add("hide");
        document.getElementById("filter").classList.add("hide");
        document.getElementById("weather").classList.remove("hide");
    } else {
        alert("Weather function not available right now");
        throw new Error(weatherData.error);
    }
}
/**
 * Function to check day, returns day of today, send current.time from API, weekDay array declared up at global variables
 * @param {*} d 
 */
function checkDay(d) {
    let date = new Date(d);
    let currentDay = weekDay[date.getDay()];
    return currentDay;
}
/**
 * Generate the detailed 48h forecast
 * @param {*} data 
 */
function detailedForecast(data) {
    //code to find index of now in hourly data that starts att 00 of today, but since current time can be 18:45 then I use slice to cut :45 so indexOf works. 
    let hourlySliced = [];
    for (let i = 0; i < 24; i++) {
        hourlySliced.push(data.hourly.time[i].slice(0, 13));
    }
    let index = hourlySliced.indexOf(data.current.time.slice(0, 13));
    document.getElementById("hourlyForecast").innerHTML = ``;
    for (let i = 0; i < 24; i++) {
        let symbolText = checkWeatherCode(data.hourly.weather_code[index]);
        document.getElementById("hourlyForecast").innerHTML += `<div class="hourly">
    <p>${data.hourly.time[index].slice(11)} ${symbolText[0]} ${Math.round(data.hourly.temperature_2m[index])}°C ${Math.round(data.hourly.wind_speed_10m[index])}m/s ${data.hourly.precipitation[index]}mm</p>
    </div>`;
        index++;
    }
}
/**
 * Function to toggle 48h hourly forecast
 */
document.getElementById("hourlyBtn").addEventListener("click", function() {
    $("#hourlyForecast").toggle("slow");
    if (!hourlyVisible) {
        document.getElementById("hourlyBtn").innerHTML = `Hide hourly 24h forecast <i class="fa-solid fa-angle-up"></i>`;
        hourlyVisible = true;
    } else {
        document.getElementById("hourlyBtn").innerHTML = `Show hourly 24h forecast <i class="fa-solid fa-angle-down"></i>`;
        hourlyVisible = false;
    }
});
/**
 * Generate cards with daily forecast 7 days
 * @param {*} data 
 */
function weeklyForecast(data) {
    let today = checkDay(data.time[0]);
    let dayIndex = weekDay.indexOf(today);
    let i = 0;
    let symbolText = checkWeatherCode(data.weather_code[i]);

    document.getElementById("weeklyCards").innerHTML = ``;
    //Create first card with text Today (weekday)
    document.getElementById("weeklyCards").innerHTML += `<div class="col-12 col-md-6 col-lg-4 col-xl-3">
                <div class="card">
                    <div class="card-body">
                    <h5 class="card-title">Today <span id="dayFirstCard">(${weekDay[dayIndex]})</span></h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">${data.time[i]}</h6>
                    <p class="card-text">${symbolText[0]}</p>
                    <p class="card-text">${symbolText[1]}</p>
                    <p class="card-text">Temp: ${Math.round(data.temperature_2m_max[i])} °C (${Math.round(data.temperature_2m_min[i])} °C)</p>
                    <p class="card-text">Max Wind: ${Math.round(data.wind_speed_10m_max[i])} m/s</p>
                    <p class="card-text">Estimated Precipitation: ${data.precipitation_sum[i]} mm</p>
                    </div>
                </div>
            </div>`;
    i++;
    dayIndex++;
    //Create the rest of the cards with only weekday as headline
    for (i; i < 7; i++) {
        symbolText = checkWeatherCode(data.weather_code[i]);
        document.getElementById("weeklyCards").innerHTML += `<div class="col-12 col-md-6 col-lg-4 col-xl-3">
                <div class="card">
                    <div class="card-body">
                    <h5 class="card-title">${weekDay[dayIndex]}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">${data.time[i]}</h6>
                    <p class="card-text">${symbolText[0]}</p>
                    <p class="card-text">${symbolText[1]}</p>
                    <p class="card-text">Temp: ${Math.round(data.temperature_2m_max[i])} °C (${Math.round(data.temperature_2m_min[i])} °C)</p>
                    <p class="card-text">Max Wind: ${Math.round(data.wind_speed_10m_max[i])} m/s</p>
                    <p class="card-text">Estimated Precipitation: ${data.precipitation_sum[i]} mm</p>
                    </div>
                </div>
            </div>`;
        dayIndex++;
    }

}
/**
 * Function to check weather code from open-meteo.com API and return symbol and text in a array with symbol index 0 and text index 1.
 */
function checkWeatherCode(weatherCode) {
    let symbolText = [];
    if (weatherCode === 0) {
        symbolText = [`<i class="fa-solid fa-sun"></i>`, `Clear skies`];
    } else if (weatherCode === 1) {
        symbolText = [`<i class="fa-solid fa-cloud-sun"></i>`, `Mainly clear`];
    } else if (weatherCode === 2) {
        symbolText = [`<i class="fa-solid fa-cloud-sun"></i>`, `Partly cloudy`];
    } else if (weatherCode === 3) {
        symbolText = [`<i class="fa-solid fa-cloud"></i>`, `Cloudy`];
    } else if (weatherCode === 45 || weatherCode === 48) {
        symbolText = [`<i class="fa-solid fa-smog"></i>`, `Fog`];
    } else if (weatherCode === 51 || weatherCode === 53 || weatherCode === 55) {
        symbolText = [`<i class="fa-solid fa-cloud-rain"></i>`, `Drizzle`];
    } else if (weatherCode === 61 || weatherCode === 63) {
        symbolText = [`<i class="fa-solid fa-cloud-rain"></i>`, `Rain`];
    } else if (weatherCode === 65) {
        symbolText = [`<i class="fa-solid fa-cloud-showers-heavy"></i>`, `Heavy rain`];
    } else if (weatherCode === 71 || weatherCode === 73 || weatherCode === 75) {
        symbolText = [`<i class="fa-solid fa-snowflake"></i>`, `Snow fall`];
    } else if (weatherCode === 80 || weatherCode === 81 || weatherCode === 82) {
        symbolText = [`<i class="fa-solid fa-cloud-sun-rain"></i>`, `Rain showers`];
    } else if (weatherCode === 95 || weatherCode === 96 || weatherCode === 99) {
        symbolText = [`<i class="fa-solid fa-cloud-bolt"></i>`, `Risk of thunderstorm`];
    } else {
        symbolText = [`<i class="fa-solid fa-cloud"></i>`, `Cloudy`];
    }
    return symbolText;
}

/**
 * Toggle back to content and tourist spots div after weather div
 */
function toggleToContent() {
    document.getElementById("weather").classList.add("hide");
    document.getElementById("filter").classList.remove("hide");
    document.getElementById("content").classList.remove("hide");

}